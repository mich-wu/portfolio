import React from 'react';
import { Link } from 'gatsby';
import { usePathMatch } from '../../../hooks/usePathMatch';

export const Navigator = ({ recordId, passRef, children, ...props }) => {
  const { path } = usePathMatch(recordId, children);

  return (
    <Link {...props} ref={passRef} to={path}>
      {children}
    </Link>
  );
};
export default Navigator;
