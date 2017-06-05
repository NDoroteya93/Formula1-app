import { Formula1AppPage } from './app.po';

describe('formula1-app App', function() {
  let page: Formula1AppPage;

  beforeEach(() => {
    page = new Formula1AppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
