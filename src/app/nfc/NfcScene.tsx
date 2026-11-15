'use client';

import { useEffect, useRef } from 'react';
import type { MotionValue } from 'motion/react';
import * as THREE from 'three';

function roundedShape(width: number, height: number, radius: number) {
  const x = -width / 2,
    y = -height / 2;
  const shape = new THREE.Shape();
  shape.moveTo(x + radius, y);
  shape.lineTo(x + width - radius, y);
  shape.quadraticCurveTo(x + width, y, x + width, y + radius);
  shape.lineTo(x + width, y + height - radius);
  shape.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  shape.lineTo(x + radius, y + height);
  shape.quadraticCurveTo(x, y + height, x, y + height - radius);
  shape.lineTo(x, y + radius);
  shape.quadraticCurveTo(x, y, x + radius, y);
  return shape;
}

function artwork(back: boolean) {
  const canvas = document.createElement('canvas');
  canvas.width = 640;
  canvas.height = 1024;
  const ctx = canvas.getContext('2d')!;
  const gradient = ctx.createLinearGradient(0, 0, 640, 1024);
  gradient.addColorStop(0, '#29232f');
  gradient.addColorStop(1, '#090c12');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 640, 1024);
  ctx.strokeStyle = '#ab3b5a';
  ctx.lineWidth = 2;
  ctx.strokeRect(28, 28, 584, 968);
  ctx.fillStyle = '#f6eaf0';
  ctx.textAlign = 'center';
  if (back) {
    ctx.font = '500 44px Arial';
    ['MORE', 'THAN A', 'CARD.'].forEach((line, i) => ctx.fillText(line, 320, 410 + i * 76));
    ctx.strokeStyle = '#ff285830';
    for (let i = 0; i < 7; i++) {
      ctx.beginPath();
      ctx.arc(640, 160, 100 + i * 90, 0, Math.PI * 2);
      ctx.stroke();
    }
  } else {
    ctx.font = 'bold 168px Arial';
    ctx.fillText('SB', 305, 540);
    ctx.fillStyle = '#ff2858';
    ctx.fillRect(423, 517, 18, 18);
    ctx.strokeStyle = '#f6eaf0';
    ctx.lineWidth = 7;
    for (let i = 0; i < 3; i++) {
      ctx.beginPath();
      ctx.arc(500, 150, 13 + i * 18, -0.75, 0.75);
      ctx.stroke();
    }
  }
  ctx.fillStyle = '#d6b4c0';
  ctx.font = '20px Arial';
  ctx.fillText(back ? 'YOUR WORLD. ONE TAP.' : 'TAP TO CONNECT', 320, 912);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 4;
  return texture;
}

const smooth = (a: number, b: number, p: number) => THREE.MathUtils.smoothstep(p, a, b);

