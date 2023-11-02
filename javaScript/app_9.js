let number = +prompt('enter the number')
for (i = 1; i <= number; i++) {
    if (number % i === 0)
        console.log(i)
}