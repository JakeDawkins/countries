import Icon, { icons, IconName } from '.';
import { render } from '@testing-library/react';

const cases = Object.keys(icons) as IconName[];

describe('Icon', () => {
  it.each(cases)('renders %p icon without error', (name: IconName) => {
    render(<Icon name={name} size={32} />);
  });
});
