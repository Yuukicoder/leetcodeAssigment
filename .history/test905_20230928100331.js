// 905. Sort Array By Parity
// ==================================== method 1 < create 2 array ( odd, even ) =================================================
// var bubbleSort = (arr) => {
//     for (var i = 0; i < arr.length - 1; i++) {
//         for (var j = 0; j < arr.length - 1 - i; j++) {
//             if (arr[j] > arr[j + 1]) {
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
        if (arr[j] % 2 == 0) {
            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++;
        }
        j++;
    }
    return arr;
}


console.log(sortArrayByParity([3, 1, 2, 4, 2, 0]));