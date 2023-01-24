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
      <div className="mt-4 flex flex-row p-2 px-4 border border-gray-500 rounded-full">
        <Icon name={icon} size={26} />
        {!isCollapsed ? <p className="ml-4">{label}</p> : undefined}
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
      className={`sticky top-0 max-w-full p-4 bg-gray-50 border-r border-r-gray-200 ${
        isCollapsed ? 'w-24' : 'w-48'
      }`}
    >
      <div className="flex flex-row align-center justify-between">
        <Link href="/" aria-label="countries app. click to go home">
          <Icon name="globe" size={48} />
        </Link>
        {/* icon - arrow for collapse */}
        <button
          type="button"
          aria-label={`click to ${isCollapsed ? 'expand' : 'collapse'} nav`}
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <Icon size={20} name={isCollapsed ? 'arrow-right' : 'arrow-left'} />
        </button>
      </div>
      <ul className="mt-4">
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
    </nav>
  );
}

export default NavBar;
