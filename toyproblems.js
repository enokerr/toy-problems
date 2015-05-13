// 1-26-15
//write a function called ABCheck that takes a string parameter and return the string true if the characters a and b are seperated by exactly 
//3 places anywhere in the string at least once (ie. "lane borrowed" would result in true b/c there is exactly three characters between a and b)
//Otherwise return the string false

//function takes any string
//need to loop through the string and check if a and b are exactly 3 spaces apart. if so, return true

var ABCheck = function(str) {
	var str = str.toUpperCase();
	var newArray = [];
for (var i = 0; i < str.length; i++) {
	newArray = newArray.push(str[i]);

}
};


//-------------------------------------------------------------------------------------------------------------------------

var ABCheck = function(str) {
	var arr = str.toLowerCase.split('');
for (var i = 0; i < str.length; i++) {
	if arr[i] === 'a' && (arr[i + 4] === 'b' || arr[i - 4] === 'b') {
	return true;
	}
};
	return false;
};

//----------------------------------------------------------------------------------------------------------------------------------

//write a function that generates an array of integers of the fibonacci sequence, up to i = 100. The fibonacci sequence is defined by
//Fn = Fn-1 + Fn-2 , which means to find Fn you add the previous numbers up. The first two numbers in the sequence are 0 and 1. Write a function
// to check if a given number is in the fibonacci sequence, return "yes" if it is, if not return the string "no".

function fibonacci(){
  var newArr = [];
  var fn1 = 1;
  var fn2 = 1;
  while (1){
    var current = fn2;
    fn2 = fn1;
    fn1 = fn1 + current;
    yield current;
    if (current > 100) {
    	break;
    }
  }

}

//----------------------------------------------------------------

var numberCheck = function(num) {
	var array = [0,1];
	var total = 0;
	var i = 2;
	while (total < num) {
		total = array[i-2] + array[i-1];
		array.push(total);
		i++;
	}
	if (array.indeOf(num) !== -1){
		return true;
	}
		return false;

}

//---------------------------------------------------------------------

function fib(num){
	var fibnArray = [0, 1];
	for (var i = 0)
}
//---------------------------------------------------------------------------------------------------------

//Find the only item that occurs an even number of times in an array. If there is more than one item that occurs an even number of time
//just return one of them. If there are no items that occur an even number of times, return null. 

var onlyEven = function(arr) {
	var sorted_arr = arr.sort(); 
	var results = [];
for (var i = 0; i < arr.length - 1; i++) {
    if (sorted_arr[i + 1] == sorted_arr[i]) {
        results.push(sorted_arr[i]);
    }
    if (results.length % 2 === 0) {
    	return results;
		
		}		
	}

};

onlyEven([1,6,2,4,4,5,6,8,9,6]);

//---------------------------------------------------------------------------------

