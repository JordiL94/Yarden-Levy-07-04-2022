export const utils = {
    getRandomInt,
    getRandomId,
    getDate,
    getAvgValues
};

function getRandomId() {
    const pt1 = Date.now().toString(16);
    const pt2 = getRandomInt(1000, 9999).toString(16);
    const pt3 = getRandomInt(1000, 9999).toString(16);
    return `${pt3}-${pt1}-${pt2}`.toUpperCase();
}

function getRandomInt(num1, num2) {
    var max = (num1 >= num2) ? num1 + 1 : num2 + 1;
    var min = (num1 <= num2) ? num1 : num2;
    return (Math.floor(Math.random() * (max - min)) + min);
}

function getDate(timestamp) {
    const date = new Date(timestamp);
    const formattedDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
    return formattedDate;
}

function getAvgValues(arr) {
    arr.splice(150, 1);
    let arrLength = arr.length / 5;
    let newArr = [];
    let idx = 0;
    for (let j = 0; j < 5; j++) {
        let avg = 0;
        for (let i = idx; i < arrLength + idx; i++) {
            avg += arr[i].y;
        }
        console.log({ avg });
        avg = avg / arrLength;
        newArr.push(avg);
        idx += 30;
    }
    console.log({ newArr });
    return newArr;
}
