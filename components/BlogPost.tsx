import Link from 'next/link';

interface BlogPostProps {
  date: string;
  title: string;
  des: string;
  slug: string;
}

const BlogPost = ({ date, title, des, slug }: BlogPostProps) => {
  return (
    <Link href={`/blog/${slug}`} passHref className="w-full my-7">
      <div className="font-medium text-xs text-gray-400">{date}</div>
      <div
        className={`font-extrabold text-xl sm:text-2xl mt-2 transition duration-300 hover:text-green-500`}
      >
        {title}
      </div>
      <div className={`font-medium text-lg text-gray-600 sm:text-xl mt-1`}>{des}</div>
    </Link>
  );
};

export default BlogPost;
