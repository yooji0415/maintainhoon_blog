import { useEffect, useRef, useState } from 'react';
import Nav from './Nav';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';

export default function Header() {
  const headerRef = useRef<HTMLElement | null>(null);
  const toggleRef = useRef<HTMLDivElement | null>(null);
  const [onToggle, setOnToggle] = useState<boolean>(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      headerRef.current?.classList.add('shadow-[0_5px_7px_0px_#ececec]');
      return;
    }
    headerRef.current?.classList.remove('shadow-[0_5px_7px_0px_#ececec]');
  };

  const handleToggle = () => {
    if (onToggle) toggleRef.current?.classList.add('hidden');
    else toggleRef.current?.classList.remove('hidden');
    setOnToggle((prev) => !prev);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Maintain Hoon</title>
      </Head>
      <header
        ref={headerRef}
        className="sticky top-0 left-0 w-full z-10 h-20 font-mono transition-shadow duration-500 bg-white"
      >
        <div className="text-black max-w-screen-md h-20 flex flex-nowrap items-center justify-between m-auto px-8">
          <Link href="/">
            <Image src="/images/logo.png" alt="profile" width={180} height={30} />
          </Link>
          <button type="button" className="m-0 p-0 sm:hidden" onClick={handleToggle}>
            <Image src="/images/menu.svg" alt="menu" width={30} height={30} />
          </button>
          <div className="flex-nowrap items-center justify-center gap-5 text-center hidden sm:flex">
            <Nav type="normal" />
          </div>
        </div>
        <div
          ref={toggleRef}
          className="w-full h-screen absolute top-20 left-0 bg-white flex-col flex-nowrap p-5 flex hidden"
        >
          <Nav type="toggle" onClick={handleToggle} />
        </div>
      </header>
    </>
  );
}
