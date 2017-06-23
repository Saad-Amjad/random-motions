import { RandomMotionsPage } from './app.po';

describe('random-motions App', () => {
  let page: RandomMotionsPage;

  beforeEach(() => {
    page = new RandomMotionsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
