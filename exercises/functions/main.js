// function add(a, b) {
//     return a + b;
// }
// add(2, 3);

// function largerNumber(a, b, c){
//         if (a > b) {
//             if (a > c) {
//                 console.log(a);
//             }
//         }
//             if (b > c) {
//                 if (b > a) {
//                     console.log(b);
//                 }
//             }
//                 if (c > b) {
//                     if (c > a) {
//                         console.log(c);
//                     }
//                 }
//             }
// largerNumber(10,  40, 20);

// function evenOdd(n){
//         if (n % 2 === 0){
//             console.log("even");
//         }else{
//             console.log("odd");
//         }
// }
// evenOdd(5);
function wordsWithFriends(word) {
        if (word.length < 20) {
            console.log(word + word);
        }else{
            console.log(word);
        }
}

wordsWithFriends("My name is Mario");
