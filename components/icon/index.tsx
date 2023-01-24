import React from 'react';

// TODO - dynamic imports
import ArrowLeft from './icons/arrow-left';
import ArrowRight from './icons/arrow-right';
import Globe from './icons/globe';
import Home from './icons/home';
import List from './icons/list';
import Search from './icons/search';

export type IconName =
  | 'arrow-left'
  | 'arrow-right'
  | 'globe'
  | 'home'
  | 'list'
  | 'search';
export const icons: { [name in IconName]: React.ElementType } = {
  'arrow-left': ArrowLeft,
  'arrow-right': ArrowRight,
  globe: Globe,
  home: Home,
  list: List,
  search: Search,
};

interface IconProps {
  name: IconName;
  size: number;
  accessibilityLabel?: string;
}

function Icon({ name, size, accessibilityLabel }: IconProps) {
  const IconComponent = icons[name];
  if (!IconComponent) throw new Error('invalid icon name');

  return <IconComponent size={size} accessibilityLabel={accessibilityLabel} />;
}

export default Icon;
