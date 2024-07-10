// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 
// 1
// 2
// +
// 2
// 2
// +
// 2
// 2
// =
// 9
// 1 
// 2
//  +2 
// 2
//  +2 
// 2
//  =9.

// so for this one we want to square the numbers that are provieded
// and return the total of them added togther
// I feel a for loop would work here
// we will need a empty string to save the total in as well
// and we will have that equal the numbers squared added togther
// to square the numbers we will use the ** operator that raises the current number to the power of two, squaring it
function squareSum(numbers){
    let total = 0;
    for(let i = 0; i < numbers.length; i++){
        total += numbers[i] ** 2;
    }
    return total
}