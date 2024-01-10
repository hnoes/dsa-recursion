/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 0) {
    return 1;
  }
  const [first, ...rest] = nums;
  return first * product(rest);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
    if (words.length === 0) {
      return 0;
    }
    const [first, ...rest] = words;
    const firstLength = first.length;
    const maxLengthOfRest = longest(rest);
    return firstLength > maxLengthOfRest ? firstLength : maxLengthOfRest;
  }  


/** everyOther: return a string with every other letter. */

function everyOther(str) {
    if (str.length <= 1) {
      return str;
    }
    const [first, second, ...rest] = str;
    return first + everyOther(rest);
  }  


/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
    if (str.length <= 1) {
      return true;
    }
    const [first, ...rest] = str;
    const last = str[str.length - 1];
    if (first !== last) {
      return false;
    }
    return isPalindrome(rest.slice(0, -1));
  }
  


/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, target, index = 0) {
  if (index >= arr.length) {
    return -1;
  }
  if (arr[index] === target) {
    return index;
  }
  return findIndex(arr, target, index + 1);
}


/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if (str.length <= 1) {
    return str;
  }
  const [first, ...rest] = str;
  return revString(rest) + first;
}


/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let strings = [];
  for (let key in obj) {
    if (typeof obj[key] === 'string') {
      strings.push(obj[key]);
    } else if (typeof obj[key] === 'object') {
      strings = strings.concat(gatherStrings(obj[key]));
    }
  }
  return strings;
}


/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

 function binarySearch(arr, target, left = 0, right = arr.length - 1) {
  if (left > right) {
    return -1; // Element not found
  }

  const mid = Math.floor((left + right) / 2);

  if (arr[mid] === target) {
    return mid; // Element found at index mid
  } else if (arr[mid] < target) {
    return binarySearch(arr, target, mid + 1, right); // Search the right half
  } else {
    return binarySearch(arr, target, left, mid - 1); // Search the left half
  }
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
