const x = parseInt(prompt("Please enter a number"))

let sum = 0

for (let i = 0; i <= x; i++) {
    if(i %2 != 0) {
        sum += i
    }

}

console.log(sum)