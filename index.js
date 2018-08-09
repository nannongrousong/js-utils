function debounce(func, delay) {
    let timeID = undefined;
    return function () {
        if (timeID) {
            clearTimeout(timeID);
        }

        let context = this;
        let args = arguments;

        timeID = setTimeout(func.bind(context, args), delay);
    }
}

function throttle(func, delay) {
    let startTime = undefined;
    if (!startTime) {
        startTime = new Date().getTime();
    }

    return function () {
        let presentTime = new Date().getTime();
        if (presentTime - startTime > delay) {
            func.apply(this, arguments);
            startTime = new Date().getTime();
        }
    }
}

const eventLog = (e) => { console.log('e', e); console.log(`hihi_____${Math.random() * 100}`) };

window.onload = () => {
    const body = document.querySelector('body');
    body.addEventListener('mousemove', debounce(eventLog, 1000));
    //body.addEventListener('mousemove', throttle(eventLog, 1000));
}

