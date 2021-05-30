import { render } from '@testing-library/react';
import Products from '../Products';


test('renders without crashing', () => {
  render(<Products />);
});
