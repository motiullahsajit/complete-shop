import { render } from '@testing-library/react';
import SingleProduct from '../SingleProduct';


test('renders without crashing', () => {
  render(<SingleProduct />);
});
