// 905. Sort Array By Parity
// var bubbleSort = (arr) => {
//     for (var i = 0; i < arr.length - 1; i++) {
//         for (var j = 0; j < arr.length - 1 - i; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 // Swap the two elements
//                 var temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }
//     return arr;
// }
// var sortArrayByParity = arr => {
//     var newArr1 = [];
//     var newArr2 = [];
//     newArr1.push(...bubbleSort(arr.filter(x => x % 2 == 0)));
//     newArr2.push(...bubbleSort(arr.filter(x => x % 2 != 0)));
//     return newArr1.concat(newArr2);
// }
var sortArrayByParity = arr => {
    var i = 0;
    var j = 0;
    while (j < arr.length) {
        if (j % 2 == 0)
            var temp = a[i];
        a[i] = a[j];
        a[j] = temp;
        i++;
    }
    j++;
}


console.log(sortArrayByParity([3, 1, 2, 4, 2, 0]));