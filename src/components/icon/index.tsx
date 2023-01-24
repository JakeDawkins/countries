import React from 'react';

// TODO - dynamic imports
import ArrowLeft from './icons/arrow-left';
import ArrowRight from './icons/arrow-right';
import Globe from './icons/globe';
import Home from './icons/home';
import List from './icons/list';
import Search from './icons/search';
import GpsPin from './icons/gps-pin';
import Map from './icons/map';
import Phone from './icons/phone';
import SpeechBubble from './icons/speech-bubble';

export type IconName =
  | 'arrow-left'
  | 'arrow-right'
  | 'globe'
  | 'home'
  | 'list'
  | 'search'
  | 'gps-pin'
  | 'map'
  | 'phone'
  | 'speech-bubble';
export const icons: { [name in IconName]: React.ElementType } = {
  'arrow-left': ArrowLeft,
  'arrow-right': ArrowRight,
  globe: Globe,
  home: Home,
  list: List,
  search: Search,
  'gps-pin': GpsPin,
  map: Map,
  phone: Phone,
  'speech-bubble': SpeechBubble,
};

interface IconProps {
  name: IconName;
  size: number;
  accessibilityLabel?: string;
  color?: string;
}

function Icon({ name, size, accessibilityLabel, color }: IconProps) {
  const IconComponent = icons[name];
  if (!IconComponent) throw new Error('invalid icon name');

  return (
    <IconComponent
      color={color}
      size={size}
      accessibilityLabel={accessibilityLabel}
    />
  );
}

export default Icon;
