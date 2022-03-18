import Image from 'next/image';
import { FC } from 'react';

type Props = {
  dark?: boolean;
};

// eslint-disable-next-line no-empty-pattern
const Logo: FC<Props> = ({ dark }) => {
  return (
    <div className="text-black flex space-x-3 items-center">
      <div className="relative w-6 md:w-9 aspect-square">
        <Image
          layout="fill"
          src={dark ? '/images/car-logo-dark.png' : '/images/car-logo.png'}
          alt="log"
        />
      </div>
      <span className="text-xl md:text-2-xl font-bold dark:text-black">
        {' '}
        Yourcar.
      </span>
    </div>
  );
};

export default Logo;
