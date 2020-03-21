import React from 'react';
import { render } from '@testing-library/react'
import Footer from './Footer';

describe('
<Footer />', () => {
it('should render component', () => {
const { container } = render(
<Footer />);
expect(container).toBeInTheDocument();
});
});