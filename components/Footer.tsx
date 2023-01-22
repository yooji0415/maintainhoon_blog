import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="w-full font-mono flex flex-col justify-center items-center mt-16 py-6">
      <div className="flex justify-center gap-4 items-center pt-4 border-t-2 w-36">
        <a href="mailto:gch05406@gmail.com">
          <Image src="/images/email.svg" alt="email" width={24} height={24} />
        </a>
        <a href="https://github.com/yooji0415">
          <Image src="/images/github.svg" alt="github" width={24} height={24} />
        </a>
      </div>
      <div className="text-sm mt-2">Copyright © 2023 JiHoon Yoo</div>
      <div className="text-xs mt-2">maintain.dev</div>
    </footer>
  );
}
