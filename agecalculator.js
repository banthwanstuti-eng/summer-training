let dob = prompt("Enter your DOB (YYYY-MM-DD):");

let birthDate = new Date(dob);
let today = new Date();

let age = today.getFullYear() - birthDate.getFullYear();

let monthDiff = today.getMonth() - birthDate.getMonth();

if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
) {
    age--;
}

console.log("Your age is " + age + " years.");
alert("Your age is " + age + " years.");