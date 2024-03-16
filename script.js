let arr = [1, 2, 3, 4, 5];
for (let i = 0; i <= arr.length; i++) {
    console.log(arr[i]);
}

let arr2 = [1, 2, 3, 4, 5, 6 , 7, 8, 9, 10];
sum = 0;
for (let i = 0; i <= arr2.length; i++) {
    sum += arr2[i];
    console.log(sum);
}

let maxNum = Math.max(...arr2);
console.log(maxNum);