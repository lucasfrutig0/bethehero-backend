const generateUniqueId = require('../../src/utils/generateUiqueId')

describe('Generate Unique ID', () => {
  it('should generate an unique id', () => {
    const id = generateUniqueId()

    expect(id).toHaveLength(8)
  });
});