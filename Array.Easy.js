// function minMax(par){
//     return [Math.max(...par),Math.min(...par)]
// }
// console.log(minMax([1, 2, 3, 4, 5]))

/*==================================================================== */
/*canNest([1, 2, 3, 4], [0, 6]) ➞ true
canNest([3, 1], [4, 0]) ➞ true
canNest([9, 9, 8], [8, 9]) ➞ false
canNest([1, 2, 3, 4], [2, 3]) ➞ false */



// function canNest(a,b){
//     return Math.min(...a) > Math.min(...b) && Math.max(...a) < Math.max(...b)
// }
// console.log(canNest([1, 2, 3, 4], [0, 6]))
// console.log(canNest([3, 1], [4, 0]))q
// console.log(canNest([9, 9, 8], [8, 9]))
// console.log(canNest([1, 2, 3, 4], [2, 3]))


/* .......................................................................................... */



// function nest(arr1, arr2){
//     let Min1 = Math.min(...arr1)
//     let Min2 = Math.min(...arr2)
//     let Max1 = Math.max(...arr1)
//     let Max2 = Math.max(...arr2)

//     if(Min1 > Min2 && Max1 < Max2)console.log(true)
//     else console.log(false)
// }
//  nest([1, 2, 3, 4], [0, 6])
//  nest([3, 1], [4, 0])
//  nest([9, 9, 8], [8, 9])
//  nest([1, 2, 3, 4], [2, 3])

/*================================================================================ */


// function tuckIn(...par){
// return [par[0][0], ...par[1], par[0][1]]
// }
// console.log(tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]))

/* .......................................................................................... */

// function tuckIn(...par){
// let a = par[0][0]
// let b = par[0][1]
// let c = par[1]
// return [a, ...c, b ]
// }
// console.log(tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]))

/*==================================================================================== */
/*numberSplit(4) ➞ [2, 2]

numberSplit(10) ➞ [5, 5]

numberSplit(11) ➞ [5, 6]

numberSplit(-9) ➞ [-5, -4]
 */

// function numberSplit(n){
//     if(n % 2 == 0 ) {
//         console.log([n/2, n/2])
//     }
//     else if(n % 2 != 0){
//         console.log([n/2-0.5, n/2+0.5])
//     }
// }
// numberSplit(4)
// numberSplit(10)
// numberSplit(11)
// numberSplit(-9)
// numberSplit(100001)

/* .......................................................................................... */


// function floorceil(par){
//     return [Math.floor(par/2), Math.ceil(par/2)]
// }
// console.log(floorceil(11))


/* ========================================================================*/


/* filterArray([1, 2, "a", "b"]) ➞ [1, 2]

filterArray([1, "a", "b", 0, 15]) ➞ [1, 0, 15]

filterArray([1, 2, "aasf", "1", "123", 123]) ➞ [1, 2, 123] */



// const  filterArray = (par)=>{
//  return par.filter(item => typeof item === 'number' )
// //  return par.filter(item => typeof item !== 'string' )


// }
// console.log(filterArray([1, 2, "a", "b"]))

/*........................................................................................... */

// const filterArray = (par)=>{
//    return  par.filter(function(item){
//         return typeof item == 'number'
//     })
// }
// console.log(filterArray([1, 2, "a", "b"]))



// function filterArray(arr) {
// 	var newArr = []

// 	for(var i=0; i < arr.length; i++){
// 		if (typeof arr[i] === 'number'){
// 			newArr.push(arr[i])
// 		}
// 	}

// 	return newArr
// }
// console.log(filterArray([1, 2, "a", "b"]))


/*========================================================================================================= */

/*multiply([1, 2, 3])(2) ➞ [2, 4, 6] */

// function curry(a){
//     return (b)=>{
//         return [a[0]*b, a[1]*b, a[2]*b]
//     }
// }
// console.log(curry([1,2,3])(2))


// function curry(a){
//     return (b)=> {
//         return a.map(item => item * b)
//     }
// }
// console.log(curry([1,2,3])(2))
// console.log(curry([4, 6, 5])(10))
// console.log(curry([1, 2, 3])(0))

/*========================================================================================================= */

