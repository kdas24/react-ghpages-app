import { render, screen } from '@testing-library/react';
import App from './App';

test('renders greeting text', () => {
  render(<App />);
  const heading = screen.getByText(/Hello from React CI\/CD App!/i);
  expect(heading).toBeInTheDocument();
});
