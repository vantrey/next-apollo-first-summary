import React, { FC } from 'react';
import Link from 'next/link';

const navItems = [
  { title: 'Home', url: '/' },
  { title: 'Users', url: '/users' },
];

const Navbar: FC = () => {
  return (
    <nav style={{paddingBottom: "30px"}}>
      {navItems.map((item) => (
        <Link key={item.url} style={{ paddingRight: '10px' }} href={item.url}>
          {item.title}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
