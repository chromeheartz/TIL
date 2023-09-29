import { screen } from '@testing-library/react';
import { renderWithQueryCient } from 'test-utils';

import { Treatments } from '../Treatments';

test('renders response from query', () => {
  renderWithQueryCient(<Treatments />);
});
