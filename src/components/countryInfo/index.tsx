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

export function InfoTile({
  label,
  value,
  color = '#cccccc',
  icon,
}: InfoTileProps) {
  return (
    <div
      data-testid="info-tile"
      className="rounded-xl border flex flex-row mr-4 mt-4 overflow-hidden"
      style={{ borderColor: color }}
    >
      <div
        className="flex h-full w-24 justify-center items-center"
        style={{ backgroundColor: color }}
      >
        {icon ? <Icon name={icon} size={32} color={'#FFFFFF'} /> : null}
      </div>
      <div className="h-full w-full p-4">
        <p className="text-xl">{label}</p>
        <p className="text-md">{value}</p>
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
        <InfoTile
          icon="gps-pin"
          color="#10B981"
          label="Capital"
          value={country.capital}
        />
      ) : null}
      {country.continent ? (
        <InfoTile
          icon="map"
          color="#2563EB"
          label="Continent"
          value={country.continent.name}
        />
      ) : null}
      {country.native ? (
        <InfoTile
          icon="speech-bubble"
          color="#DB2777"
          label="Native Name"
          value={country.native}
        />
      ) : null}
      {country.phone ? (
        <InfoTile
          icon="phone"
          color="#7C3AED"
          label="Phone Code"
          value={`+${country.phone}`}
        />
      ) : null}
      {country.currency ? (
        <InfoTile
          icon="wallet"
          color="#047857"
          label="Currency"
          value={country.currency}
        />
      ) : null}
      {country.languages?.length
        ? country.languages.map((lang) => {
            return (
              <InfoTile
                key={`${country.name}-${lang.name}`}
                icon="speech-bubble"
                color="#130478"
                label="Language"
                value={lang.name}
              />
            );
          })
        : null}
    </div>
  );
}

export default CountryInfo;
