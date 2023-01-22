import { ReactNode, useEffect, useRef } from 'react';
import Nav from './Nav';
import Image from 'next/image';

interface ContainerProps {
  children: ReactNode;
}

export default function Container(props: ContainerProps) {
  const headerRef = useRef<HTMLElement | null>(null);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      headerRef.current?.classList.add('shadow-[0_5px_7px_0px_#ececec]');
      return;
    }
    headerRef.current?.classList.remove('shadow-[0_5px_7px_0px_#ececec]');
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header
        ref={headerRef}
        className="sticky top-0 left-0 w-full z-10 h-20 font-mono transition-shadow duration-500 bg-white"
      >
        <div className="text-black max-w-screen-md h-20 flex flex-nowrap items-center justify-between m-auto px-8">
          <Image src="/images/logo.png" alt="profile" width={180} height={30} />
          <div className="flex flex-nowrap items-center justify-center gap-5 text-center">
            <Nav />
          </div>
        </div>
      </header>
      <main>{props.children}</main>
    </>
  );
}
