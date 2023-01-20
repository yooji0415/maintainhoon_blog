import Link from 'next/link';
import { nav } from '@/data/nav';

export default function Nav() {
  return (
    <>
      {nav.map((item) => {
        const { title, location } = item;
        return (
          <Link
            href={location}
            key={title}
            className="text-center transition duration-250 hover:scale-125 hover:text-green-500"
          >
            {title}
          </Link>
        );
      })}
    </>
  );
}
