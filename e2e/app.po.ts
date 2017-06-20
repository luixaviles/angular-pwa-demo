import { browser, by, element } from 'protractor';

export class AngularPwaDemoPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('apd-root h1')).getText();
  }
}