var onlyEven = function(arr) {
	for (var i = 0; i < arr.length; i++) {
		var occurs = 0;
	for (var j = 0; j <arr.length; i++) {
		if (arr[i] === arr[j]) {
			occurs++;
		}
	}
	if (occurs % 2 === 0) {
		return arr[i];
		}
}

var arr = [1,6,2,4,4,5,6,8,9,6];
//--------------------------------------------------------------------------------------

// Write a function that accepts a number, n , and returns the nth Fibonacci number. Use a recursive solutuion to this problem; 
// if you finish with time left over, implement an iterative solution

var nthFib = function(num) {   //non recursive (iterative) solution
	var fibArr = [0,1];
for (i = 2; i <= num; i++) {
	fibArr[i] = fibArr[i-2] + fibArr[i-1];
	}
	return fibArr[num];
};

//------------------------------------------------------------------

var nthFib = function(num) {   //another iterative solution 
	var sum = 0;
	var num1 = 0;
	var num2 = 1;
for(var i = 1; i < num; i++) {
	sum = num1 + num2;
	num1 = num2;
	num2 = sum;
	}
return sum;
}

//---------------------------------------------------------------------------------------------

var recursiveFib = function(n) {      //recursive solution!!
	if (n <=2 ) {
		return 1;
	}
	return recursiveFib(n - 1) + recursiveFib(n - 2);
}

//-------------------------------------------------------------------------------------------

//create a function that takes in three strings as parameters. The goal is to swap all x characters in the string for y characters.
//For example: swapper('some string', 's', 'z') returns 'zome ztring'. 

var swapper = function(str, x, y) {
	var strArr = str.split("");
for (var i = 0; i < str.length; i++) {
	if (strArray[i] === x) {
		strArray[i] === y;
	}
}
var string = strArray.join('');
return string;
}

//-------------------------------------------------------------------------------------------------------

//write a function that accepts a multi dimensional  array and returns a flattened version
//flatten([1,2,[3,[4], 5, 6], 7]) // [1,2,3,4,5,6,7]

var flatten = function(arr) {
	var newString = arr.toString();
	var newArr = [];
	for(i = 0; i < newString.length; i++) {
		if (newString[i] !== ','){
			newArr.push(parseInt(newString[i]));
		}
	}
	return newArr;
}


//-----------------------------------------------------------------------------------------------------------

var animals = [
    {
        name: 'Dog',
        kingdom: 'Animalia',
        phylum: 'Chordata',
        class: 'Mammalia',
        order: 'Carnivora',
        family: 'Canidae',
        species: 'Canis lupus'
    },
    {
        name: 'Cat',
        kingdom: 'Animalia',
        phylum: 'Chordata',
        class: 'Mammalia',
        order: 'Carnivora',
        family: 'Felidae',
        species: 'Felis catus'
    },
    {
        name: 'Hippopotamus',
        kingdom: 'Animalia',
        phylum: 'Chordata',
        class: 'Mammalia',
        order: 'Artiodactyla',
        family: 'Hippopotamidae',
        species: 'Hippopotamus amphibius'
    },
    {
        name: 'Playtpus',
        kingdom: 'Animalia',
        phylum: 'Chordata',
        class: 'Mammalia',
        order: 'Monotremata',
        family: 'Ornithorhynchidae',
        species: 'Ornithorhynchus anatinus'
    },
    {
        name: 'Lizard',
        kingdom: 'Animalia',
        phylum: 'Chordata',
        class: 'Reptilia',
        order: 'Squamata',
        family: 'Agamidae',
        species: 'Pogona vitticeps'
    },
    {
        name: 'Blackbird',
        kingdom: 'Animalia',
        phylum: 'Chordata',
        class: 'Aves',
        order: 'Passeriformes',
        family: 'Turdidae',
        species: 'Turdus merula'
    }
];
    
//given the above object, write a function that returns an object whose keys are the fields found above and whose values are objects containing all the values as keys and a count for how many times that value occurs

//e.g.
//{
//    kingdom: {Animalia: 6}
//    phylum: {Chordata: 6},
//    class: {Mammalia: 4, Reptilia: 1, Aves: 1}
//}

//code here
var breakDown = function(items) {
    var b = {};
    for(var i = 0; i<items.length; i++) {
        for(var prop in items[i]) {
            if(!b[prop]) {
                b[prop] = {};   
            }
            if (!b[prop][items[i][prop]]) {
                b[prop][items[i][prop]] = 1;
            }
            else {
                b[prop][items[i][prop]]++;
            }
        }
    }
    return b;   
}

console.log(breakDown(animals));

//----------------------------------------------------------------------------------------------------

//make the following code work

var counter = getCounter(); //function inside of a function. All this is doing is saving inner function to counter variable counter.

counter(); // 2
counter(); // 4
counter(); //6 
counter(); // 8
counter(); // 10, etc. 

var getCounter = function(){     
    var counter = 0;
    return function(){       //returns inner function, still has access to outer variable.
        counter += 2;
        return counter;
    }
}

//-------------------------------------------------------------------------------------------------------------

//function that takes a string with parens, brackets, braces ({[< checks to see if they close (string{stringy}) -- true
// ([string]} -- false

var checker = function(string) {
    var newString = string.split("");
    var counter = 0;
    for (var i = 0; i < string.length; i++) {
        if (string[i] === "(" || "{" || "[") {   //first attempt (failed)
            counter += 1;
        }
    }
        if (counter % 2 === 0) {
            return true;
        } else {
            return false;
        }
}

//------------------------------------------------------------------------------------------------------

var checker = function(string) {
    var charTracker = {             //created object to keep count essentially.
        "(": 0,
        "{": 0,
        "[": 0
        "<": 0
    }
    for(var i = 0; i < string.length; i++){
        switch (string[i]){                      //switch case is quick way to run many if statements 
            case "(":
            case "{":
            case "[":
            case "<":
                charTracker[string[i]] ++;
                break;
            case ")":
                charTracker["("] --;
                break;
            case "}":
                charTracker["{"] --;
                break;
            case "]":
                charTracker["["] --;
                break;
            case ">":
                charTracker["<"] --;
                break;
         }
    }
        for (var key in charTracker) {
            if (charTracker [key] !== 0) {
                return false;
            }
        }
                return true;

}

//------------------------------------------------------- another solution

function openClose(string){
    var obj = {
        "()": 0,
        "<>": 0,
        "[]": 0,
        "{}": 0
    };
    var innerList = [];
    for( var i = 0; i < string.length; i++ ) {
        for(var item in obj){
            if(item.indexOf(string[i]) === 0){
                innerList.push(string[i]);
                obj[item] += 1;
            } else if (item.indexOf(string[i]) === 1){
                obj[item] -= 1;
                if(obj[item] < 0){
                    return false;
                }
                if(item.indexOf(innerList[innerList.length -1 ]) === -1){
                    return false
                } else {
                    innerList.pop();
                }
            }
        }
    }
    if(innerList.length) return false;
    return true;
}

//----------------------------------------------------------------------------------------------


// Sort the values in the following array in ascending order: [32, 1, 44, 9] 

var random_array = [32, 1, 44, 9];

var sorter = function(array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] <)
    }
}

