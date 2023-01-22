import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full font-mono flex flex-col justify-center items-center mt-16 py-6">
      <div className="flex justify-center gap-4 items-center">
        <a href="mailto:gch05406@gmail.com">
          <Image src="/images/emil.svg" alt="email" width={30} height={30} />
        </a>
        <a href="https://github.com/yooji0415">
          <Image src="/images/github.svg" alt="github" width={30} height={30} />
        </a>
      </div>
      <div className="text-sm mt-2">Copyright © 2023 JiHoon Yoo</div>
      <div className="text-xs mt-2">maintain.dev</div>
    </footer>
  );
}
