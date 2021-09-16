import React from 'react';
import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import listData from '../../fixtures/listData.json';

const server = setupServer(
  rest.get('https://rickandmortyapi.com/api/character', (req, res, ctx) => {
    return res(ctx.json(listData));
  })
);

describe('Rick and Morty info App', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('displays a list of Rick and Morty Characters', async () => {
    const { container } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    screen.getAllByAltText('loading spinner');

    const ul = await screen.findByRole('list', { name: 'character-list' });
    expect(ul).not.toBeEmptyDOMElement();
    expect(container).toMatchSnapshot();
  });
});
