console.log("Hello from external JavaScript")

alert('Welcome to my Website!')

let userInput = prompt('What is your favorite color?');
// console.log(`Great, my favorite color is also: ${userInput}`);

alert(`Great, ${userInput} is my favorite color too!`);

// Movie rental questions will go below

let daysYouRentedLittleMermaid = prompt('How many days did you rent The Little Mermaid?');
let daysYouRentedBrotherBear = prompt('How many days did you rent Brother Bear?');
let daysYouRentedHercules = prompt('How many days did you rent Hercules?');
//turning prompt strings in numbers
// daysYouRentedLittleMermaid = parseInt(daysYouRentedLittleMermaid);
// daysYouRentedBrotherBear = parseInt(daysYouRentedBrotherBear);
// daysYouRentedHercules = parseInt(daysYouRentedHercules);

let movieRentalPrice = 3;

let total = (daysYouRentedLittleMermaid * movieRentalPrice) + (daysYouRentedBrotherBear * movieRentalPrice) + (daysYouRentedHercules * movieRentalPrice)
alert(`You spent ${total}`);

// Payment questions will go below

let hoursWorkedatAmazon = prompt('How many hours did you work at Amazon?');
let hoursWorkedatFacebook = prompt('How many hours did you work at Facebook?');
let hoursWorkedatGoogle = prompt('How many hours did you work at Google?');
//turning prompt strings in numbers
hoursWorkedatAmazon = parseInt(hoursWorkedatAmazon);
hoursWorkedatFacebook = parseInt(hoursWorkedatFacebook);
hoursWorkedatGoogle = parseInt(hoursWorkedatGoogle);

let amazonHourlyRate = 380;
let facebookHourlyRate = 350;
let googleHourlyRate = 400;

let totalHours = (hoursWorkedatAmazon * amazonHourlyRate) + (hoursWorkedatFacebook * facebookHourlyRate) + (hoursWorkedatGoogle * googleHourlyRate)
alert(`You earned ${totalHours}`);