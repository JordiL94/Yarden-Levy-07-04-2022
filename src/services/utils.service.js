export const utils = {
    getRandomInt,
    getRandomId,
    getDate,
};

function getRandomId() {
    const pt1 = Date.now().toString(16);
    const pt2 = getRandomInt(1000, 9999).toString(16);
    const pt3 = getRandomInt(1000, 9999).toString(16);
    return `${pt3}-${pt1}-${pt2}`.toUpperCase();
}

function getRandomInt(num1, num2) {
    const max = (num1 >= num2) ? num1 + 1 : num2 + 1;
    const min = (num1 <= num2) ? num1 : num2;
    return (Math.floor(Math.random() * (max - min)) + min);
}

function getDate(timestamp) {
    const date = new Date(timestamp);
    const formattedDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
    return formattedDate;
}
