# ๐ฅณย ์๊ฐ

<table>
  <tr>
    <td><img width="600" alt="แแณแแณแแตแซแแฃแบ 2023-02-02 แแฉแแฎ 8 56 38" src="https://user-images.githubusercontent.com/79080098/216559255-783e34df-3b01-4011-8e9b-659566231afe.png"></td>
    <td><img width="600" alt="แแณแแณแแตแซแแฃแบ 2023-02-02 แแฉแแฎ 8 49 30" src="https://user-images.githubusercontent.com/79080098/216559299-b11b3f34-7509-404e-bc08-03898ec0c6b3.png"></td>
  </tr>
</table>


**Next.js**, **TypeScript**, **tailwindcss** ๊ธฐ๋ฐ์ ์ ์  ๋ธ๋ก๊ทธ๋ฅผ ์ด์ํ๊ณ  ์์ต๋๋ค.

์ด ๋ ํฌ์งํ ๋ฆฌ๋ ํด๋น ๋ธ๋ก๊ทธ์ ๊ฐ๋ฐ ์ฝ๋์ ๋ธ๋ก๊ทธ ๊ธ์ ๋ด๊ณ  ์์ต๋๋ค.

๋ธ๋ก๊ทธ ๊ด๋ จ ์ฃผ์๋ ๋ค์๊ณผ ๊ฐ์ต๋๋ค.

