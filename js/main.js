const clock = document.querySelector('body > header > h1');
const date = document.querySelector('body > header > h2');

setInterval(() => {
    const currentDate = new Date();

    let hour = currentDate.getHours();
    if (hour < 10) {
        hour = `0${hour}`;
    }

    let minute = currentDate.getMinutes();
    if (minute < 10) {
        minute = `0${minute}`;
    }

    let second = currentDate.getSeconds();
    if (second < 10) {
        second = `0${second}`;
    }

    const todayDate = currentDate.toDateString();
    let points = ':';
    if (second % 2 === 0) {
        points = ':';
    } else {
        points = ' ';
    }

    const body = document.querySelector('body');

    if (hour >= 6 && hour < 13) {
        document.body.background = `/img/morning.jpg`;
    } else if (hour >= 13 && hour < 21) {
        document.body.background = `/img/afternoon.jpg`;
    } else if (hour < 6 || hour >= 21) {
        document.body.background = `img/night.jpg`;
    }

    clock.innerHTML = `${hour}${points}${minute}${points}${second}`;
    date.innerHTML = `${todayDate}`;
}, 1000);
