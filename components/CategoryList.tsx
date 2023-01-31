import { categorys } from '@/data/categorys';
import { Dispatch, SetStateAction } from 'react';

interface CategoryListProps {
  setSellect: Dispatch<SetStateAction<string>>;
  sellect: string;
}

const sellectedStyle =
  'px-3 py-1 bg-green-100 dark:bg-green-900 border-2 border-gray-700 dark:border-gray-300 rounded-2xl sm:text-lg';
const defaultStyle =
  'px-3 py-1 sm:text-lg border-2 border-gray-700 dark:border-gray-300 rounded-2xl transition-transform duration-300 hover:scale-110';

export default function CategoryList({ setSellect, sellect }: CategoryListProps) {
  return (
    <div className="flex flex-wrap gap-4">
      {categorys.map((category) => {
        if (sellect === category.keyword)
          return (
            <button
              type="button"
              onClick={() => setSellect(category.keyword === 'All' ? '' : category.keyword)}
              key={category.keyword}
              className={sellectedStyle}
            >
              {category.title}
            </button>
          );
        return (
          <button
            type="button"
            onClick={() => setSellect(category.keyword === 'All' ? '' : category.keyword)}
            key={category.keyword}
            className={defaultStyle}
          >
            {category.title}
          </button>
        );
      })}
    </div>
  );
}
