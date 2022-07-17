import { MicroPage } from './app.po';

describe('micro App', function() {
  let page: MicroPage;

  beforeEach(() => {
    page = new MicroPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
