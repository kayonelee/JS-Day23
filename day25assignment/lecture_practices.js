// let addNum = (x, y) => x + y
// return addNum (1, 2)
// -------------------------------

// // let result = function () {
// //     let x=1
// //     return x
// // }
// // let y = result
// // console.log (y())

// // --------------below is example closure
// function counter () {
//     var counter = 0;

//     function IncreaseCounter () {
//         return counter += 1;
//     };
//     return IncreaseCounter;
// }
// Var counter = counter();
// alert((counter));
// alert((counter));
// alert((counter));
// alert((counter));

// // recursive-put a conditionso it dont run forever and crash cpu
// // function count =10;
// function countDown(count){
//     if(count <0){
//         return
//     }else{
//         console.log(count)
//         count--
//         countDown(count)
//     }
// }
// countDown(10)
// // -------------------------------

// let tree = {
//     name: "John",
//     children: [
//         {
//             name: "Sam",
//             children: []
//         },
//             name: "Saly",
//             children: [
//                 {
//                     name: "Steve",
//                     children: []
//                 }
//             ]
//     ]
// }

// put above into a recursive function:

function recurse(familyTree){
    if(familyTree.children.length ==0){
        return
    } else {
        console.log(familyTree.name)
        familyTree = familyTree.children[0]
        recurse (familyTree))
    }
}