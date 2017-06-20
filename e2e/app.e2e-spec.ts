import { AngularPwaDemoPage } from './app.po';

describe('angular-pwa-demo App', () => {
  let page: AngularPwaDemoPage;

  beforeEach(() => {
    page = new AngularPwaDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to apd!!');
  });
});
