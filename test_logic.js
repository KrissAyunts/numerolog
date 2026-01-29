function sumDigits(num) {
    return String(num).split('').reduce((acc, digit) => acc + parseInt(digit, 10), 0);
}

function calculateNumerology(dateStr) {
    // Remove dots
    const cleanDate = dateStr.replace(/\./g, '');
    const dayParts = dateStr.split('.');
    const day = parseInt(dayParts[0], 10);

    // 1. First Number: Sum of all digits in date
    const num1 = sumDigits(cleanDate);

    // 2. Second Number: Sum of digits of First Number
    const num2 = sumDigits(num1);

    // 3. Third Number: First Number - (2 * First Digit of Birth Day)
    // If day is '5', first digit is 5. If '12', first digit is 1.
    const dayString = String(day);
    const firstDigit = parseInt(dayString[0], 10);
    const num3 = num1 - (2 * firstDigit);

    // 4. Fourth Number: Sum of digits of Third Number
    const num4 = sumDigits(Math.abs(num3));

    // Fate Number (Life Path) - usually reduced num2
    let fate = num2;
    while (fate > 9 && fate !== 11 && fate !== 22 && fate !== 33) {
        fate = sumDigits(fate);
    }

    return {
        input: dateStr,
        additionalNumbers: [num1, num2, num3, num4],
        fateNumber: fate
    };
}

// Tests
console.log('Testing 12.05.1990:');
console.log(calculateNumerology('12.05.1990'));

console.log('Testing 01.01.2000:');
console.log(calculateNumerology('01.01.2000'));
