export function fizzBuzz() {
    for (var i = 1; i <= 100; i++) {
        switch (0) {
            case i%3: 
                if (i%5 === 0) {
                    process.stdout.write('FizzBuzz ');
                } else {
                    process.stdout.write('Fizz '); 
                }
                break;
            case i%5: process.stdout.write('Buzz '); break;
            default: process.stdout.write(i + ' '); break;
        }
    }
}

export function leapYear(year: number) {
    var leapYear = false;
    if (year%400 === 0) {
        leapYear = true;
    } else if (year%100 !== 0 && year%4 === 0) {
        leapYear = true;
    }

    console.log(year + ' -> ' + leapYear)
}

export function n1(n: number) {
    console.log('\nn=' + n);
    var a = '';
    for (var i = 1; i <= n; i++) {
        a = a.concat('*');
        console.log(a);
    }
}

export function n2(n: number) {
    console.log('\nn=' + n);
    var a = '';
    for (var i = 1; i <= n; i++) {
        a = a.concat('*');
        console.log(a.padStart(n));
    }
}

export function n3(n: number) {
    console.log('\nn=' + n);
    const a = '*';
    for (var i = 0; i < n; i++) {
        if ((i + (i-1)) > 0) {
            console.log(a.padStart(n-i).concat(' '.repeat(i + (i-1))).concat('*'));
        } else {
            console.log(a.padStart(n));
        }
    }
}

export function n4(n: number) {
    console.log('\nn=' + n);
    const string = ''.concat(' '.repeat(n));
    for (var i = 0; i < n; i++) {
        var list = string.split('');
        // if a star is placed on the same position as another it will simply replace it
        list[i] = '*';
        list[n-i-1] = '*';

        // more efficient if list is big? (not replacing star if on same position)
        // if (i !== n-i) {
        //    list[i] = '*';
        //    list[n-i-1] = '*';
        // } else {
        //     list[i] = '*';
        // }
        
        console.log(list.join(''));
    }
}

export function n5(n: number) {
    console.log('\nn=' + n);
    // amount of * characters is always i + previous value of i (i - 1), or always +2
    var i;
    var k = 0;
    const half = Math.ceil(n/2);
    for (i = 1; i <= n; i+=2) {
        console.log('*'.repeat(i).padStart(half+k));
        k++;
    }
    
    for (var j = i; j > 0; j-=2) {
        if (!(j >= n)) {
            console.log('*'.repeat(j).padStart(half+k));
            k--;
        } else {
            k--;
        }
    }
}

export function n6(n: number) {
    console.log('\nn=' + n);
    for (var i = 0; i < n; i++) {
        console.log('A'.repeat(Math.max(0, n-1-i)) + '+' + 'E'.repeat(Math.max(0, i + (i-1))) + '+'.repeat(Math.min(1, i)) + 'B'.repeat(Math.max(0, n-1-i)));
    }
    for (var i = n - 2; i >= 0; i--) {
        console.log('C'.repeat(Math.max(0, n-1-i)) + '+' + 'E'.repeat(Math.max(0, i + (i-1))) + '+'.repeat(Math.min(1, i)) + 'D'.repeat(Math.max(0, n-1-i)));
    }
}
