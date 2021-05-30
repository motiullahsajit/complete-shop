import { render } from '@testing-library/react';
import CartProducts from '../CartProducts';



test('renders without crashing', () => {
  render(<CartProducts />);
});
