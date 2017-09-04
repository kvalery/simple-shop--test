import { SimpleshoptestPage } from './app.po';

describe('simpleshoptest App', () => {
  let page: SimpleshoptestPage;

  beforeEach(() => {
    page = new SimpleshoptestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
