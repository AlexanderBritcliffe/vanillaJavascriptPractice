console.log(
  isUnique('abcdef'),
  isUnique('89%df#$^a&x'),
  isUnique('abcAdef'),
  isUnique('abcaef'),

);

function isUnique(str) {

  for(let i=0; i < str.length; i++) { //process every character in loop
    if(str.lastIndexOf(str[i]) !== i) {
      return false;
    }
  }
  return true;
}

//line 10 loops from left to right
//line 11 goes through string from right to
//left so for example initially it will go from left to right looking for a and so on
//will return false unless a is found in another position other than first

console.log(
  isUnique('abcdef'),
  isUnique('89%df#$^a&x'),
  isUnique('abcAdef'),
  isUnique('abcaef'),

);

function isUnique(str) {
  const chars = str.split('').sort(); //splits into an array and sort them from left to right dbac would be a, b, c, d


  for(let i=1; i <= chars.length; i++) { //dbaca would be aabcd---thats why i starts at one or second character so it can compare to interger next to it
    if(chars[i] === chars[i -1]) {
      return false;
    }
  }
  return true;
}

console.log(
  isUnique('abcdef'),
  isUnique('89%df#$^a&x'),
  isUnique('abcAdef'),
  isUnique('abcaef'),

);

function isUnique(str) {
  const chars = {}

  for(let i=0; i < str.length; i++) {
    const thisChar = str[i]; //the first time we go through loop thisChar
    // will equal a...then it will check if the object contains a and at that point it will be empty so will return
    //true since object does not contain it (line 61)....we then move to line 63 we store a in object and set its value to true

    if(chars[thisChar] === true) {
      return false;
    }
    chars[thisChar] = true;
  }
  return true; //this is for if we get through the entire thing and there are no duplicates
}

console.log(
  isUnique('abcdef'),
  isUnique('89%df#$^a&x'),
  isUnique('abcAdef'),
  isUnique('abcaef'),

);

function isUnique(str) {
  const chars = new Set();

  for(let i=0; i < str.length; i++) {
    const thisChar = str[i]; //the first time we go through loop thisChar
    // will equal a...then it will check if the object contains a and at that point it will be empty so will return
    //true since object does not contain it (line 61)....we then move to line 63 we store a in object and set its value to true

    if(chars.has(thisChar)) {
      return false;
    }
    chars.add(thisChar)
  }
  return true; //this is for if we get through the entire thing and there are no duplicates
}

// console.log(
//   isUnique('abcdef'),
//   isUnique('89%df#$^a&x'),
//   isUnique('abcAdef'),
//   isUnique('abcaef'),
//
// );
//
// function isUnique(str) {
//   return new Set(str).size === string.length;
// }
//

//
function flatten(nestedArray) {
  const newArray = [];

  for(let i = 0; i < nestedArray.length; i++) {
    const thisItem = nestedArray[i];

    if(Array.isArray(thisItem)) {
      for(let j = 0; j < thisItem.length; j++) {
        newArray.push(thisItem[j]);
        }
      } else {
          newArray.push(thisItem);
      }
    }
    return newArray;
}

console.log(flatten([1, 2, 3, [4, 5], 6]));