๋ธ๋ก๊ทธ ์ฃผ์: [https://maintainhoon.vercel.app/](https://maintainhoon.vercel.app/) <br/>
๋ธ๋ก๊ทธ ๊ฐ๋ฐ๊ธฐ: [https://maintainhoon.vercel.app/blog/post/blog_development_period](https://maintainhoon.vercel.app/blog/post/blog_development_period)

<br/>

# ๐๐ปโโ๏ธย ์ฐธ๊ณ  ์๋ฃ

1. **[https://miryang.dev/blog/build-blog-with-nextjs](https://miryang.dev/blog/build-blog-with-nextjs)**ย <br/>
   ๊ธฐ๋ณธ์ ์ธ ๋ธ๋ก๊ทธ ํ์ ๋ง๋๋๋ฐ ๊ฐ์ฅ ๋์์ ์ค ๊ธ ์๋๋ค. Next.js์ ์ธ์ธํ ๋ด๋ถ ๋ด์ฉ์ ์๋ ค์ฃผ์๋ ๊ฒ์ ์๋์ง๋ง ์ ์ด๋ ๊ฒ ํ์จ๋์ง, ์ด๋ค ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ฅผ ์ฌ์ฉํด์ผ ํ๋์ง ๋ฑ์ ์์๋๋ก ์ ์ ์ผ์จ์ต๋๋ค. ๋ค์ ํ๋ฒ ๊ฐ์ฌ๋๋ฆฝ๋๋ค. ๐๐ปโโ๏ธ

2. **[https://tailwindcss.com/docs/installation](https://tailwindcss.com/docs/installation)** <br/>
   tailwindcss ๊ณต์ ๋ฌธ์์๋๋ค. ํ์ ์ฌ์ฉํ๋ css๊ด๋ จ ํค์๋๋ฅผ ๊ฒ์ํ๋ฉด ์ ์๋ ค์ค๋๋ค.

3. **[https://nextjs.org/docs/getting-started](https://nextjs.org/docs/getting-started)** <br/>
   Next.js ๊ณต์ ๋ฌธ์์๋๋ค. ๊ถ๊ธํ ์ธ๋ถ ์ฌํญ์ด ์์ ๋ ์ฐธ๊ณ ํ์ต๋๋ค.

<br/>

# โ๏ธย ์คํ ๋ฐฉ๋ฒ

ํ ๋ ํฌ์งํ ๋ฆฌ๋ฅผ clone ํ์  ์ดํ build, start ํน์ dev ๋ช๋ น์ด๋ฅผ ํตํด์ ์คํํด๋ณด์ค ์ ์์ต๋๋ค.

๋ง์ฝ ์์ฐจ์ ์ธ ๊ฐ๋ฐ์ ๊ฒฝํํด๋ณด๊ณ  ์ถ์ผ์  ๋ถ์ ์ ๋งํฌ์ ๊ฐ๋ฐ๊ธฐ๋ฅผ ์ฐธ๊ณ ํ์์ ๋ฐ๋ผํด๋ณด์๋ฉด ๋ฉ๋๋ค.

```bash
yarn install
yarn build
yarn start
```

<br/>

# ๐ย ํด๋ ๊ตฌ์กฐ ๋ฐ ํ์ผ ์ค๋ช

_2023.02.03 ๊ธฐ์ค_

```markdown
blog
โโ .eslintrc.js
โโ .prettierrc.js
โโ README.md
โโ components
โ โโ BlogPost.tsx
โ โโ CategoryList.tsx
โ โโ Footer.tsx
โ โโ Header.tsx
โ โโ Layout.tsx
โ โโ Nav.tsx
โ โโ PostList.tsx
โ โโ Utterances.tsx
โโ contentlayer.config.ts
โโ data
โ โโ categorys.ts
โ โโ nav.ts
โโ next-sitemap.config.js
โโ next.config.js
โโ package.json
โโ pages
โ โโ \_app.tsx
โ โโ \_document.tsx
โ โโ \_error.tsx
โ โโ blog
โ โ โโ index.tsx
โ โ โโ post
โ โ โโ [slug].tsx
โ โโ category
โ โ โโ index.tsx
โ โโ index.tsx
โโ postcss.config.js
โโ posts
โโ public
โโ styles
โ โโ globals.css
โโ tailwind.config.js
โโ tsconfig.json
โโ yarn.lock
```

- ./components: ๋ธ๋ก๊ทธ ๊ฐ๋ฐ์ ์ฌ์ฉํ ์ปดํฌ๋ํธ๋ค ์๋๋ค.

  - BlogPost: ๋ธ๋ก๊ทธ ๊ฐ์๊ธ ์ปดํฌ๋ํธ ์๋๋ค.
  - CategoryList: ๋ธ๋ก๊ทธ ์นดํ์ฝ๋ฆฌ ํ์ด์ง์ ์นดํ๊ณ ๋ฆฌ ๋ฒํผ๋ค์ ์ํ ์ปดํฌ๋ํธ ์๋๋ค.
  - Footer: ํ๋จ์ Footer๋ฅผ ์ํ ์ปดํฌ๋ํธ ์๋๋ค.
  - Header: ์๋จ์ Header๋ฅผ ์ํ ์ปดํฌ๋ํธ ์๋๋ค.
  - Layout: Header์ Footer๋ฅผ ํฌํจํ ๋ธ๋ก๊ทธ ์ ๋ฐ์ ์ธ ๊ณตํต ๋ ์ด์์์ ๋ด์ ์ปดํฌ๋ํธ ์๋๋ค.
  - Nav: GNB๋ฅผ ๋ง๋ค๊ธฐ ์ํ ์ปดํฌ๋ํธ ์๋๋ค.
  - PostList: BlogPost ์ปดํฌ๋ํธ๋ฅผ ๋์ดํด์ฃผ๋ ์ปดํฌ๋ํธ ์๋๋ค.
  - Utterances: ๋๊ธ ๊ธฐ๋ฅ์ ์ํ ์ปดํฌ๋ํธ ์๋๋ค.


- ./pages: ๋ผ์ฐํ์ ์ํ pages ํด๋์๋๋ค.

  - ./pages/index: ๋ธ๋ก๊ทธ ๊ธฐ๋ณธ ํ ํ์ด์ง๋ฅผ ์ํด ๋ง๋ค์์ต๋๋ค.
  - ./pages/blog/index: ๋ธ๋ก๊ทธ ๋ด๋ถ ๋ธ๋ก๊ทธ ํ์ด์ง๋ฅผ ์ํด ๋ง๋ค์์ต๋๋ค.
  - ./pages/category/index: ๋ธ๋ก๊ทธ ๋ด๋ถ ์นดํ๊ณ ๋ฆฌ ํ์ด์ง๋ฅผ ์ํด ๋ง๋ค์์ต๋๋ค.
  - ./pages/post/[slug]: ๋ธ๋ก๊ทธ ๋ณธ๋ฌธ ํ์ด์ง๋ฅผ ์ํด ๋ง๋ค์์ต๋๋ค.


- ./posts: ์ฌ๊ธฐ์ ๋ณธ์ธ์ด ์ ์ ๋ธ๋ก๊ทธ ๊ธ mdx ํ์ผ์ ๋ฃ์ด์ฃผ๋ฉด ๋ฉ๋๋ค. ๊ธฐ๋ณธ์ ์ธ ๊ท๊ฒฉ์ ์๋์ ๊ฐ์ต๋๋ค.
  ```markdown
  ---
  title: ์ ๋ชฉ์ ์ ์ด์ฃผ์๋ฉด ๋ฉ๋๋ค.
  date: yyyy-MM-dd ๊ท๊ฒฉ์ผ๋ก ์ ์ด์ฃผ์๋ฉด ๋ฉ๋๋ค.
  description: ๋๋ต์ ์ธ ์ค๋ช ๊ธ์ ์ ์ด์ฃผ์๋ฉด ๋ฉ๋๋ค.
  category: ๋ณธ์ธ์ด ์๊ฐํ ์นดํ๊ณ ๋ฆฌ๋ฅผ ์ ์ด์ฃผ์๋ฉด ๋ฉ๋๋ค.
  ---

  # ์ด๊ณณ์ ๊ธ์ ์ ์ด์ฃผ์๋ฉด ๋ฉ๋๋ค.
  ```
