import { Ng2WorkshopAtCernPage } from './app.po';

describe('ng2-workshop-at-cern App', function() {
  let page: Ng2WorkshopAtCernPage;

  beforeEach(() => {
    page = new Ng2WorkshopAtCernPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
