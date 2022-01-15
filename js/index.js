// Iteration 1: Names and Input
const hacker1 = 'max'
console.log (`the driver´s name is ${hacker1}`);

const hacker2 = 'lewis'
console.log (`the navigator´s name is ${hacker2}`);


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log (`driver´s name is longer than navigator, it has ${hacker1.length} characters`)
} else if (hacker2.length > hacker1.length) {
    console.log (`navigator´s name is longer than navigator, it has ${hacker2.length} characters`)
} else {
    console.log (`both has the same number of characters`)
}

// Iteration 3: Loops
// 3.1
    // variável auxiliar 
let transformedName = ''

for (let i = 0; i < hacker1.length; i++) {
    transformedName += `${hacker1[i].toUpperCase} `
    if (i === hacker1.length - 1) {
        transformedName += hacker1[i].toUpperCase()
    } else {
        transformedName += `${hacker1[i].toUpperCase()}`
    }
} 

//3.2
let reversedString = ''

for (let i = hacker1.length -1; i>=0; i--) {
reversedString = reversedString + hacker1[i];
}

console.log(reversedString)

//3.3
if (hacker1.toLowerCase().localeCompare(hacker2.toLowerCase()) === 1) {
    console.log("navigator goes first")
} else if (hacker1.toLowerCase().localeCompare(hacker2.toLowerCase()) === -1) {
    console.log ("driver goes first")
} else {
    console.log('both have same name')
}

// bonus 1
const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis augue arcu, sagittis elementum imperdiet at, elementum feugiat odio. Sed tempus dui ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec consectetur mi, non fringilla metus. Donec bibendum elit vel quam malesuada sodales. Maecenas a aliquet quam. Quisque porta placerat augue nec aliquet. Etiam vitae fringilla felis, vel blandit mauris. Ut lorem nunc, laoreet sit amet congue non, sollicitudin sit amet erat. Fusce ac tincidunt libero. Curabitur in suscipit erat, ut gravida nunc. Morbi ac fringilla elit, placerat elementum velit. Integer sed dui suscipit, accumsan enim id, convallis neque. Duis suscipit odio sit amet feugiat molestie. Integer finibus nunc libero, vitae varius neque vestibulum a. Sed magna risus, tristique a tristique sed, sagittis quis turpis. Phasellus ut lacinia ante. Nam ornare rhoncus semper. Suspendisse viverra interdum pharetra. Vivamus purus quam, pretium in felis in, congue finibus nunc. Donec consectetur sem eu nulla semper semper. Etiam arcu tortor, posuere a tincidunt vitae, molestie in metus. Aliquam luctus felis ut diam venenatis, sit amet tempor dui imperdiet. Duis quis orci vitae erat bibendum dictum. Sed in efficitur est. Sed sapien lectus, egestas nec eleifend vitae, sollicitudin sit amet nunc. Maecenas commodo enim nec ipsum molestie, sit amet tristique orci hendrerit. Phasellus bibendum augue varius sapien facilisis bibendum. Quisque ut dolor augue. Quisque nec lectus vel purus tempus interdum. Curabitur ultrices bibendum turpis, nec commodo elit pellentesque sed. Nulla ornare risus lacus, nec accumsan ipsum pellentesque non. Praesent vitae quam rhoncus, bibendum ligula ut, placerat felis. Aenean sapien quam, ultrices sit amet erat et, blandit feugiat libero. Suspendisse semper odio vel pharetra commodo. Quisque scelerisque dictum orci, non pretium urna malesuada in. Fusce tempus mollis libero. Cras risus diam, ultrices eget augue at, eleifend pharetra lacus.'

console.log(loremIpsum.split(' ').length)

const loremArray = loremIpsum.split(' ')

let etCounter = 0;

for (let i = 0; i < loremArray.length; i++) {
    if (loremArray[i].replace(/[.,; ]/g, '').toLowerCase() === 'et') {
        etCounter++
    }
}

console.log(etCounter);

// bonus 2

const phrase1 = "qualquer coisa para testar se é palindromo"

const semPontuar = phrase1.toLowerCase().replace(/[^A-Za-z]/g, '');

let verificaSePalindromo = true;

for (let i = 0; i < semPontuar.length / 2; i++) {
    const finalI = semPontuar.length - 1 - i
    if (semPontuar[i] !== semPontuar[finalI]) {
        verificaSePalindromo = false;
        continue;
    }
}

console.log('É um palindromo: ', verificaSePalindromo);
