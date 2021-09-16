import React from 'react';
import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import listData from '../../fixtures/listData.json';
import detailData from '../../fixtures/detailData.json';

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

const serverDetail = setupServer(
  rest.get('https://rickandmortyapi.com/api/character/:id', (req, res, ctx) => {
    return res(ctx.json(detailData));
  })
);

describe('Rick and Morty info App', () => {
  beforeAll(() => serverDetail.listen());
  afterAll(() => serverDetail.close());

  // eslint-disable-next-line max-len
  it('displays a detail view of a single Rick and Morty Character', async () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/2']}>
        <App />
      </MemoryRouter>
    );

    screen.getAllByAltText('loading spinner');

    const ul = await screen.findByRole('list', { name: 'character details' });
    expect(ul).not.toBeEmptyDOMElement();
    expect(container).toMatchSnapshot();
  });
});