var random_array = [32, 1, 44, 9];

random_array.sort(function(a, b) {
  return a - b;
});
print(random.array);

//---------------------------------------------
//conditional (ternary) operator

var rethink = true ? "Daniel": "Scott";

//same as 

var rethink = 14 > 13 ? "Daniel": "Scott";

//same as 

var rethink = {
    if (14 > 13) {
        rethink = "Daniel";
    }
    else {
        rethink = "Scott";
    }
}

//----------------------------------
//map The map() method creates a new array with the results of calling a provided function on every element in this array.

var numbers = [1, 4, 9];
var roots = numbers.map(Math.sqrt);
// roots is now [1, 2, 3], numbers is still [1, 4, 9]

var numbers = [1, 4, 9];
var doubles = numbers.map(function(num) {
  return num * 2;
});
// doubles is now [2, 8, 18]. numbers is still [1, 4, 9]

var str = '12345';
[].map.call(str, function(x) {
  return x;
}).reverse().join(''); 

// Output: '54321'
// Bonus: use '===' to test if original string was a palindrome

//-------------------------------------------------------------------------------------------

// We have a triabgle made of blocks.  The topmost row has 1 block, the next row has 2 blocks, the next row has 3 blocks, and so on.  Compute the total number of blocks in such a triablge with the given number of rows.

// triangle(2) ---> 3
//  *
// * *

// triangle(3) ---> 6
//   *
//  * *
// * * *

// triangle(4) --->
//    *
//   * *
//  * * *
// * * * *

function triangleCounter(n){
  if (n === 1) return 1;
  else return n + triangleCounter(n - 1);
}

function triangleCreator(n, x){
  if(!x) x = 1;
  var string = '';
  if(x === 1) string += '\n';
  for(var i = 0; i < (n - x); i++){
    string += ' ';
  }
  for(var i = 0; i < x; i++){
    string += '* ';
  }
  string += '\n'
  if(x !== n) return string + triangleCreator(n, x + 1);
  else return string;
}

