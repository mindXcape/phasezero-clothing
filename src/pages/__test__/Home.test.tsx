import { render, screen, fireEvent } from '@testing-library/react';
import Count from '../../Count';

describe('Count', () => {
  it('Should render the page correctly', () => {
    render(<Count />);
    const addButton = screen.getByText('Add');
    fireEvent.click(addButton);
    const countElement = screen.getByTestId('count');
    expect(countElement.textContent).toBe('1');
  });
});
