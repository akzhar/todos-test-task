import React from 'react';
import { Link } from 'react-router-dom';

import { AppRoutes } from '@consts/const';

type TLogoProps = {
  enableLink?: boolean
};

const Logo: React.FC<TLogoProps> = ({ enableLink = false }) => (
  <Link
    to={AppRoutes.ALL}
    className={`logo ${enableLink ? 'logo--link' : ''}`}
    tabIndex={enableLink ? 0 : -1}
  >
    Todos
  </Link>
);

export default Logo;
