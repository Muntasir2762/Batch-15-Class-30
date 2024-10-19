

// console.log("Hello world");

// for (let i=1; i<=10; i++){      //1, 2, 3, 4........9, 10, 11
//     console.log("Hello Wordl");
//     console.log(i);
// }

// let marks = [23, 67, 89, 99, 33];

// console.log(marks[0]);
// console.log(marks[1]);
// console.log(marks[2]);
// console.log(marks[3]);
// console.log(marks[4]);

// for (let i=0; i<=4; i++){ // 0, 1, 2, 3, 4, 5
//     console.log(marks[i]);
// }


let numbers = [34, 56, 67, 90, 45, 74, 90, 123, 76, 100];

for(let i=0; i<=9; i++){ //0 , 1, 2, 3, 4..............9, 10
    if(numbers[i]%2 == 0){
        console.log("Even Number=" + numbers[i]);  //Even Number=36
    }
    else{
        console.log("Odd Number=" + numbers[i]);
    }
}