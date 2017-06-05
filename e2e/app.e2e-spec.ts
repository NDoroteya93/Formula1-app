import { Formula1AppPage } from './app.po';

describe('formula1-app App', () => {
  let page: Formula1AppPage;

  beforeEach(() => {
    page = new Formula1AppPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
