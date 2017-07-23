import { Angular2WebpackSeedPage } from './app.po';

describe('angular2-webpack-seed App', () => {
  let page: Angular2WebpackSeedPage;

  beforeEach(() => {
    page = new Angular2WebpackSeedPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
