/**
 * This function takes an array and returns the array with each digit incremented by its position in the array
 * @param {*} nums An array of numbers
 * @returns The array with each digit incremented by its array index
 */
function incrementer(nums) { 
    return nums.length === 0 ? [] : nums.map((curr, i) => (curr + i+1) % 10)
  }