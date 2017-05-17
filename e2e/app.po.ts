import { browser, by, element } from 'protractor';

export class ACCollectorClientPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('acc-root h1')).getText();
  }
}
