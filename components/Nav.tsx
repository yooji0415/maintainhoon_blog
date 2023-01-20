import Link from 'next/link';
import { nav } from '@/data/nav';

export default function Nav() {
  return (
    <nav className="w-full bg-gray-700">
      <div className="flex max-width-sm">
        {nav.map((item) => {
          const { title, location } = item;
          return (
            <Link href={location} key={title}>
              {title}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
