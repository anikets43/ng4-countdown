import { Ngx.CountdownPage } from './app.po';

describe('ngx.countdown App', () => {
  let page: Ngx.CountdownPage;

  beforeEach(() => {
    page = new Ngx.CountdownPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
