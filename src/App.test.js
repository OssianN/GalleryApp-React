import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import App from './App';
import SearchResults from './screens/searchResults/SearchResults'
import mockData from './MOCK/data.json'

const server = setupServer(rest.get('/', (req, res, ctx) => {
  return res(ctx.json({ mockData}));
}));

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());


test('check for correct form structure', () => {
  render(<App />)
  expect(screen.getAllByRole('button')[0]).toHaveTextContent('Search');
  expect(screen.getByPlaceholderText('Search for image')).toBeInTheDocument();
});

test('fetches and displays mock data', async () => {
  render(<App />)
  // const { container } = render(<SearchResults />)
  await waitFor(() => {
    console.log(screen.getAllByRole('listitem')[2])
    fireEvent.click(screen.getAllByRole('listitem')[2]);
    // console.log(container.firstChild.children);
    expect(mockData).toHaveBeenCalledTimes(1)
  })
  // console.log(render(<CardsGrid />).container.firstChild.children.length, 'this')
});