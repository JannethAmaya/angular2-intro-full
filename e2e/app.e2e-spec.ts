import { Angular2WsPage } from './app.po';

describe('angular2-ws App', function() {
  let page: Angular2WsPage;

  beforeEach(() => {
    page = new Angular2WsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
