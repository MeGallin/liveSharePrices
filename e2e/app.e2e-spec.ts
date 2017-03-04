import { LivePricesPage } from './app.po';

describe('live-prices App', function() {
  let page: LivePricesPage;

  beforeEach(() => {
    page = new LivePricesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('lp works!');
  });
});
