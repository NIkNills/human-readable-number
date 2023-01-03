module.exports = function toReadable(number) {
    const num = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];

    const roundNum = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    if (number === 0) {
        return "zero";
    } else if (number < 20) {
        return num[number];
    } else if (number < 100) {
        let firstNum = number.toString().slice(0, 1);
        let secondNum = number.toString().slice(1);

        return `${roundNum[firstNum]} ${num[secondNum]}`.trim();
    } else {
        let firstNum = number.toString().slice(0, 1);

        if (Number(number.toString().slice(1)) < 20) {
            let secondNum =
                number.toString().slice(1, 2) === "0"
                    ? number.toString().slice(2)
                    : number.toString().slice(1);

            return `${num[firstNum]} hundred ${num[secondNum]}`.trim();
        } else {
            let secondNum = number.toString().slice(1, 2);
            let thirdNum = number.toString().slice(2);

            return `${num[firstNum]} hundred ${roundNum[secondNum]} ${num[thirdNum]}`.trim();
        }
    }
};
