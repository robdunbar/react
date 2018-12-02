describe('Stack.prototype.push()', () => {
    let stack;
    let result;
  
    describe('when not full', () => {
      beforeEach(() => {
        stack = new Stack({ capacity: 5, contents: [1, 2, 3] });
        result = stack.push(4);
      });
  
      it('returns true', () => {
        expect(result).to.eql(true);
      });
  
      it('adds the new item to the stack', () => {
        expect(stack.contents).to.eql([1, 2, 3, 4]);
      });
    });
  
    describe('when full', () => {
      beforeEach(() => {
        stack = new Stack({ capacity: 3, contents: [1, 2, 3] });
        result = stack.push(4);
      });
  
      it('returns false', () => {
        expect(result).to.eql(false);
      });
  
      it('does not add the new item to the stack', () => {
        expect(stack.contents).to.eql([1, 2, 3]);
      });
    })
  });