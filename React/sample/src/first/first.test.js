import { render, screen } from '@testing-library/react';
import First from './First';

describe.skip('First test',()=>{
  test('should contain First word', () => {
    render(<First/>)
    const text1=screen.getByText(/First/i)
    expect(text1).toBeInTheDocument();
  })
  test('should contain First word', () => {
    render(<First/>)
    const text1=screen.getByText(/first/i)
    expect(text1).toBeInTheDocument();
  })
}) 
