import { render, screen } from '@testing-library/react';
import Counter from './Counter';
describe('Skills file test',()=>{
    const skills=['html', 'css' , 'js']
  test('should contain heading', () => {
    render(<Counter/>)
    const myh3=screen.getByRole('heading')
    expect(myh3).toBeInTheDocument();
  })
//     test('should contain mul lists', () => {
//       render(<Counter/>)
//     const lis=screen.getAllByRole('listitem')
//     expect(lis).toHaveLength(3);
//   })
})
