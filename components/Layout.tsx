import { ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout(props: LayoutProps) {
  return (
    <>
      <Header />
      <main className="max-w-screen-md flex flex-col px-10 m-auto">{props.children}</main>
      <Footer />
    </>
  );
}
