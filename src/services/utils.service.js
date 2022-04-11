export const utils = {
    getRandomInt,
    getRandomId,
    getDate,
    getDay
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

// Both time functions were adjusted to handle epoch date, as per data recieved from AccuWeather API
function getDate(timestamp) {
    const date = new Date(timestamp * 1000);
    const formattedDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
    return formattedDate;
}

function getDay(timestamp) {
    const date = new Date(timestamp * 1000);
    const options = { weekday: 'long' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
}
