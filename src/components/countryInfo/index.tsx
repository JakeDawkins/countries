import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { Country, CountryInfoFragment } from '../../__generated__/graphql';
import Icon, { IconName } from '../icon';

interface InfoTileProps {
  label: string;
  value: string;
  icon?: IconName;
  color?: string;
}

function InfoTile({ label, value, color = '#cccccc', icon }: InfoTileProps) {
  return (
    <div
      className="rounded-xl border flex flex-row mr-4 mt-4 overflow-hidden"
      style={{ borderColor: color }}
    >
      <div
        className="h-full w-12 justify-center items-center"
        style={{ backgroundColor: color }}
      >
        {icon ? <Icon name={icon} size={32} color={'#FFFFFF'} /> : null}
      </div>
      <div className="h-full w-full p-4">
        <p className="uppercase text-xl">{label}</p>
        <p className="uppercase text-md">{value}</p>
      </div>
    </div>
  );
}

interface CountryInfoProps {
  country: CountryInfoFragment;
}

function CountryInfo({ country }: CountryInfoProps) {
  return (
    <div className="flex flex-row flex-wrap">
      {country.capital ? (
        <InfoTile label="Capital" value={country.capital} />
      ) : null}
      {country.continent ? (
        <InfoTile label="Continent" value={country.continent.name} />
      ) : null}
      {country.native ? (
        <InfoTile label="Native Name" value={country.native} />
      ) : null}
      {country.phone ? (
        <InfoTile label="Phone Code" value={country.phone} />
      ) : null}
    </div>
  );
}

export default CountryInfo;
