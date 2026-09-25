
function calculateTax(amount) {
  return amount * 0.1;
}

function convertToUpperCase(str) {
  return str.toUpperCase();
}

function findMaximum(num1, num2) {
  return num1 >= num2 ? num1 : num2;
}

function isPalindrome(str) {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}

function calculateDiscountedPrice(originalPrice, discountPercentage) {
  return originalPrice - (originalPrice * discountPercentage) / 100;
}

module.exports = {
  calculateTax,
  convertToUpperCase,
  findMaximum,
  isPalindrome,
  calculateDiscountedPrice,
};



