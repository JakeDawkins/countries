import React from 'react';
import { render, screen } from '@testing-library/react';
import { mockCountryInfo } from '../../utils/mockData';
import CountryInfo, { InfoTile } from '.';

// eslint-disable-next-line @typescript-eslint/naming-convention
const { __typename, continent, emoji, name, native, phone, capital } =
  mockCountryInfo;
const mockCountryInfoFragment = {
  __typename,
  continent,
  emoji,
  name,
  native,
  phone,
  capital,
};
const mockMissingInfo = {
  continent,
  name,
  capital,
};

describe('CountryInfo', () => {
  it('renders full tile without error', () => {
    render(<CountryInfo country={mockCountryInfoFragment} />);
  });

  it('shows all tiles with values', () => {
    render(<CountryInfo country={mockCountryInfoFragment} />);

    screen.getByText('Capital');
    screen.getByText(capital);

    screen.getByText('Continent');
    screen.getByText(continent.name);

    screen.getByText('Native Name');
    screen.getByText(native);

    screen.getByText('Phone Code');
    screen.getByText(`+${phone}`);
  });

  it('renders partial data and omits empty info', () => {
    render(<CountryInfo country={mockMissingInfo} />);
    expect(screen.getAllByTestId('info-tile')).toHaveLength(2);
  });
});

describe('InfoTile', () => {
  it('renders without error', () => {
    render(
      <InfoTile color="#ffffff" icon="arrow-left" label="label" value="123" />,
    );
    screen.getByText('label');
  });
  it('renders with minimum props', () => {
    render(<InfoTile label="label" value="123" />);
    screen.getByText('123');
  });
});
