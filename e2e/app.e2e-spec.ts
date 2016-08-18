import { PytaskNg2Page } from './app.po';

describe('pytask-ng2 App', function() {
  let page: PytaskNg2Page;

  beforeEach(() => {
    page = new PytaskNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
