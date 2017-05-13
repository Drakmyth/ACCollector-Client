import { ACCollectorClientPage } from './app.po';

describe('accollector-client App', () => {
  let page: ACCollectorClientPage;

  beforeEach(() => {
    page = new ACCollectorClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
