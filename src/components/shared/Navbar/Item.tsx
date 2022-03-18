import { FC } from 'react';

type Props = {
  href?: string;
  children?: string;
};

const Item: FC<Props> = ({ children = 'Home', href = '#' }) => {
  return (
    <span className="text-white text-xl sm:text-sm md:text-base mb-3 md:mb-0 focus:text-white md:focus:text-gray-700 sm:text-black font-medium mr-1 md:mr-5 cursor-pointer transition duration-300 ease-in-out hover:text-gray-700">
      <a {...{ href, children }} />
    </span>
  );
};

export default Item;
