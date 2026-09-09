import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './ArrowIcon.css';

type Direction = 'right' | 'left' | 'up' | 'down' | 'up-right';

const rotations: Record<Direction, number> = {
  right: 0,
  left: 180,
  up: -90,
  down: 90,
  'up-right': -45,
};

export default function ArrowIcon({ direction = 'right' }: { direction?: Direction }) {
  const [width, height, , , path] = faArrowRight.icon;
  return (
    <svg
      className="site-arrow-icon"
      viewBox={`0 0 ${width} ${height}`}
      width="14"
      height="14"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      style={{ transform: `rotate(${rotations[direction]}deg)` }}
    >
      {Array.isArray(path) ? path.map((d) => <path key={d} d={d} />) : <path d={path} />}
    </svg>
  );
}
