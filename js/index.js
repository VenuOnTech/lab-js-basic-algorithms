
let hacker1 = "Venu";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Sonu";
console.log(`The navigator's name is ${hacker2}`);

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

let driverNameInCaps = "";
for (let i = 0; i < hacker1.length; i++) {
  driverNameInCaps += hacker1[i].toUpperCase() + " ";
}
console.log(driverNameInCaps.trim());

let navigatorNameReversed = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  navigatorNameReversed += hacker2[i];
}
console.log(navigatorNameReversed);

if (hacker1 < hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker1 > hacker2) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}
