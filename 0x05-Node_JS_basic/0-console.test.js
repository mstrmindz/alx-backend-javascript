// 0-console.test.js

const displayMessage = require('./0-console');

test('displays the correct message', () => {
  // Mock the console.log function
  console.log = jest.fn();

  // Call the displayMessage function
  displayMessage('Hello, Jest!');

  // Check if console.log was called with the correct message
  expect(console.log).toHaveBeenCalledWith('Hello, Jest!');
});