//-----------------------------------------------------------

// write a function that console.logs numbers from 1 to 100. 
// For multiples of 3 print 'fizz', for multiples of 5 print 'buzz'.
// For multiples of both 3 and 5 print 'fizz buzz'.

var fizzBuzz = function() {
    
    for (var i = 1; i < 101; i++) {        
        if (i % 15 === 0) {             //important that this test is ran first. 
            console.log('fizz buzz');
        }
        else if (i % 5 === 0){
            console.log('buzz');
        }
        else if(i % 3 === 0) {
            console.log('fizz');
        }
        else {
            console.log(i);
        }
    }
}

//------------------------------------------------------------------

function fizzBuzz() {
    var string = 1;
for (var i = 2; i < 100; i++) {       
    if (i % 15 = 0) {
        str += ', fizz buzz';
    } else if (i % 3 === 0) {
        str += ', fizz';
    } else if (i % 5 === 0) {
        str += ', buzz';
    } else {
        str += ', + i';
    }
}
console.log(string);
}

//-----------------------------------------------------------------------

//Have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. 
//Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). 
//Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string. 

function LetterChanges(str) { 
  str = str.split("");
  var regex = /[a-z]/i;
  var vowels = /[aeiou]/i;
  var changes = [];

  for (var i = 0; i < str.length; i++) {
    if (regex.test(str[i])) {
        var ltr = String.fromCharCode(str[i].charCodeAt() + 1);
        changes.push(ltr.toLowerCase());
      if (vowels.test(changes[i])) {
        changes[i] = changes[i].toUpperCase();
      }
    } else {
        changes.push(str[i]);
    }
  }      
  return str = changes.join("");        
}

//-----------------------------------------------------------------------------

//have the function SimpleAdding(num) add up all the numbers from 1 to num

function SimpleAdding(num) { 
var newNumber = 0;
  for (var i = 1; i <= num; i++) {
   newNumber += i;
  }
    num = newNumber;

    
  return num; 
         
}

//--------------------------------------------------------------------------------

//have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word. 
//Words will be separated by only one space. 

function LetterCapitalize(str) { 
    var arr = [];
    var sep = str.split(" ");
    for (var i = 0; i < sep.length; i++) {
     arr.push(sep[i][0].toUpperCase()+sep[i].slice(1));
    }

  return arr.join(" "); 
         
}

//---------------------------------------------------------------------------------

// have the function SimpleSymbols(str) take the str parameter being passed and determine if it is an acceptable sequence by either returning the string true or false. 
// The str parameter will be composed of + and = symbols with several letters between them (ie. ++d+===+c++==a) and for the string to be true each letter must be surrounded by a + symbol. 
// So the string to the left would be false. The string will not be empty and will have at least one letter. 

function SimpleSymbols(str) { 
    var something = str.split("");
    var alpha="abcdefghijklmnopqrstuwxyz";
  for (var i = 0; i < something.length; i++) {
    if ((alpha.indexOf(something[i]) !== -1) && (something[i - 1] !== "+" || something[i + 1] !== "+")) {
        return false;
    } 
} 
  return true; 
         
}

//----------------------------------------------------------------------------------------------

//write a function that takes two parameters (num1, num2) and outputs true if num2 > num1, outputs fale
//if num1 > num2, and outputs -1 if the two numbers are equal

function CheckNums(num1,num2) { 
    if (num2 > num1) {
      return true;
    } if (num1 > num2) {
        return false;
    } else {
      return -1;
    }
  // code goes here  
  return num1 + num2; 
         
}

//---------------------------------------------------------------------------------------------------

// have the function TimeConvert(num) take the num parameter being passed and return the number of hours and minutes the parameter converts to 
// (ie. if num = 63 then the output should be 1:3). Separate the number of hours and minutes with a colon. 

   function TimeConvert(num) { 
      h=Math.floor(num/60)
      m=num%60  
      return (h + ":" + m).toString();   
    }

