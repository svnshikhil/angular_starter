import { MyNewPipePipe } from './my-new-pipe.pipe';

describe('MyNewPipePipe', () => {
  it('create an instance', () => {
    const pipe = new MyNewPipePipe();
    expect(pipe).toBeTruthy();
  });
});
