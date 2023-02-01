import Link from 'next/link';

interface BlogPostProps {
  date: string;
  title: string;
  des: string;
  slug: string;
}

const BlogPost = ({ date, title, des, slug }: BlogPostProps) => {
  return (
    <Link href={`/blog/post/${slug}`} passHref className="w-full my-7">
      <div className="font-medium text-xs transition text-gray-500 dark:text-gray-300">{date}</div>
      <div className="font-extrabold text-xl sm:text-2xl mt-2 transition text-black dark:text-white hover:text-green-500 dark:hover:text-green-500">
        {title}
      </div>
      <div className="font-medium text-lg transition text-gray-600 dark:text-gray-400 sm:text-xl mt-1">
        {des}
      </div>
    </Link>
  );
};

export default BlogPost;