/*According to the lodash documentation, _.drop creates a slice of an array with n elements dropped from the beginning.

Your challenge is to write your own version using vanilla JavaScript.

Examples
drop([1, 2, 3], 1) ➞ [2, 3]

drop([1, 2, 3], 2) ➞ [3]

drop([1, 2, 3], 5) ➞ []

drop([1, 2, 3], 0) ➞ [1, 2, 3] */



// function drop(a,b){
//     a.splice(a[-1], b)
//     return a
// }
// console.log(drop([1, 2, 3], 1))
// console.log(drop([1, 2, 3], 2))
// console.log(drop([1, 2, 3], 5))
// console.log(drop([1, 2, 3], 0))
// console.log(drop([1,2,3,4,5,6,7,8,9], 3))

// function drop(a,b){
//     // console.log(a.splice(a[0], b))
//     a.splice(a[0], b)
//     return a
// }
// console.log(drop([1, 2, 3], 1))
// // drop([1, 2, 3], 1)



/* kinf of mistake i think
drop = (a, n ) => a.splice( a.length - n, n);
console.log(drop([1,2,3] , 1))

//...........................................................................

const dropRight = (arr, num = 1) => {

		arr.pop();
	return arr;
}
console.log(dropRight([1,2,3]))
console.log(dropRight([1, 2, 3], 2))
console.log(dropRight([1, 2, 3], 5))*/



/*================================================================================ */
/*Create a function that returns an array of strings sorted by length in ascending order.

Examples
sortByLength(["a", "ccc", "dddd", "bb"]) ➞ ["a", "bb", "ccc", "dddd"]

sortByLength(["apple", "pie", "shortcake"]) ➞ ["pie", "apple", "shortcake"]

sortByLength(["may", "april", "september", "august"]) ➞ ["may", "april", "august", "september"]

sortByLength([]) ➞ [] */


// function sortByLength(arr) {
// 	return arr.sort((a, b) => a.length - b.length)
// }
// console.log(sortByLength(["a", "ccc", "dddd", "bb"]))
// console.log(sortByLength(["apple", "pie", "shortcake"]))
// console.log(sortByLength(["may", "april", "september", "august"]))
// console.log(sortByLength([]))


// function sortByLength(arr) {
// 	return arr.sort(function(a, b){
// 	return a.length - b.length})
// }
// console.log(sortByLength(["a", "ccc", "dddd", "bb"]))
// console.log(sortByLength(["apple", "pie", "shortcake"]))
// console.log(sortByLength(["may", "april", "september", "august"]))
// console.log(sortByLength([]))


/*======================================================================================================= */


/*Create a function that takes in an array of numbers and returns the sum of its cubes.

Examples
sumOfCubes([1, 5, 9]) ➞ 855
// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855

sumOfCubes([3, 4, 5]) ➞ 216

sumOfCubes([2]) ➞ 8

sumOfCubes([]) ➞ 0 */


// function sumOfCubes(param){
// 	let sum=0
// 	for(i=0; i<param.length; i++){
// 		 sum+=param[i]**3

// 	}
// 	return sum
// }
// console.log(sumOfCubes([1, 5, 9]))
// console.log(sumOfCubes([3, 4, 5]))
// console.log(sumOfCubes([2]))
// console.log(sumOfCubes([]))



// const sumOfCubes = nums => {
// 	return nums.reduce((sum, num) => {
// 		return sum + Math.pow(num,3);
// 	},0)
// }
// console.log(sumOfCubes([1, 5, 9]))




// const sumOfCubes = nums => nums.reduce( (sum, num) => sum + Math.pow(num,3),0 )

// console.log(sumOfCubes([1, 5, 9]))



/*================================================================================================= */


/*Given an array of numbers, return an array which contains all the even numbers in the original array,
which also have even indices.

Examples
getOnlyEvens([1, 3, 2, 6, 4, 8]) ➞ [2, 4]

getOnlyEvens([0, 1, 2, 3, 4]) ➞ [0, 2, 4]

getOnlyEvens([1, 2, 3, 4, 5]) ➞ [] */

// function getOnlyEvens(par) {
// 	return par.filter((item, index) => item % 2 === 0 && index % 2 === 0 )
// }
// console.log(getOnlyEvens([1, 3, 2, 6, 4, 8]))


// function getOnlyEvens(par) {
// 	return par.filter((item) => item % 2 === 0 )
// }
// console.log(getOnlyEvens([1, 3, 2, 6, 4, 8]))




