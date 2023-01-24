import Icon, { icons, IconName } from '.';
import { render, screen } from '@testing-library/react';

const cases = Object.keys(icons) as IconName[];

// these cases iterate over all possible icons, since each base icon
// has its own implementation, where bugs could arise
describe('Icon', () => {
  it.each(cases)('renders %p icon without error', (name: IconName) => {
    render(<Icon name={name} size={32} />);
  });

  it.each(cases)('%p passes aria-label through to dom', (name) => {
    render(<Icon name={name} size={32} accessibilityLabel="my label" />);
    screen.getByLabelText('my label');
  });

  it.each(cases)('%p uses color properly', (name) => {
    const { container } = render(
      <Icon color="#abcdef" name={name} size={32} />,
    );
    expect(container.querySelector('path[stroke="#abcdef"]')).toBeVisible();
  });
});
