import Link from 'next/link';
import { nav } from '@/data/nav';

interface NavProps {
  type: 'toggle' | 'normal';
  onClick?: () => void;
}

export default function Nav({ type, onClick }: NavProps) {
  return (
    <>
      {nav.map((item) => {
        const { title, location } = item;
        return (
          <Link
            href={location}
            key={title}
            className={
              type === 'normal'
                ? 'text-center transition duration-250 hover:scale-125 hover:text-green-500'
                : 'text-center text-lg py-4 transition duration-250 hover:scale-125 hover:text-green-500'
            }
            onClick={
              onClick
                ? onClick
                : () => {
                    return;
                  }
            }
          >
            {title}
          </Link>
        );
      })}
    </>
  );
}