/*====================================================================================== */


/*Create a function that takes an array of strings and return an array, sorted from shortest to longest.

Examples
sortByLength(["Google", "Apple", "Microsoft"])
➞ ["Apple", "Google", "Microsoft"]

sortByLength(["Leonardo", "Michelangelo", "Raphael", "Donatello"])
➞ ["Raphael", "Leonardo", "Donatello", "Michelangelo"]

sortByLength(["Turing", "Einstein", "Jung"])
➞ ["Jung", "Turing", "Einstein"] */


// function sortByLength(par){
//    return  par.sort((a,b) => a.length - b.length)
// }
// console.log(sortByLength(["Google", "Apple", "Microsoft"]))
// console.log(sortByLength(["Leonardo", "Michelangelo", "Raphael", "Donatello"]))
// console.log(sortByLength(["Turing", "Einstein", "Jung"]))


/*============================================================================================================= */
/*Create a function that takes an array as an argument and returns true or false depending on
 whether the average of all elements in the array is a whole number or not.

Examples
isAvgWhole([1, 3]) ➞ true

isAvgWhole([1, 2, 3, 4]) ➞ false

isAvgWhole([1, 5, 6]) ➞ true

isAvgWhole([1, 1, 1]) ➞ true

isAvgWhole([9, 2, 2, 5]) ➞ false */

// function isAvgWhole(par){
//     let sum =0
//     for(i=0; i<par.length; i++){
//        sum+=par[i]
//     }
//     return (sum % par.length == 0 )
// }
// console.log(isAvgWhole([1, 3]))
// console.log(isAvgWhole([1, 2, 3, 4]))
// console.log(isAvgWhole([1, 5, 6]))
// console.log(isAvgWhole([9, 2, 2, 5]))
// console.log(isAvgWhole([9, 2, 2, 5]))




// function isAvgWhole(arr) {
// 	return Number.isInteger(arr.reduce((accum, val) => accum + val) / arr.length) 
// }
// console.log(isAvgWhole([1, 3]))



// var arr= [1,34,6,5,4,4,55,6,67,344,34,35,45,6]
// console.log(  Number.isInteger(arr.reduce(  (acc, val) => acc+val ) /arr.length ))

/*========================================================================================================================= */

/*Create a function that takes a string str and performs simple encoding as per the following method:

Replace all single occurrence characters with [
Replace all characters with two or more occurrences with ]
Return the final string after modification.

Examples
simpleEncoder("Mubashir") ➞ "[[[[[[[["
// '[' for each character

simpleEncoder("Matt") ➞ "[[]]"
// ']' for both 't'

simpleEncoder("eD  aBiT") ➞ "[[]][[[["
// Two spaces in between
Notes
Strings can contain lower and uppercase letters. Treat them equally (i.e. A = a, B = b).
Spaces are also characters. */

// function simpleEncoder (str){
// 	return str.toLowerCase().split().map((item, index, string) => string.indexOf(item) == string.lastIndexOf(item) ? '[' : ']').join('')
	 
	
	
/*============================================================================================================================================= */
	
// }
// console.log(simpleEncoder("Mubasshir"))

/*Take an array of integers (positive or negative or both) and return the sum of the absolute value of each element.

Examples
getAbsSum([2, -1, 4, 8, 10]) ➞ 25

getAbsSum([-3, -4, -10, -2, -3]) ➞ 22

getAbsSum([2, 4, 6, 8, 10]) ➞ 30

getAbsSum([-1]) ➞ 1
Notes
The term "absolute value" means to remove any negative sign in front of a number, and to think of all numbers as positive (or zero).
All the elements in the given array are integers. */


// function getAbsSum(par){
// 	let sum=0
// 	for(i=0; i < par.length; i++ ){
// 		sum+= Math.abs(par[i])
// 	}
// 	return sum
// }
// console.log(getAbsSum([2, -1, 4, 8, 10]))
// console.log(getAbsSum([-3, -4, -10, -2, -3]))
// console.log(getAbsSum([2, 4, 6, 8, 10]))
// console.log(getAbsSum([-1]))

/*========||||||||||||||||================|||||||||||||================|||||||||||||||||||||||\=========== */

