import React from 'react';
import Icon, { type IconName } from '../icon';

interface IconTileProps {
  title?: string;
  message: string;
  icon: IconName;
  color?: string;
}

function IconTile({ title, message, color = '#999999', icon }: IconTileProps) {
  return (
    <div className="flex">
      <div
        data-testid="info-tile"
        className="rounded-xl border flex flex-row mr-4 mt-4 overflow-hidden"
        style={{ borderColor: color }}
      >
        <div
          className="flex h-full w-24 justify-center items-center bg-yellow-500"
          style={{ backgroundColor: color }}
        >
          <Icon name={icon} size={32} color={'#FFFFFF'} />
        </div>
        <div className="h-full w-full p-4 items-center">
          {title ? <p className="text-xl">{title}</p> : null}
          <p className="text-md">{message}</p>
        </div>
      </div>
    </div>
  );
}
export default IconTile;
