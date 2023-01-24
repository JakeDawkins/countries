import React, { useEffect, useState } from 'react';
import Icon, { IconName } from '../icon';
import Link from 'next/link';
import useBreakpoint from '../../utils/useBreakpoint';

interface NavItemProps {
  href: string;
  label: string;
  icon: IconName;
  isCollapsed: boolean;
}
function NavItem({ href, label, isCollapsed, icon }: NavItemProps) {
  return (
    <Link aria-label={isCollapsed ? label : undefined} href={href}>
      <div
        className={`mt-4 flex flex-row h-10 items-center px-4 border border-gray-500 rounded-full overflow-hidden ${
          isCollapsed ? 'w-10 justify-center px-0' : ''
        }`}
      >
        <Icon name={icon} size={20} />
        {!isCollapsed ? (
          <p className="ml-4 whitespace-nowrap">{label}</p>
        ) : undefined}
      </div>
    </Link>
  );
}

function NavBar() {
  // set up the default collapsed state. If the window is over 640px, it will
  // be expanded by default. For small devices, it will be collapsed by default.
  // changing the width of the window after original render will automatically
  // collapse the nav bar, but it will not re-expand it.
  const breakpoint = useBreakpoint();
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    if (breakpoint === 'xs') setIsCollapsed(true);
  }, [breakpoint]);

  return (
    // todo - collapse
    <nav
      className={`flex flex-col sticky top-0 justify-between h-full max-w-full p-3 bg-gray-50 border-r border-r-gray-200 ${
        isCollapsed ? 'w-16' : 'w-48'
      }`}
      style={{ transition: 'width 0.3s' }}
    >
      <div className="">
        <Link href="/" aria-label="countries app. click to go home">
          <Icon name="globe" size={40} />
        </Link>

        <ul className="mt-8">
          <li>
            <NavItem
              href="/"
              label="Home"
              icon="home"
              isCollapsed={isCollapsed}
            />
          </li>
          <li>
            <NavItem
              href="/search"
              label="Search"
              icon="search"
              isCollapsed={isCollapsed}
            />
          </li>
          <li>
            <NavItem
              href="/list"
              label="List"
              icon="list"
              isCollapsed={isCollapsed}
            />
          </li>
        </ul>
      </div>
      <button
        className="flex w-full h-10 justify-end items-center px-2"
        type="button"
        aria-label={`click to ${isCollapsed ? 'expand' : 'collapse'} nav`}
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <Icon size={20} name={isCollapsed ? 'arrow-right' : 'arrow-left'} />
      </button>
    </nav>
  );
}

export default NavBar;
