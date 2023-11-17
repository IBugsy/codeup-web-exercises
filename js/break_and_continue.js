// console.log("Checking my extension");

const promptUser1To50 = () => {
    let userInput;
    do {
        userInput = prompt('Enter and odd number between 1 and 50');
        if(userInput % 2 === 1 && userInput >= 1 && userInput < 50) {
            break;
        }
    } while(true)
    return userInput;
}
promptUser1To50();

function print1To50(){
    const userNumber = promptUser1To50();
    for (let i = 1; i < 50; i++) {
        if(i % 2 === 0){
            continue;
        } else {
            if(i == userNumber){
                console.log(`Yikes! Skipping number: ${i}`);
            }else {
                console.log(`Here is an odd number: ${i}`);
            }
        }
    }
}
print1To50();
