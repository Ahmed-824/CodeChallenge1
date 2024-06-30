function calculateGrade(mark) {
    if (mark > 79) {
        return 'A';
    } else if (mark >= 60) {
        return 'B';
    } else if (mark >= 50) {
        return 'C';
    } else if (mark >= 40) {
        return 'D';
    } else {
        return 'E';
    }
}

function main() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question("Enter the student's mark (between 0 and 100): ", (inputMark) => {
        const mark = parseFloat(inputMark);
        if (!isNaN(mark) && mark >= 0 && mark <= 100) {
            const grade = calculateGrade(mark);
            console.log(`The grade for mark ${mark} is ${grade}.`);
        } else {
            console.log("Invalid input: Mark should be a numeric value between 0 and 100.");
        }
        readline.close();
    });
}

main();
