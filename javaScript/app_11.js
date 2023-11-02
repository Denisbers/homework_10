let sum = 0
function printDivisors(n) {
    for (i = 1; i <= n; i++)
        if (n % i == 0) {
            if (i % 2 === 0)
                sum = sum + i;
        } console.log(sum)
}


printDivisors(1024);