export default function NfcScene({
  progress,
  onReady,
  onError,
}: {
  progress: MotionValue<number>;
  onReady: () => void;
  onError: () => void;
}) {
  const mount = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const container = mount.current;
    if (!container) return;
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: 'low-power',
      });
    } catch {
      onError();
      return;
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.appendChild(renderer.domElement);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 50);
    camera.position.z = 9;
    scene.add(new THREE.AmbientLight('#c8d3ed', 1.2));
    const key = new THREE.DirectionalLight('#fff1ed', 3);
    key.position.set(-3, 4, 6);
    scene.add(key);
    const rim = new THREE.DirectionalLight('#ff2858', 5);
    rim.position.set(4, 1, -2);
    scene.add(rim);
    const fill = new THREE.DirectionalLight('#9ba9ff', 2);
    fill.position.set(-3, -2, -3);
    scene.add(fill);

    const geometry = new THREE.ExtrudeGeometry(roundedShape(2.45, 3.9, 0.18), {
      depth: 0.045,
      bevelEnabled: true,
      bevelSegments: 2,
      steps: 1,
      bevelSize: 0.018,
      bevelThickness: 0.012,
      curveSegments: 10,
    });
    geometry.translate(0, 0, -0.0225);
    const edge = new THREE.MeshStandardMaterial({
      color: '#68243d',
      metalness: 0.65,
      roughness: 0.3,
    });
    const card = new THREE.Group();
    card.add(new THREE.Mesh(geometry, edge));
    const faceGeometry = new THREE.ShapeGeometry(roundedShape(2.45, 3.9, 0.18));
    const position = faceGeometry.attributes.position;
    faceGeometry.setAttribute(
      'uv',
      new THREE.Float32BufferAttribute(
        Array.from({ length: position.count }, (_, i) => [
          position.getX(i) / 2.45 + 0.5,
          position.getY(i) / 3.9 + 0.5,
        ]).flat(),
        2,
      ),
    );
    const textures = [artwork(false), artwork(true)];
    const materials = textures.map(
      (map) =>
        new THREE.MeshPhysicalMaterial({
          map,
          roughness: 0.48,
          metalness: 0.15,
          clearcoat: 0.45,
          clearcoatRoughness: 0.38,
        }),
    );
    materials.forEach((material, i) => {
      const face = new THREE.Mesh(faceGeometry, material);
      face.position.z = i ? -0.037 : 0.037;
      face.rotation.y = i ? Math.PI : 0;
      card.add(face);
    });
    scene.add(card);

    const phone = new THREE.Group();
    const phoneGeometry = new THREE.ExtrudeGeometry(roundedShape(1.65, 3.25, 0.22), {
      depth: 0.12,
      bevelEnabled: true,
      bevelSize: 0.025,
      bevelThickness: 0.025,
      bevelSegments: 2,
      steps: 1,
    });
    const phoneMaterial = new THREE.MeshStandardMaterial({
      color: '#20232c',
      metalness: 0.65,
      roughness: 0.3,
    });
    phone.add(new THREE.Mesh(phoneGeometry, phoneMaterial));
    const screenGeometry = new THREE.ShapeGeometry(roundedShape(1.45, 2.96, 0.14));
    const phoneCanvas = document.createElement('canvas');
    phoneCanvas.width = 320;
    phoneCanvas.height = 640;
    const phoneContext = phoneCanvas.getContext('2d')!;
    phoneContext.fillStyle = '#100d16';
    phoneContext.fillRect(0, 0, 320, 640);
    phoneContext.fillStyle = '#f4dae3';
    phoneContext.textAlign = 'center';
    phoneContext.font = 'bold 40px Arial';
    phoneContext.fillText('SB.', 160, 150);
    phoneContext.font = 'bold 27px Arial';
    phoneContext.fillText('Connesso.', 160, 475);
    phoneContext.fillStyle = '#ad9ba6';
    phoneContext.font = '16px Arial';
    phoneContext.fillText('Il tuo mondo, in un tap.', 160, 514);
    phoneContext.fillStyle = '#06060a';
    phoneContext.fillRect(112, 22, 96, 14);
    const phoneTexture = new THREE.CanvasTexture(phoneCanvas);
    phoneTexture.colorSpace = THREE.SRGBColorSpace;
    textures.push(phoneTexture);
    const screenPosition = screenGeometry.attributes.position;
    screenGeometry.setAttribute(
      'uv',
      new THREE.Float32BufferAttribute(
        Array.from({ length: screenPosition.count }, (_, i) => [
          screenPosition.getX(i) / 1.45 + 0.5,
          screenPosition.getY(i) / 2.96 + 0.5,
        ]).flat(),
        2,
      ),
    );
    const screenMaterial = new THREE.MeshBasicMaterial({ map: phoneTexture });
    const screen = new THREE.Mesh(screenGeometry, screenMaterial);
    screen.position.z = 0.151;
    phone.add(screen);
    const ringGeometry = new THREE.RingGeometry(0.28, 0.3, 48);
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: '#ff527c',
      transparent: true,
      opacity: 0,
      side: THREE.DoubleSide,
    });
    const ring = new THREE.Mesh(ringGeometry, ringMaterial);
    ring.position.z = 0.16;
    phone.add(ring);
    const dotGeometry = new THREE.CircleGeometry(0.1, 24);
    const dotMaterial = new THREE.MeshBasicMaterial({ color: '#ff6487' });
    const dot = new THREE.Mesh(dotGeometry, dotMaterial);
    dot.position.z = 0.16;
    phone.add(dot);
    scene.add(phone);
    let visible = true,
      frame = 0,
      disposed = false;
    const draw = () => {
      frame = 0;
      if (disposed || !visible || document.hidden) return;
      const p = progress.get();
      container.dataset.progress = p.toFixed(3);
      const turn = smooth(0.17, 0.45, p),
        returnTurn = smooth(0.48, 0.69, p),
        end = smooth(0.77, 0.97, p);
      card.rotation.set(
        0.13 - returnTurn * 0.2,
        -0.32 + turn * Math.PI - returnTurn * Math.PI + end * 0.3,
        -0.18 + turn * 0.28 - returnTurn * 0.2,
      );
      card.position.set(-returnTurn * 0.55 + end * 0.55, 0.08 + Math.sin(p * Math.PI) * 0.12, 0);
      card.scale.setScalar(1 - returnTurn * 0.14 + end * 0.06);
      const tap = smooth(0.47, 0.65, p) * (1 - smooth(0.77, 0.91, p));
      phone.visible = tap > 0.001;
      phone.position.set(4 - tap * 2.7, -0.3, 0.6);
      phone.rotation.set(-0.08, -0.35, -0.08);
      phone.scale.setScalar(0.8);
      const pulse = smooth(0.58, 0.74, p);
      ring.scale.setScalar(1 + pulse * 2.8);
      ringMaterial.opacity = tap * (1 - pulse) * 0.9;
      dotMaterial.color.set(p > 0.65 ? '#f4d4e1' : '#ff6487');
      try {
        renderer.render(scene, camera);
      } catch {
        onError();
      }
    };
    const requestDraw = () => {
      if (!frame && !disposed && visible && !document.hidden) frame = requestAnimationFrame(draw);
    };
    const resize = () => {
      const { width, height, top, bottom } = container.getBoundingClientRect();
      if (!width || !height) return;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.position.z = camera.aspect < 1.15 ? 8 : 8.7;
      camera.updateProjectionMatrix();
      visible = bottom > 0 && top < window.innerHeight;
      cancelAnimationFrame(frame);
      draw();
    };
    const unsubscribe = progress.on('change', requestDraw);
    const observer = new ResizeObserver(resize);
    observer.observe(container);
    const intersection = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      requestDraw();
    });
    intersection.observe(container);
    const contextLost = (event: Event) => {
      event.preventDefault();
      onError();
    };
    renderer.domElement.addEventListener('webglcontextlost', contextLost);
    document.addEventListener('visibilitychange', requestDraw);
    resize();
    onReady();
    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      unsubscribe();
      observer.disconnect();
      intersection.disconnect();
      document.removeEventListener('visibilitychange', requestDraw);
      renderer.domElement.removeEventListener('webglcontextlost', contextLost);
      geometry.dispose();
      faceGeometry.dispose();
      edge.dispose();
      materials.forEach((m) => m.dispose());
      textures.forEach((t) => t.dispose());
      phoneGeometry.dispose();
      phoneMaterial.dispose();
      screenGeometry.dispose();
      screenMaterial.dispose();
      ringGeometry.dispose();
      ringMaterial.dispose();
      dotGeometry.dispose();
      dotMaterial.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, [progress, onReady, onError]);
  return <div ref={mount} aria-hidden="true" />;
}
