import { FrontEndClientPage } from './app.po';

describe('front-end-client App', () => {
  let page: FrontEndClientPage;

  beforeEach(() => {
    page = new FrontEndClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
