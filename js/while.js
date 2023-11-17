// // console.log("Checking my extension");
//
// function powersOfTwo(){
//     let number = 2;
//     while(number < 66000){
//         console.log(number);
//         number *= 2;
//     }
// }
//
// powersOfTwo()

let allCones = Math.floor(Math.random() * 51) + 50;

do {
    let customerCones = Math.floor(Math.random() * 5) + 1;

    if (customerCones <= allCones) {
        console.log(`${customerCones} cones sold...`);
        allCones -= customerCones;
    } else {
        console.log(`Cannot sell you ${customerCones} cones. I only have ${allCones} ...`);
    }

} while (allCones > 0);

console.log("Yay! I sold them all!");