//-------------------------------------------------------------------------------------------------------

// have the function AlphabetSoup(str) take the str string parameter being passed and return the string with the letters in alphabetical order (ie. hello becomes ehllo). 
// Assume numbers and punctuation symbols will not be included in the string. 

function AlphabetSoup(str) { 
    var sorted = str.split("");
    return sorted.sort().join("");
         
}

//-----------------------------------------------------------------------------------------------------------

// have the function ABCheck(str) take the str parameter being passed and return the string true if the characters a and b are separated by exactly 3 places anywhere in the string at least once 
// (ie. "lane borrowed" would result in true because there is exactly three characters between a and b). Otherwise return the string false. 

var ABCheck = function(str) {
    str.toLowerCase();
    str.split("");

   for (var i = 0; i < str.length - 4; i++) {
       if (str[i] === "a" && str[i + 4] === "b") {
        return true
       } else {
        return false
       }
   }
};

//----------------------------------------------------------------------------------------------------------------

// have the function PrimeTime(num) take the num parameter being passed and return the string true if the parameter is a prime number, otherwise return the string false. 
// The range will be between 1 and 2^16. 

var primeTime = function(num) {
    if (num === 2) {return true} //start with two, which is prime

    var i = 2; //counter variable
    for(i; i < num; i++) {    //takes i at 2, and loops through iterating by one until it gets to the num argument
        if (num % i === 0) {  //if num % any number between 2 and itself has a remainder of 0, then the number isn't prime.. return false
            return false;
        }
    }
    return true;  //if the loop goes through and there is never a number with a remainder of 0, then it is prime.. return true.!
}

//----------------------------------------------------------------------------------------------------------------------

// have the function ExOh(str) take the str parameter being passed and return the string true if there is an equal number of x's and o's, 
// otherwise return the string false. Only these two letters will be entered in the string, no punctuation or numbers. 
// For example: if str is "xooxxxxooxo" then the output should return false because there are 6 x's and 5 o's. 

var ExOh = function(str) {
    var xCounter = 0;
    var oCounter = 0;
    str.split("");

for (var i = 0; i < str.length; i++) {
    if (str[i] === "x") {
        xCounter++;
    } else {
        oCounter++;
    }
}

if (xCounter === oCounter) {
        return true
    } else {
        return false
    }
}

//-----------------------------------------------------------------------------------------------------------------------------

// have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it (ie. if num = 4, return (4 * 3 * 2 * 1)).
//  For the test cases, the range will be between 1 and 18.

var FirstFactorial = function(num) {
    var val = 1;                       //defines val variable
    for(i = 1; i <= num; i++) {    //loops through num parameter/argument
        val = val * i;             //set val = to itself x num. (i.e 4x1, 4x2, 8x3)
    }
    return val;
} 

//---------------------------------------------------------------------------------------------------------------------------------

 // have the function VowelCount(str) take the str string parameter being passed and return the number of vowels the string contains (ie. "All cows eat grass" would return 5). 
 // Do not count y as a vowel for this challenge. 

 var VowelCount = function(str) {   //works, but hideous!
    str.split("");
    var count = 0;
    
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) === "a") {
            count += 1;
        } else if (str.charAt(i) === "e") {
            count += 1;
    } else if (str.charAt(i) === "i") {
            count += 1;
    } else if (str.charAt(i) === "o") {
            count += 1;
    } else if (str.charAt(i) === "u") {
            count += 1;
    }
    
}
return count;
}

//----------------------------------------------

  function VowelCount(str) { 

      var vo= str.replace(/[^aeiou]/g,"")   //regular expression here much more efficient. Go through string and replaces all vowels with placeholder ""
      return vo.length    //returns the number of "" placed in vo, each representing a vowel.
  }

//---------------------------------------------------------

// have the function WordCount(str) take the str string parameter being passed and return the number of words the string contains 
// (ie. "Never eat shredded wheat" would return 4). Words will be separated by single spaces. 

