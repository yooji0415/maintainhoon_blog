import { memo } from 'react';

function Utterances() {
  return (
    <section
      ref={(elem) => {
        if (!elem) return;
        const scriptElement = document.createElement('script');
        scriptElement.src = 'https://utteranc.es/client.js';
        scriptElement.async = true;
        scriptElement.setAttribute('repo', 'yooji0415/maintainhoon_blog_comment');
        scriptElement.setAttribute('issue-term', 'pathname');
        scriptElement.setAttribute('theme', 'preferred-color-scheme');
        scriptElement.setAttribute('crossorigin', 'anonymous');
        elem.appendChild(scriptElement);
      }}
    />
  );
}

export default memo(Utterances);
