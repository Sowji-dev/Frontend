import { render, screen } from '@testing-library/react';
import Skills from './Skills';
describe('Skills file test',()=>{
    const skills=['html', 'css' , 'js']
  test('should contain list', () => {
    render(<Skills skills={skills}/>)
    const li=screen.getByRole('list')
    expect(li).toBeInTheDocument();
  })
    test('should contain mul lists', () => {
      render(<Skills skills={skills}/>)
    const lis=screen.getAllByRole('listitem')
    expect(lis).toHaveLength(3);
  })
})
