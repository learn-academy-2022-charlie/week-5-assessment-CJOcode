// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.

describe ("secretCode", () => {

    it("returns a coded message that converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.", () => {

        const secretCodeWord1 = "Lackadaisical"
        // Expected output: "L4ck4d41s1c4l"
        const secretCodeWord2 = "Gobbledygook"
        // Expected output: "G0bbl3dyg00k"
        const secretCodeWord3 = "Eccentric"
        // Expected output: "3cc3ntr1c"

        expect(secretCode(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
        expect(secretCode(secretCodeWord2)).toEqual("G0bbl3dyg00k")
        expect(secretCode(secretCodeWord3)).toEqual("3cc3ntr1c")

    })
})

// GOOD FAILURE
// FAIL  ./code-challenges.test.js
// secretCode
//   ✕ returns a coded message that converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0. (1 ms)

// ● secretCode › returns a coded message that converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

//   ReferenceError: secretCode is not defined



// b) Create the function that makes the test pass.

// Pseudo -->
// Create a function called secretCode that takes in a string and replaces 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.
// The function will turn the string into an array using .split("")
// secretCode will then iterate through the array of letters using .map and change the specified letters to numbers.
    // The map will contain an if statement checking for both upper and lower case letters.
// Return the array using the .join("") method to put the modified array back into a string 

const secretCode = (string) => {
    let arr = string.split("")
const finalArr = arr.map(index => {
if (index == 'a' || index == 'A') {
  return '4';
}
else if (index === 'e' || index === 'E') {
    return '3';
}
else if (index === 'i' || index === 'I') {
    return '1';
}
else if (index === 'o' || index === 'O') {
    return '0';
}
else {
    return index;
}
});
return finalArr.join("")
}

// Code passes:
// PASS  ./code-challenges.test.js
// secretCode
// ✓ returns a coded message that converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0. (3 ms)




// // --------------------2) Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.

// // a) Create a test with expects statement using the variable provided.

describe ("containLett", () => {

    it("takes in an array of words and a single letter and returns all the words that contain that particular letter.", () => {

        const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
        const letterA = "a"
        // Expected output: ["Apple", "Banana", "Orange"]
        const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
        const letterE = "e"
        // Expected output: ["Cherry", "Blueberry", "Peach"]

        expect(containLett(arrayOfWords1, letterA)).toEqual(["Apple", "Banana", "Orange"])
        expect(containLett(arrayOfWords2, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])

    })
})

// GOOD FAILURE:
// FAIL  ./code-challenges.test.js
// containLett
//   ✕ takes in an array of words and a single letter and returns all the words that contain that particular letter. (1 ms)

// ● containLett › takes in an array of words and a single letter and returns all the words that contain that particular letter.

//   ReferenceError: containLett is not defined


// b) Create the function that makes the test pass.

// Pseudo -->
// Create a function called containLett that takes in two arguments, and array and a letter.
// Create one variable and use the .filter method to iterate through the array and pull only the words that have the specified letter, while also 
// Create another variable that again uses .filter but this time checks for the specified letter capitalized.
// Lastly, return the new arrays, joining them together using the .concat() method.

const containLett = (array, letter) => {
    const result = array.filter(array => array.includes(letter.toUpperCase()));
    const result2 = array.filter(array => array.includes(letter));
    return result.concat(result2)
}
// CODE PASSED!:
// PASS  ./code-challenges.test.js
// containLett
//   ✓ takes in an array of words and a single letter and returns all the words that contain that particular letter. (3 ms)




// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

describe ("fullHouse", () => {

    it("takes in an array of 5 numbers and determines whether or not the array is a “full house”.", () => {

        const hand1 = [5, 5, 5, 3, 3]
        // Expected output: true
        const hand2 = [5, 5, 3, 3, 4]
        // Expected output: false
        const hand3 = [5, 5, 5, 5, 4]
        // Expected output: false

        expect(fullHouse(hand1)).toEqual(true)
        expect(fullHouse(hand2)).toEqual(false)
        expect(fullHouse(hand3)).toEqual(false)

    })
})
// GOOD FAILURE:
// FAIL  ./code-challenges.test.js
// fullHouse
//   ✕ takes in an array of 5 numbers and determines whether or not the array is a “full house”. (3 ms)

// ● fullHouse › takes in an array of 5 numbers and determines whether or not the array is a “full house”.

//   ReferenceError: fullHouse is not defined


// b) Create the function that makes the test pass.

// Pseudo -->
// Create a function called fullHouse that takes in an array as the argument.
// First use the .sort method to arrange the numbers in order.
// Create an if statement that checks if the first to numbers match and the last three match, if so, return true.
// Next, an else-if will check if the first three numbers match and the last two match, if condition is met return true.
// Lastly, any other combination will return false


const fullHouse = (array) => {
    const sort = array.sort()
    if ((sort[0] === sort[1]) && (sort[2] === sort[3]) && (sort[2] === sort[4])){
        return true
    }
    else if ((sort[0] === sort[1]) && (sort[0] === sort[2]) && (sort[3] === sort[4])){
        return true
    }
    else {
        return false
    }
}
// CODE PASSED:
// PASS  ./code-challenges.test.js
// fullHouse
//   ✓ takes in an array of 5 numbers and determines whether or not the array is a “full house”. (2 ms)