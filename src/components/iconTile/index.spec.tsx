import { render, screen } from '@testing-library/react';
import IconTile from '.';

describe('IconTile', () => {
  it('renders content', () => {
    const message = 'This is a sample message!';
    render(<IconTile message={message} />);

    expect(screen.getByText(message)).toBeVisible();
  });
});
