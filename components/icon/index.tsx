import React from 'react';

// TODO - dynamic imports
import ArrowLeft from './icons/arrow-left';
import ArrowRight from './icons/arrow-right';

export type IconName = 'arrow-left' | 'arrow-right';
export const icons: { [name in IconName]: React.ElementType } = {
  'arrow-left': ArrowLeft,
  'arrow-right': ArrowRight,
};

interface IconProps {
  name: IconName;
  size: number;
}

function Icon({ name, size }: IconProps) {
  const IconComponent = icons[name];
  if (!IconComponent) throw new Error('invalid icon name');

  return <IconComponent size={size} />;
}

export default Icon;
