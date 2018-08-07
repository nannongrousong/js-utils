const debounce = (func, delay) => {
    let timeID = undefined;
    return () => {
        if (timeID) {
            clearTimeout(timeID);
        }

        timeID = setTimeout(func, delay);
    }
}

const throttle = (func, delay) => {
    let startTime = undefined;
    if (!startTime) {
        startTime = new Date().getTime();
    }
    return () => {
        let presentTime = new Date().getTime();
        if (presentTime - startTime > delay) {
            func();
            startTime = new Date().getTime();
        }
    }
}

const eventLog = () => { console.log(`hihi_____${Math.random() * 100}`) };


window.onload = () => {
    const body = document.querySelector('body');
    //body.addEventListener('mousemove', debounce(eventLog, 1000));
    body.addEventListener('mousemove', throttle(eventLog, 1000));
}