var WordCount = function(str) {
    str = str.split(" ");
    var counter = 0;

   return str.length;

}

//-------------------------------------------------------------------------------------------------

// have the function Palindrome(str) take the str parameter being passed and return the string true if the parameter is a palindrome, (the string is the same forward as it is backward) otherwise return the string false. 
// For example: "racecar" is also "racecar" backwards. Punctuation and numbers will not be part of the string. 

var Palindrome = function(str) {
    var strTwo = str.split("").reverse().join("");
 
    if (str === strTwo) {
        return true;
    } else {
        return false
    }

}

//----------------------------------------------------------------------------------------------------

// have the function RunLength(str) take the str parameter being passed and return a compressed version of the string using the Run-length encoding algorithm. 
// This algorithm works by taking the occurrence of each repeating character and outputting that number along with a single character of the repeating sequence. 
// For example: "wwwggopp" would return 3w2g1o2p. 

var RunLength = function(str) {

    var strArr = str.split(''); //creates new array strArr composed of str argument seperated at each character ('')

    var newArr = [];

    for (var i = 0; i < strArr.length; i++) {
        if (strArr[i - 1] === undefined) {
            newArr.push(strArr[i]);
        } else {
            if (strArr[i - 1] === strArr[i]) {
                newArr.push(strArr[i]);
            } else {
                newArr.push('-' + strArr[i]);
            }
        }
    }

    var groupedArr = newArr.join('').split('-');

    var newStr = '';
   
    for (var x = 0; x < groupedArr.length; x++) {
        newStr += groupedArr[x].length + groupedArr[x][0];
    }
    return newStr;
}

//--------------------------------------------------------------------------------

// Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. 
// If there are two or more words that are the same length, return the first word from the string with that length. 
// Ignore punctuation and assume sen will not be empty.


function LongestWord(sen) {

var x = sen.replace(/\W/g," ").split(" ").filter(function(i) {return (i!=="");})

return x.sort(function(a,b){ return b.length - a.length;})[0];

}

//---------------------------------------------------------------------------------------------------


 // Using the JavaScript language, have the function ArithGeo(arr) take 
 // the array of numbers stored in arr and return the string "Arithmetic" 
 // if the sequence follows an arithmetic pattern or return "Geometric" if
 // it follows a geometric pattern. If the sequence  doesn't follow either 
 // pattern return -1. An arithmetic sequence is one where the difference 
 // between each of the numbers is consistent, where as in a geometric 
 // sequence, each term after the first is multiplied by some constant or
 // common ratio. Arithmetic example: [2, 4, 6, 8] and Geometric example:
 // [2, 6, 18, 54]. Negative numbers may be entered as parameters, 0 will
 // not be entered, and no array will contain all the same elements.

 var ArithGeo = function(arr) {
    
    var first = arr[0];   //set up indexed arrays to establish pattern.
    var second = arr[1];
    var third = arr[2];

    if ((second - first) === (third - second)) {       //establishes whether or not the difference between 0-1 and 1-2 are the same.
        return "Arithmetic";                            //if the differences are the same, the pattern is arithmetic
    } else if ((second/first) === (third/second)) {     //establishes whether or not second/first === third/second.
        return "Geometric";                             //if the difference is the same, then we can assume the pattern in geometric
    } else {
        return -1;
    }
}

//Does't account for an array like [1,2,3,4,5,6,800]

//------------------------------------------------------------------------------------------

// have the function ArrayAdditionI(arr) take the array of numbers stored in arr and return the string true if any combination of numbers in the array can be added up to equal the largest number in the array, 
// otherwise return the string false. For example: if arr contains [4, 6, 23, 10, 1, 3] the output should return true because 4 + 6 + 10 + 3 = 23. 
// The array will not be empty, will not contain all the same elements, and may contain negative numbers. 

