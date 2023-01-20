import { ReactNode } from 'react';
import Nav from './Nav';

interface ContainerProps {
  children: ReactNode;
}

export default function Container(props: ContainerProps) {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>{props.children}</main>
    </>
  );
}
