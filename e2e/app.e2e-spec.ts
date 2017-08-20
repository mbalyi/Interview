import { InterviewPage } from './app.po';

describe('interview App', () => {
  let page: InterviewPage;

  beforeEach(() => {
    page = new InterviewPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
