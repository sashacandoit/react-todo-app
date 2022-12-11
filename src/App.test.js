import { render, screen } from '@testing-library/react';
import App from './App';

//smoke test
it("renders without crashing", function () {
    render(<App />);
});

//snapshot test
it("matches snapshot", function () {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
});


// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
