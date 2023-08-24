countDownEndOfYear();
countDownEndOfSeptember();
(function loop() {
    setTimeout(() => {
        countDownEndOfYear();
        countDownEndOfSeptember();

        loop();
    }, 1000);
})();

/**
 * Calculates the difference in days, hours, minutes and seconds between today and December 31st 2023
 */
function countDownEndOfYear() {
    let endOfYear = new Date(2023, 11, 31); //months start at zero...
    let today = new Date();

    let totalNumberSeconds = (endOfYear - today) / 1000;
    // converts the result from milliseconds to seconds

    if (totalNumberSeconds > 0) {
        let numberDays = Math.floor(totalNumberSeconds / (60 * 60 * 24));
        let numberHours = Math.floor((totalNumberSeconds - (numberDays * 60 * 60 * 24)) / (60 * 60));
        let numberMinutes = Math.floor((totalNumberSeconds - (numberDays * 60 * 60 * 24 + numberHours * 60 * 60)) / 60);
        let numberSeconds = Math.floor(totalNumberSeconds - (numberDays * 60 * 60 * 24 + numberHours * 60 * 60 + numberMinutes * 60));

        document.querySelector('#day-december').textContent = numberDays;
        document.querySelector('#hour-december').textContent = numberHours < 10 ? '0' + numberHours : numberHours;
        document.querySelector('#minute-december').textContent = numberMinutes < 10 ? '0' + numberMinutes : numberMinutes;
        document.querySelector('#second-december').textContent = numberSeconds < 10 ? '0' + numberSeconds : numberSeconds;
    } else {
        document.querySelector('.pyro').hidden = false;
    }
}

/**
 * Calculates the difference in days, hours, minutes and seconds between today and September 30th 2023
 */
function countDownEndOfSeptember() {
    let endOfSeptember = new Date(2023, 08, 30); //months start at zero...
    let today = new Date();

    let totalNumberSeconds = (endOfSeptember - today) / 1000;
    // converts the result from milliseconds to seconds

    if (totalNumberSeconds > 0) {
        let numberDays = Math.floor(totalNumberSeconds / (60 * 60 * 24));
        let numberHours = Math.floor((totalNumberSeconds - (numberDays * 60 * 60 * 24)) / (60 * 60));
        let numberMinutes = Math.floor((totalNumberSeconds - (numberDays * 60 * 60 * 24 + numberHours * 60 * 60)) / 60);
        let numberSeconds = Math.floor(totalNumberSeconds - (numberDays * 60 * 60 * 24 + numberHours * 60 * 60 + numberMinutes * 60));

        document.querySelector('#day-september').textContent = numberDays;
        document.querySelector('#hour-september').textContent = numberHours < 10 ? '0' + numberHours : numberHours;
        document.querySelector('#minute-september').textContent = numberMinutes < 10 ? '0' + numberMinutes : numberMinutes;
        document.querySelector('#second-september').textContent = numberSeconds < 10 ? '0' + numberSeconds : numberSeconds;
    }
}