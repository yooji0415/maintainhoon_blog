# 🥳 소개

<table>
  <tr>
    <td><img width="600" alt="스크린샷 2023-02-02 오후 8 56 38" src="https://user-images.githubusercontent.com/79080098/216559255-783e34df-3b01-4011-8e9b-659566231afe.png"></td>
    <td><img width="600" alt="스크린샷 2023-02-02 오후 8 49 30" src="https://user-images.githubusercontent.com/79080098/216559299-b11b3f34-7509-404e-bc08-03898ec0c6b3.png"></td>
  </tr>
</table>


**Next.js**, **TypeScript**, **tailwindcss** 기반의 정적 블로그를 운영하고 있습니다.

이 레포지토리는 해당 블로그의 개발 코드와 블로그 글을 담고 있습니다.

블로그 관련 주소는 다음과 같습니다.

블로그 주소: [https://maintainhoon.vercel.app/](https://maintainhoon.vercel.app/) <br/>
블로그 개발기: [https://maintainhoon.vercel.app/blog/post/blog_development_period](https://maintainhoon.vercel.app/blog/post/blog_development_period)

<br/>

# 🙇🏻‍♂️ 참고 자료

1. **[https://miryang.dev/blog/build-blog-with-nextjs](https://miryang.dev/blog/build-blog-with-nextjs)** <br/>
   기본적인 블로그 틀을 만드는데 가장 도움을 준 글 입니다. Next.js의 세세한 내부 내용을 알려주시는 것은 아니지만 왜 이렇게 하셨는지, 어떤 라이브러리를 사용해야 하는지 등을 순서대로 잘 적으셨습니다. 다시 한번 감사드립니다. 🙇🏻‍♂️

2. **[https://tailwindcss.com/docs/installation](https://tailwindcss.com/docs/installation)** <br/>
   tailwindcss 공식 문서입니다. 평소 사용하던 css관련 키워드를 검색하면 잘 알려줍니다.

3. **[https://nextjs.org/docs/getting-started](https://nextjs.org/docs/getting-started)** <br/>
   Next.js 공식 문서입니다. 궁금한 세부 사항이 있을 때 참고했습니다.

<br/>

# ⚙️ 실행 방법

현 레포지토리를 clone 하신 이후 build, start 혹은 dev 명령어를 통해서 실행해보실 수 있습니다.

만약 순차적인 개발을 경험해보고 싶으신 분은 위 링크의 개발기를 참고하셔서 따라해보시면 됩니다.

```bash
yarn install
yarn build
yarn start
```

<br/>

# 📂 폴더 구조 및 파일 설명

_2023.02.03 기준_

```markdown
blog
├─ .eslintrc.js
├─ .prettierrc.js
├─ README.md
├─ components
│ ├─ BlogPost.tsx
│ ├─ CategoryList.tsx
│ ├─ Footer.tsx
│ ├─ Header.tsx
│ ├─ Layout.tsx
│ ├─ Nav.tsx
│ ├─ PostList.tsx
│ └─ Utterances.tsx
├─ contentlayer.config.ts
├─ data
│ ├─ categorys.ts
│ └─ nav.ts
├─ next-sitemap.config.js
├─ next.config.js
├─ package.json
├─ pages
│ ├─ \_app.tsx
│ ├─ \_document.tsx
│ ├─ \_error.tsx
│ ├─ blog
│ │ ├─ index.tsx
│ │ └─ post
│ │ └─ [slug].tsx
│ ├─ category
│ │ └─ index.tsx
│ └─ index.tsx
├─ postcss.config.js
├─ posts
├─ public
├─ styles
│ └─ globals.css
├─ tailwind.config.js
├─ tsconfig.json
└─ yarn.lock
```

- ./components: 블로그 개발시 사용한 컴포넌트들 입니다.

  - BlogPost: 블로그 개시글 컴포넌트 입니다.
  - CategoryList: 블로그 카테코리 페이지의 카테고리 버튼들을 위한 컴포넌트 입니다.
  - Footer: 하단의 Footer를 위한 컴포넌트 입니다.
  - Header: 상단의 Header를 위한 컴포넌트 입니다.
  - Layout: Header와 Footer를 포함한 블로그 전반적인 공통 레이아웃을 담은 컴포넌트 입니다.
  - Nav: GNB를 만들기 위한 컴포넌트 입니다.
  - PostList: BlogPost 컴포넌트를 나열해주는 컴포넌트 입니다.
  - Utterances: 댓글 기능을 위한 컴포넌트 입니다.


- ./pages: 라우팅을 위한 pages 폴더입니다.

  - ./pages/index: 블로그 기본 홈 페이지를 위해 만들었습니다.
  - ./pages/blog/index: 블로그 내부 블로그 페이지를 위해 만들었습니다.
  - ./pages/category/index: 블로그 내부 카테고리 페이지를 위해 만들었습니다.
  - ./pages/post/[slug]: 블로그 본문 페이지를 위해 만들었습니다.


- ./posts: 여기에 본인이 적은 블로그 글 mdx 파일을 넣어주면 됩니다. 기본적인 규격은 아래와 같습니다.
  ```markdown
  ---
  title: 제목을 적어주시면 됩니다.
  date: yyyy-MM-dd 규격으로 적어주시면 됩니다.
  description: 대략적인 설명 글을 적어주시면 됩니다.
  category: 본인이 생각한 카테고리를 적어주시면 됩니다.
  ---

  # 이곳에 글을 적어주시면 됩니다.
  ```
