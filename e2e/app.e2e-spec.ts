import { CupidiPage } from './app.po';

describe('cupidi App', () => {
  let page: CupidiPage;

  beforeEach(() => {
    page = new CupidiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
