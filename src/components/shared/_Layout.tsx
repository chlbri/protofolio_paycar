import { FC } from 'react';
import NavBar from './Navbar';

type Props = {};

// eslint-disable-next-line no-empty-pattern
const _Layout: FC<Props> = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
};

export default _Layout;
