import { ReactNode } from 'react';
import Nav from './Nav';
import Image from 'next/image';

interface ContainerProps {
  children: ReactNode;
}

export default function Container(props: ContainerProps) {
  return (
    <>
      <header className="sticky top-0 left-0 w-full z-10 h-20 font-mono border-b-2">
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
