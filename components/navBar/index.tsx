import React, { useState } from 'react';
import { useWindowDimensions } from '../../utils/useWindowDimensions';
import Icon from '../icon';
import Link from 'next/link';

function NavBar() {
  // set up the default collapsed state. If the window is over 720px, it will
  // be expanded by default. For small devices, it will be collapsed by default.
  // changing the width of the window after original render will not automatically
  // expand/collapse the nav bar
  const { width } = useWindowDimensions();
  const [isCollapsed, setIsCollapsed] = useState<boolean | undefined>(
    width && width < 720,
  );

  return (
    // todo - collapse
    <nav className="w-64 h-full max-w-full p-2 bg-gray-200">
      <div className="flex flex-row align-center justify-between">
        <Icon name="globe" size="48" />
        {/* icon - arrow for collapse */}
        <button
          type="button"
          aria-label={isCollapsed ? 'click to expand' : 'click to collapse'}
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <Icon size={20} name={isCollapsed ? 'arrow-right' : 'arrow-left'} />
        </button>
      </div>
      <ul className="mt-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/search">Search</Link>
        </li>
        <li>
          <Link href="/list">List</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
