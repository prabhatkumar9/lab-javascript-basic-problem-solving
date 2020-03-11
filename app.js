// Important Note - No Built-in functions to be used
// Progression 1: Names and Input
var Prograd_1 = prompt("Enter driver's name: ");
console.log(" The driver name is :" + Prograd_1);
document.write(`The driver name is : ${Prograd_1} <br>`);

// 1.1 Create a variable `ProGrad-1` with the driver's name.
// 1.2 Print `"The driver's name is XXXX"`.
var Prograd_2 = prompt("Enter navigator's name: ");
console.log(" The navigator name is :" + Prograd_2);
document.write(`The navigator name is : ${Prograd_2} <br>`);
// 1.3 Create a variable `ProGrad-2` with the navigator's name.
// 1.4 Print `"The navigator's name is YYYY"`.

// Progression 2: Control Statements - 1
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.
var len1 = Prograd_1.length;
var len2 = Prograd_2.length;
if (len1 > len2) {
    console.log(`The driver has the longest name, it has ${len1} characters.`);
    document.write(`The driver has the longest name, it has ${len1} characters.<br>`);
} else if (len1 < len2) {
    console.log(`The navigator has the longest name, it has ${len2} characters.`);
    document.write(`The navigator has the longest name, it has ${len2} characters.<br>`);
} else {
    console.log(`Wow, you both have equally long names, ${len1} characters.<br>`);
}

// 2.2. Check if the string contains vowels or not.
// - If it contains vowels, print the number of name, and also print the vowel letters along with the vowel characters. or
// - print no vowels
var a = 0,
    e = 0,
    i = 0,
    o = 0,
    u = 0;

for (let i = 0; i < len1; i++) {
    if (Prograd_1[i] == 'a' || Prograd_1 == 'A') {
        a++;
    }
    if (Prograd_1[i] == 'e' || Prograd_1 == 'E') {
        e++;
    }
    if (Prograd_1[i] == 'i' || Prograd_1 == 'I') {
        i++;
    }
    if (Prograd_1[i] == 'o' || Prograd_1 == 'O') {
        o++;
    }
    if (Prograd_1[i] == 'u' || Prograd_1 == 'U') {
        u++;
    }
}
if (a, e, i, o, u > 0) {
    console.log(`a : ${a}`);
    document.write(`a : ${a}<br>`);
    console.log(`e : ${e}`);
    document.write(`e : ${e}<br>`);
    console.log(`i : ${i}`);
    document.write(`i : ${i}<br>`);
    console.log(`o : ${o}`);
    document.write(`o : ${o}<br>`);
    console.log(`u : ${u}`);
    document.write(`u : ${u}<br>`);
}
else{
    console.log("No vowels")
    document.write(`No vowels. <br>`);
}

// 2.3. Check if the string contains uppercase and lowercase characters Xx
// - Print the number of upper case characters
// - Print the number of lower case characters
var c = 0;
var d = 0;
for (let i = 0; i < len1; i++) {
    if (Prograd_1.charCodeAt(i) < 97) {
        c = c + 1;
    } else {
        d = d + 1;
    }
}
console.log("UpperCase : " + c);
console.log("LowerCase : " + d);
document.write("UpperCase : " + c + ". <br>");
document.write("LowerCase : " + d + ". <br>");


// Progression 3: Control Statements - 2
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "ProGrad"
var str1 = "";
for (let i = 0; i < len1; i++) {
    str1 = str1 + " " + Prograd_1.charAt(i);
}
console.log(str1.toUpperCase());
document.write(`Driver's name in capital: ${str1.toUpperCase()} <br>`);

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "darGorP"
var str2 = "";
for (let j = len2; j >= 0; j--) {
    str2 = str2 + Prograd_2.charAt(j);
}
console.log(str2);
document.write(`Navigator's name in reverse order: ${str2}<br>`);

// 3.3 Merge both the characters such that driver is followed by Navigator like "ProGrad FACEPrep"
// - Now bring the FACEPrep to the start and send ProGrad to the back like "FACEPrep ProGrad"
console.log(`${str1} ${Prograd_2}`);
document.write(`${str1} ${Prograd_2}<br><br>`);

console.log(`${Prograd_2} ${str1}`);
document.write(`${Prograd_2} ${str1}<br>`);

// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?
if (Prograd_1.charCodeAt(0) < Prograd_2.charCodeAt(0)) {
    console.log("The driver's name goes first.");
    document.write("The driver's name goes first.<br>");
} else if (Prograd_1.charCodeAt(0) > Prograd_2.charCodeAt(0)) {
    console.log("Yo, the navigator goes first definitely.");
    document.write("Yo, the navigator goes first definitely.<br>");
} else {
    console.log("What?! You both have the same name?");
    document.write("What?! You both have the same name?<br>");
}
// document.write(Prograd_1.charCodeAt(0));
// document.write(" <br>");
// document.write(Prograd_2.charCodeAt(0));
// document.write(" <br>");


// Bonus Time!
// Bonus 1:
// Go to lorem ipsum generator and:
// Generate 3 paragraphs. Store the text in a variable type of string.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.
var par = " et Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit voluptates corrupti magnam velit eveniet explicabo rerum et. Sequi placeat a eos consequuntur porro fuga, quasi ducimus temporibus eveniet laboriosam incidunt reprehenderit. Maiores architecto repellendus illum maxime voluptas rerum, hic aperiam illo dolore, facilis sit placeat suscipit incidunt quasi pariatur qui nemo dicta reiciendis eos fugit? Tempore et dolore sit sed quam molestiae!Dignissimos, corrupti odio voluptatem in eum rerum atque delectus sunt nesciunt officiis alias quam minus quisquam repellat esse, quo nihil possimus laboriosam eveniet laudantium tempore fugit aliquid excepturi impedit! Repellat.";

var arr = par.split(" ");
var len = par.split(" ").length;
let count = 0;
for (var q = 0; q < len; q++) {
    if (arr[q] == "et" || arr[q] == "et.") {
        count++;
    }
}
document.write("Total number of words in para : " + len);
console.log("Total number of words in para : " + len);
document.write(" <br>");
document.write("Number of time 'et' word appears : " + count + "<br>");
console.log("Number of time 'et' word appears : " + count);
document.write(" <br>");


// Bonus 2:
// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".

var phraseToCheck = "amor, roma";
objj = phraseToCheck.replace(/,/g, "");
var obj = objj.split(" ");
var or = obj.join("");
var newstr = "";

//console.log(or.length);
//document.write(or.length);
let len_of_str = or.length
for (let r = len_of_str - 1; r >= 0; r--) {
    newstr = newstr + or.charAt(r);
}

if (or == newstr) {
    console.log("Palindrome.");
    document.write(or + " is a Palindrome.<br>");

} else {
    console.log("Not a Palindrome."); 
    document.write(or + " is not a Palindrome.<br>");
}

// Hint: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as join(), reverse(), etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using for loop, if-else statements with some break and continue... Just sayin' 