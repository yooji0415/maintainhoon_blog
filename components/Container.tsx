import { ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';

interface ContainerProps {
  children: ReactNode;
}

export default function Container(props: ContainerProps) {
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  );
}
