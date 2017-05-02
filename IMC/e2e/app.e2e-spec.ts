import { IMCPage } from './app.po';

describe('imc App', () => {
  let page: IMCPage;

  beforeEach(() => {
    page = new IMCPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
