import { render, screen } from '@testing-library/react';
import Forms from './Forms';
describe.skip('Forms test',()=>{
  test('should contain input', () => {
    render(<Forms/>)
    const inptext=screen.getByRole('namefield')
    expect(inptext).toBeInTheDocument();

    const submt_btn=screen.getByRole('button',{
        role:'sumbitbutton'
    })
    expect(submt_btn).toBeInTheDocument();

    const submt_btn2=screen.getByText(/Submit/i)
    expect(submt_btn2).toBeInTheDocument();
  })
})
