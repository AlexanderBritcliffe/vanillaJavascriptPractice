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
  const chars = str.split('').sort(); //splits into an array and sort them from left to right dbac would be a, b, c, d (alphabetically)


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

//this will work for one level deep arrays
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

//-------------------------------
//this wil work for infinitely nested arrays

function flatten(nestedArray) {
  const newArray = [];

  for(let i = 0; i < nestedArray.length; i++) {
    const thisItem = nestedArray[i];

    if(Array.isArray(thisItem)) {
      const flatItem = flaten(thisItem);
      for(let j = 0; j < flatItem.length; j++) {
        newArray.push(flatItem[j]);
        }
      } else {
          newArray.push(thisItem);
      }
    }
    return newArray;
}

console.log(flatten([1, 2, 3, [4, 5], 6]));


console.log(
  removeDupes('abcd'),
  removeDupes('aabbccdd'),
  removeDupes('abababcdcdcd')
);


function removeDupes(str) {
  const uniqueChars = [];
  for(let i = 0; i < str.length; i++) {
    const thisChar = str[i]

    if(uniqueChars.includes(thisChar)) {
      continue;
    } else {
      uniqueChars.push(thisChar);
    }
  }
  return uniqueChars.join('');
}

console.log(
  removeDupes('abcd'),
  removeDupes('aabbccdd'),
  removeDupes('abababcdcdcd')
);

function removeDupes(str) {
  const chars = new Set(str);
  return Array.from(chars).join('');
}

//above is the simplest solution...when we insert a string into a set
//each individual character gets inserted into a set only unique values
//are stored so any duplicates will be ignored and discarded
//after set is created array.from which takes in itterable which is a data
//structure that keeps track of the order in which data was inserted and
//set does exactly that it keeps track of characters in order they were inserted

//the set does exactly that it keeps track of character in orderr they were insereted backwards

console.log(
  highestFrequency(['a', 'b', 'c', 'd', 'e']),
  highestFrequency(['abc', 'def', 'abc', 'def', 'abc']),
  highestFrequency(['abc', 'def']),
  highestFrequency(['abc', 'abc', 'def', 'def', 'def', 'ghi', 'ghi', 'ghi', 'ghi'])
);

function highestFrequency(strings) {
  const frequencies = {};
  let maxFrequency = 0; //this variable stores highest frequency we have come across so far
  let mostFrequentString = strings[0]; //this is initializerd to the first item in the strings array

  for(let i = 0; i < strings.length; i++) {
    const thisStr = strings[i];

    if(frequencies[thisStr] === undefined)//this checks if it is the first time it is in object if it is it wont be present in object
      frequencies[thisStr] = 1;  //this sets each string to the number one as loop moves through...line 202 or 203 says if undefined give it value of 1
    } else {
      frequencies[thisStr]++; //this increses vale of duplicates by 1
    }
    if (frequencies[thisStr] > maxFrequency) //this checks if our new frequency (line 208) ius higher than the pervious max frequency we had
      maxFrequency = frequencies[thisStr];  //if it is we want to update maxFrequency number
      mostFrequentString = thisStr; //we also want to update mostFrequentString because this means it has changed
  }
    return mostFrequentString;
}

console.log(
  stringRotation("rotation", "tationro"),
  stringRotation("Javascript", "scriptJava"),
  stringRotation("hello", "there"),
  stringRotation("Javascript,", "Java")
);

function stringRotation(str1, str2) {
  if(str1.length !== str2.length) {//this checks for length if lengths are different it can not be a roatation
    return false;
  }
  for(let i = 0; i < str1.length; i++) {
    const rotation = str1.slice(i, str1.length) + str1.slice(0, i);

    if(rotation === str2) {
      return true;
    }
  }
  return false;
}

console.log(
  stringRotation("rotation", "tationro"),
  stringRotation("Javascript", "scriptJava"),
  stringRotation("hello", "there"),
  stringRotation("Javascript,", "Java")
);

function stringRotation(str1, str2) {
  return str1.length === str2.length && (str1 + str1).includes(str2);
}

console.log(
  arraySubset([2, 1, 3], [1, 2, 3]),
  arraySubset([2, 1, 1, 3,], [1, 2, 3])
  arraySubset([1, 2, 3,], [1, 2, 2, 3]),
  arraySubset([1, 2, 3], [1, 1, 1])
);

function arraySubset(superset, subset) {
  if(subset.length > superset.length) {
    return false;
  }

  const superCopy = [...superset];//...makes a copy of the first array

  for(let i = 0; i < subset.length; i++) {
    const superIndex = superCopy.indexOf(subset[i]); //this is finding where in the superset i exists if it exists at all

    if(superIndex === -1) { //if it does not exists superindex will be equal to -1
      return false;
    }
    delete superCopy[superIndex];
  }
  return true;
}