/*
sortNumsAscending([1, 2, 10, 50, 5]) ➞ [1, 2, 5, 10, 50]

sortNumsAscending([80, 29, 4, -95, -24, 85]) ➞ [-95, -24, 4, 29, 80, 85]

sortNumsAscending(null) ➞ []

sortNumsAscending([]) ➞ [] */

// function sortNumsAscending(arr){
// 	if(arr ===null)console.log("[]") 
// 	else if(arr === Array()) console.log('[]')
	
// 	else console.log(arr.sort((a,b)=> a-b))
// }
// sortNumsAscending([1, 2, 10, 50, 5])
// sortNumsAscending([80, 29, 4, -95, -24, 85])
// sortNumsAscending(null)
// sortNumsAscending([])

/*|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

// function sortNumsAscending(arr) {
// 	if (arr === null) return [];
// 	return arr.sort((a, b) => a - b);
// }
// console.log(sortNumsAscending([1, 2, 10, 50, 5]))
// console.log(sortNumsAscending([80, 29, 4, -95, -24, 85]))
// console.log(sortNumsAscending(null))
// console.log(sortNumsAscending([]))



// function sortNumsAscending(arr) {
// 	return (arr || []).sort((a,b) => a - b)
// }


// function sortNumsAscending(arr) {
// 	if (!arr) return []
// 	return arr.sort((a,b) => a - b);
// }  


// function sortNumsAscending(arr) {
// 	if (arr) {
// 	  return arr.sort(function(a, b) {
// 		return a - b;
// 	  })
// 	}
// 	return [];
//   }
/*======|||||||||||||||||||===============||||||||||||||||||||||||==================|||||||||||||||||||||========================= */

/*calculateDifference({ "baseball bat": 20 }, 5) ➞ 15

calculateDifference({ skate: 10, painting: 20 }, 19) ➞ 11

calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400) ➞ 1 */

// function calculateDifference(obj, num){
// 	let sum=0
// 	for(let item in obj){
// 		sum += obj[item]
// 	}
// 	return sum-num
	   		
	
	
	


// }
// console.log(calculateDifference({ "baseball bat": 20 }, 5))
// console.log(calculateDifference({ skate: 10, painting: 20 }, 19))
// console.log(calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400))




// function calculateDifference(obj, limit) {
// 	return (Object.values(obj)).reduce((a, b) => a + b) - limit
// }
// console.log(calculateDifference({ "baseball bat": 20 }, 5))
// console.log(calculateDifference({ skate: 10, painting: 20 }, 19))
// console.log(calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400))




// function calculateDifference(arr){
// 	let sum=0
// 	for(let obj in arr[0]){
// 		sum += arr[0][obj]
// 	}
// 	return sum-arr[1]
	   		
	
	
	


// }
// console.log(calculateDifference([{ "baseball bat": 20 }, 5]))
// console.log(calculateDifference([{ skate: 10, painting: 20 }, 19]))
// console.log(calculateDifference([{ skate: 200, painting: 200, shoes: 1 }, 400]))


// var arr = { a: 20, b:30 }
// for( let obj in arr){
// 	console.log(arr[obj])
// }

/*============================================================================================================================ */
/*findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2]

findLargestNums([[-34, -54, -74], [-32, -2, -65], [-54, 7, -43]]) ➞ [-34, -2, 7]

findLargestNums([[0.4321, 0.7634, 0.652], [1.324, 9.32, 2.5423, 6.4314], [9, 3, 6, 3]]) ➞ [0.7634, 9.32, 9]
Notes Watch out for negative integers (numbers). */

// function findLargestNums(arr){
// 	return arr.map((item) => Math.max(...item) )
// }
// console.log(findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]))
// console.log(findLargestNums([[-34, -54, -74], [-32, -2, -65], [-54, 7, -43]]))
// console.log(findLargestNums([[0.4321, 0.7634, 0.652], [1.324, 9.32, 2.5423, 6.4314], [9, 3, 6, 3]]))



// function findLargestNums(arr){
// 	return arr.map((item) => item.sort( (a,b) => a-b).pop() )
// }

// console.log(findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]))


// function findLargestNums(arr) {
// 	let largest = []
	
// 	for(let i = 0; i<arr.length; i++){
// 		const arrLarge = arr[i].sort((a,b) => b-a)
// 		largest.push(arrLarge[0])
// 	}
	
// 	return largest
// }


/*============================================================================================================================ */




