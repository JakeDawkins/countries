import React, { useEffect, useState } from 'react';
import Icon, { IconName } from '../icon';
import Link from 'next/link';
import useBreakpoint from '../../utils/useBreakpoint';
import { useRouter } from 'next/router';

interface NavItemProps {
  href: string;
  label: string;
  icon: IconName;
  isCollapsed: boolean;
  isActive?: boolean;
}
/**
 * A single link button in the navbar
 *
 * controls the growing/shrinking buttons and their animations
 */
function NavItem({ href, label, isCollapsed, icon, isActive }: NavItemProps) {
  return (
    <Link aria-label={isCollapsed ? label : undefined} href={href}>
      <div
        data-testid="nav-item-wrapper-div"
        // collapsed: 36px high/wide = 2px total border, 16px total pad, 18px icon
        className={`mt-4 flex flex-row h-9 p-2 px-4 items-center border rounded-full overflow-x-clip ${
          isCollapsed ? 'w-9 px-2' : 'w-full'
        } ${
          isActive
            ? 'border-green-700 bg-green-50'
            : 'border-gray-300 hover:border-gray-500 hover:bg-gray-200'
        }`}
        style={{
          transition: 'all 0.3s',
        }}
      >
        {/* this div keeps the icon a set size, where it can't be squeezed */}
        <div /*className="w-5 h-5"*/>
          <Icon name={icon} size={18} />
        </div>
        <p
          className={`ml-4 whitespace-nowrap`}
          style={{
            // slightly faster, to disappear behind the "sliding" button border
            transition: 'all 0.2s',
            ...(isCollapsed ? { opacity: 0 } : {}),
          }}
        >
          {label}
        </p>
      </div>
    </Link>
  );
}

function NavBar() {
  const { pathname } = useRouter();
  // const path = router.pathname
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
              isActive={pathname === '/'}
            />
          </li>
          <li>
            <NavItem
              href="/search"
              label="Search"
              icon="search"
              isCollapsed={isCollapsed}
              isActive={pathname.startsWith('/search')}
            />
          </li>
          <li>
            <NavItem
              href="/list"
              label="List"
              icon="list"
              isCollapsed={isCollapsed}
              isActive={pathname.startsWith('/list')}
            />
          </li>
        </ul>
      </div>
      <button
        data-testid="toggle-nav"
        className="flex w-full h-10 justify-end items-center px-2 mt-8"
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
