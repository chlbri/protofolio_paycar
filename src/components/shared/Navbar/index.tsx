import { FC } from 'react';
import Logo from '../Logo';

type Props = {};

// eslint-disable-next-line no-empty-pattern
const NavBar: FC<Props> = ({}) => {
  return (
    <div className="w-full max-w-2xl flex flex-row items-center lg:px-12 justify-center min-h-[64px]">
      <Logo />
    </div>
  );
};

export default NavBar;
