import Image from 'next/image';

export default function Home() {
  return (
    <>
      <section className="my-10">
        <h1 className="font-bold text-2xl sm:text-4xl font-mono">🧑🏻‍💻 Maintain Hoon</h1>
      </section>
      <section className="flex justify-center gap-8 items-center flex-wrap">
        <Image
          src="/images/profile.jpeg"
          alt="profile"
          width={300}
          height={300}
          className="rounded-2xl"
        />
        <div className="min-w-[250] max-w-[300px]">
          <h2 className="font-bold text-xl">프론트엔드 개발자 유지훈 입니다.</h2>
          <br />
          <p>건강한 성장곡선을 위해서 노력합니다.</p>
          <p>정리를 하는 습관을 들이려고 노력합니다.</p>
          <div className="flex gap-5 items-center mt-4">
            <a
              href="mailto:gch05406@gmail.com"
              className="flex gap-2 items-center transition duration-250 hover:scale-110"
            >
              <Image src="/images/email.svg" alt="mail" width={24} height={24} />
              <p>Mail</p>
            </a>
            <a
              href="https://github.com/yooji0415"
              className="flex gap-2 items-center transition duration-250 hover:scale-110"
            >
              <Image src="/images/github.svg" alt="github" width={24} height={24} />
              <p>GitHub</p>
            </a>
          </div>
        </div>
      </section>
      <section className="mt-12 mb-10">
        <h1 className="font-bold text-2xl sm:text-4xl font-mono">📝 Recent Posts</h1>
      </section>
    </>
  );
}
