export function prime(n: number) {
    process.stdout.write(n + ' -> ');
    var prime;
    var j = 0;
    for (var i = 2; i <= n; i++) {
        prime = true;
        for (j = 2; j < i; j++) {
            if (i%j === 0) {
                prime = false;
                break;
            }
        }
        if (prime) {
            process.stdout.write(j + ' ');
        }
    }
}