var ArrayAddition = function(arr) {

    var largest = Math.max.apply(Math, arr); //sets largest to biggest number in the array argument 
    var index = arr.indexOf(largest);  //finds index of largest number in arr
    arr.splice(index, 1);              //removes the largest number in the arrary, stored in largest variable

    var sum = 0;  //new variable sum set equal to zero 

    for (var i = 0; i < arr.length; i++) {  
        
        sum += arr[i];
        
        for (var j = 0; j < arr.length; j++) {
            if (i != j) {
                sum += arr[j];
                    if (sum == largest) {
                        return true;
                    }
            }
        }

        for (var k = 0; k < arr.length; k++) {
            if (i != k) {
                sum -= arr[k];
                if (sum == largest) {
                    return true;
                }
            }
        }
        sum = 0;
    }
    return false;
}

//----------------------------------------------------------------------

// Have the function ThirdGreatest(strArr) take the array of strings stored in strArr and return the third largest word within in. 
// So for example: if strArr is ["hello", "world", "before", "all"] your output should be world because "before" is 6 letters long, and "hello" and "world" are both 5, 
// but the output should be world because it appeared as the last 5 letter word in the array. 
// If strArr was ["hello", "world", "after", "all"] the output should be after because the first three words are all 5 letters long, so return the last one. 
// The array will have at least three strings and each string will only contain letters. 

var ThirdGreatest = function(strArr) {
    
    var newStr =  strArr.sort(function(a,b){return b.length - a.length;}); //sets newStr = strArr sorted from biggest word to smallest
              
        return newStr[2]; //returns third largest string in the array. This ends up working out even if there are multiple strings that are the same length

}

//-------------------------------------------------------------------------------

// have the function SecondGreatLow(arr) take the array of numbers stored in arr and return the second lowest and second greatest numbers, 
// respectively, separated by a space. For example: if arr contains [7, 7, 12, 98, 106] the output should be 12 98. 
// The array will not be empty and will contain at least 2 numbers. It can get tricky if there's just two numbers!

var SecondGreatLow = function(arr) {  //first attempt.. gets funky when passed only 2 numbers

    var sortedArr = arr.sort(function sortNumber(a,b){
    return a - b;})

    if (arr.length === 2) {
        return sortedArr[0] + " " + sortedArr[1];
    } else {
        return sortedArr[1] + " " + sortedArr[sortedArr.length - 2];
    }
}

//---------------------------------------------------------------------------------

    function SecondGreatLow(arr) { 
         var uniq = [arr[0]]                //creates uniq var to very first value of arr array
         
         for (var i = 0; i < arr.length; i++){

             if (uniq.indexOf(arr[i]) === -1){  //if arr[i] isn't in the uniq array
 
                 uniq.push(arr[i])  //add arr[i] to uniq array 
 
             }
         }

        var arrx = uniq.sort(function(a,b){return a-b}) //takes uniq array and sorts it from least to greatest. new arrx array created 
        var seclowest = arrx[1];      //seclowest is second value in arrx array 
        var rearrx = arrx.reverse() //reverses arrx array, now greatest to least 
        var secmax = rearrx[1] //sec max is second value in reversed array 
        return seclowest + " " + secmax; //returns second lowest and second largest values!
    }

//-----------------------------------------------------------------------------------------------


// have the function CaesarCipher(str,num) take the str parameter and perform a Caesar Cipher shift on it using the num parameter as the shifting number. 
// A Caesar Cipher works by shifting each letter in the string N places down in the alphabet (in this case N will be num). 
// Punctuation, spaces, and capitalization should remain intact. For example if the string is "Caesar Cipher" and num is 2 the output should be "Ecguct Ekrjgt". 

var CaesarCipher = function(str,num) {


}

//-----------------------------------------------------------------------

// You have an array of integers, and for each index you want to find the 
// product of every integer except the integer at that index.

var get_products_of_all_ints_except_at_index = function(arr) {

    var newArr = [];

    for (var i = 0; i < arr.length; i++) {
        for (var j = 1; j < arr.length; j++) {  //first attempt interview cake question #1
            newArr.push(arr[i] * arr[j]);
        };
    };
    return newArr;
}

