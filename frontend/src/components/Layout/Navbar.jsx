import React from 'react'
import { Link } from 'react-router-dom'
import { navItems } from '../../static/data'
import styles from '../../styles/styles'

const Navbar = ({active}) => {
  return (
    <div className={`block 800px:${styles.noramlFlex}`}>
      {navItems &&
        navItems.map((i, index) => (
          <div className="flex">
            <Link
              to={i.url}
              className={`${
                active === index + 1
                  ? "text-[#43A040]"
                  : "text-black 800px:text-[#fff]"
              } pb-[30px] 800px:pb-0 font-[600] px-6 cursor-pointer hover:bg-gray-100 hover:text-green-500 rounded-md`}
            >
              {i.title}
            </Link>
          </div>
        ))}
    </div>
  );
}

export default Navbar