//-------------------------------------------------------------------------------

var get_products_of_all_ints_except_at_index = function(arr) {  

    var products_of_all_ints_except_at_index = [arr.length];  //  we make an array with the length of the input array to hold our products
    

    var product = 1;  
    var i = 0; 

    while (i < arr.length) {   //for each integer, we find the product of all the integers before it, storing the total product so far each time
        products_of_all_ints_except_at_index[i] = product;
        product *= arr[i];
        i += 1;

    }

    product = 1;
    i = arr.length - 1;

    while (i >= 0) { // for each integer, we find the product of all the integers# after it. since each index in products already has the product of all the integers before it, now we're storing the total product of all other integers
        products_of_all_ints_except_at_index[i] *= product;
        product *= arr[i];
        i -= 1;
    }

    return products_of_all_ints_except_at_index;
}

//---------------------------------------------------------------------------------------

// have the function LetterCountI(str) take the str parameter being passed and return the first word with the greatest number of repeated letters. 
// For example: "Today, is the greatest day ever!" should return greatest because it has 2 e's (and 2 t's) and it comes before ever which also has 2 e's. 
// If there are no words with repeating letters return -1. Words will be separated by spaces. 

function LetterCountI(str){
    debugger;
    var arr = str.split(' ');  //var arr = argument string split into an array where each word is it's own string 
    var highest = 0;
    var highestRepeatedLetterWord = -1; 
    
    // get highest repeated words
    for(var i = 0; i < arr.length; i++){  //loop through separated word array (arr)
        strArr = arr[i].split(''); //strArr looks at each word in arr and splits into array of individual letters
        
        for(var x = 0; x < strArr.length; x++){ //loops through strArr 
            letter = strArr[x]; // each individual letter in in strArr
            regex = new RegExp(letter,"g"); 
            if(regex.test(arr[i])) { 
                ocurrences = arr[i].match(regex).length;
                console.log(ocurrences);
                if(ocurrences > highest && ocurrences > 1){
                    highest = ocurrences;
                    highestRepeatedLetterWord = arr[i];
                }
            }
        }
    }
    
    return highestRepeatedLetterWord;
}

//----------------------------------------------------------------------------------------------------

 // have the function PrimeMover(num) return the numth prime number. The range will be from 1 to 10^4. 
 // For example: if num is 16 the output should be 53 as 53 is the 16th prime number. 

 var primeMover  = function(num) {
   
   var output = true;

   for(var i = 2; i <num; i++) {
    if (num % 2 == 0) {
        output = false;
        break;
    }
   }

    var counter = 0;

    for (var i = 2; i < 10^4; i++) {
        if (output == true) {
            counter += 1;
        }

        if (counter === num) {
            return i;
            break;
        }
    }

 }

 //-----------------------------------------------------------------

 function Prime(num) {
    output = true  
    for (var i=2 ; i<num ; i++) { //var i=2
        if (num%i === 0)  {
           output = false ; break
        }
    }
    return output
    }

function PrimeMover(num) {
    var count = 0
    for (var i=2 ; i<10^4 ; i++)  { //var i=2
        if (Prime(i) === true) {
            count = count + 1 
        }
        if (count === num) {
            return i
            break
        } 
    }
    }
//--------------------------------------------------------------------------

// have the function Division(num1,num2) take both parameters being passed and return the Greatest Common Factor. 
// That is, return the greatest number that evenly goes into both numbers with no remainder. 
// For example: 12 and 16 both are divisible by 1, 2, and 4 so the output should be 4.

var Division = function(num1, num2) {

}

//first, let's figure out how to get the factors of a number

var getFactors = function(num) {
    var factors = [num];

    for (var i = 0; i < num; i++) {
        if (num % i == 0) {
            factors.push(i);
        }
    }
    factors = factors.sort(function(a,b){return a-b})
    console.log(factors);
}
 //-----------------------------------------------------------------























