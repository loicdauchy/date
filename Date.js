// DATE METHODS LIBRARY
// AUTHOR: Loïc Dauchy

/**
 * @desc Function to know if two dates without hours are equal or not.
 * @link https://www.portfolio-loic-dauchy.com 
 * @param {*} date1 - First date to compare.
 * @param {*} date2 - Second date to compare.
 * @returns True if equal else false.
 */
function dateWithoutHoursIsEqual(date1, date2) {

    var firstDate = new Date(date1);
    var firstDateToCompare = firstDate.getDate() + '-' + firstDate.getMonth() + '-' + firstDate.getFullYear();

    var secondDate = new Date(date2);
    var secondDateToCompare = secondDate.getDate() + '-' + secondDate.getMonth() + '-' + secondDate.getFullYear();

    if (firstDateToCompare === secondDateToCompare) {
        return true;
    } else {
        return false;
    }
}

/**
 * 
 * @desc Function to know if two dates with hours are equal or not.
 * @link https://www.portfolio-loic-dauchy.com 
 * @param {*} date1 - First date to compare.
 * @param {*} date2 - Second date to compare.
 * @returns True if equal else false.
 */
function dateWithHoursIsEqual(date1, date2) {

    var firstDate = new Date(date1);
    var firstDateToCompare = firstDate.getDate() + '-' + firstDate.getMonth() + '-' + firstDate.getFullYear() + ' ' + firstDate.getHours() + ':' + firstDate.getMinutes();

    var secondDate = new Date(date2);
    var secondDateToCompare = secondDate.getDate() + '-' + secondDate.getMonth() + '-' + secondDate.getFullYear() + ' ' + secondDate.getHours() + ':' + secondDate.getMinutes();

    if (firstDateToCompare === secondDateToCompare) {
        return true;
    } else {
        return false;
    }
}

// COMPARE IF DATE IS SUP
// Return true if date1 is superior to date2 else false
// Return type: boolean
/**
 * 
 * @desc Function to know if the first date is sup or not.
 * @link https://www.portfolio-loic-dauchy.com 
 * @param {*} date1 - First date to compare.
 * @param {*} date2 - Second date.
 * @returns True if first date is sup else false.
 */
function dateIsSup(date1, date2) {

    var firstDate = new Date(date1);
    var secondDate = new Date(date2);

    if (firstDate > secondDate) {
        return true;
    } else {
        return false;
    }
}

/**
 * 
 * @desc Function to know if two hours is equal or not.
 * @note The hours must be in the format "08:30"
 * @link https://www.portfolio-loic-dauchy.com 
 * @param {*} hour1 - First hour to compare.
 * @param {*} hour2 - Second hour to compare.
 * @returns True if equal else false.
 */
function hourIsEqual(hour1, hour2) {

    var firstDate = parseInt(hour1.replace(':', ''));

    var secondDate = parseInt(hour2.replace(':', ''));

    if (firstDate === secondDate) {
        return true;
    } else {
        return false;
    }
}


/**
 * 
 * @desc Function to know if an hour is between two hours or not.
 * @note The hours must be in the format "08:30"
 * @link https://www.portfolio-loic-dauchy.com 
 * @param {*} dateToCompare - The first date parameters must be the date who is supposed to be in the time slot
 * @param {*} start - Time slot start.
 * @param {*} end - Time slot end.
 * @returns True if the first parameter is between else false.
 */
function hourIsBetween(dateToCompare, start, end) {

    var date = parseInt(dateToCompare.replace(':', ''));
    var firstDate = parseInt(start.replace(':', ''));
    var secondDate = parseInt(end.replace(':', ''));

    if (date >= firstDate && date < secondDate) {
        return true;
    } else {
        return false;
    }
}


/**
 * 
 * @desc Function to know if the first hour parameter is sup or not.
 * @note The hours must be in the format "08:30".
 * @link https://www.portfolio-loic-dauchy.com 
 * @param {*} hour1 - First hour to compare.
 * @param {*} hour2 - Second hour.
 * @returns True if sup else false.
 */
function hourIsSup(hour1, hour2) {

    var firstDate = parseInt(hour1.replace(':', ''));
    var secondDate = parseInt(hour2.replace(':', ''));

    if (firstDate > secondDate) {
        return true;
    } else {
        return false;
    }

}

/**
 * @desc Function for format a date to french format.
 * @link https://www.portfolio-loic-dauchy.com 
 * @param {*} date - Date to format.
 * @returns ex: Mardi 07 Juillet 2021
 */
function displayFrenchFullDate(date) {
    var newDate = new Date(date);

    var dayWeek = newDate.getDay();

    var dayString;

    if (dayWeek === 0) {
        dayString = "Dimanche";
    } else if (dayWeek === 1) {
        dayString = "Lundi";
    } else if (dayWeek === 2) {
        dayString = "Mardi";
    } else if (dayWeek === 3) {
        dayString = "Mercredi";
    } else if (dayWeek === 4) {
        dayString = "Jeudi";
    } else if (dayWeek === 5) {
        dayString = "Vendredi";
    } else if (dayWeek === 6) {
        dayString = "Samedi";
    }

    var month = newDate.getMonth();

    var monthString;

    if (month === 0) {
        monthString = "Janvier";
    } else if (month === 1) {
        monthString = "Février";
    } else if (month === 2) {
        monthString = "Mars";
    } else if (month === 3) {
        monthString = "Avril";
    } else if (month === 4) {
        monthString = "Mai";
    } else if (month === 5) {
        monthString = "Juin";
    } else if (month === 6) {
        monthString = "Juillet";
    } else if (month === 7) {
        monthString = "Août";
    } else if (month === 8) {
        monthString = "Septembre";
    } else if (month === 9) {
        monthString = "Octobre";
    } else if (month === 10) {
        monthString = "Novembre";
    } else if (month === 11) {
        monthString = "Décembre";
    }

    var day = newDate.getDate();
    if (day < 10) {
        day = "0" + day.toString();
    }

    var years = newDate.getFullYear().toString();

    return dayString + ' ' + day + ' ' + monthString + ' ' + years;
}


/**
 * @desc Function for format a date to french format.
 * @link https://www.portfolio-loic-dauchy.com 
 * @param {*} date - Date to format.
 * @returns ex: 29/07/2021
 */
function displayFrenchDate(date) {

    var newDate = new Date(date);

    var month = newDate.getMonth() + 1;
    if(month < 10){
        month = "0"+month.toString();
    }

    var day = newDate.getDate();

    if (day < 10) {
        day = "0" + day.toString();
    }

    var years = newDate.getFullYear().toString();

    return day + '/' + month + '/' + years;

}


/**
 * @desc Function for format a date for display hours.
 * @link https://www.portfolio-loic-dauchy.com 
 * @param {*} date - Date to format.
 * @returns ex: 11 heures et 23 minutes
 */
function displayFullFrenchHours(date) {

    var time = new Date(date);

    var hours = time.getHours();
    if(hours < 10){
        hours = "0"+hours.toString();
    }

    var minutes = time.getMinutes();
    if(minutes < 10){
        minutes = "0"+minutes.toString();
    }

    return hours + ' heures et ' + minutes + ' minutes';

}


/**
 * @desc Function for format a date for display hours.
 * @link https://www.portfolio-loic-dauchy.com 
 * @param {*} date - Date to format.
 * @returns ex: 11h23
 */
function displayFrenchHours(date) {

    var time = new Date(date);
    var hours = time.getHours();
    if(hours < 10){
        hours = "0"+hours.toString();
    }

    var minutes = time.getMinutes();
    if(minutes < 10){
        minutes = "0"+minutes.toString();
    }

    return hours + 'h' + minutes;
}


/**
 * @desc Function for format a date for display hours.
 * @link https://www.portfolio-loic-dauchy.com 
 * @param {*} date - Date to format.
 * @returns ex: 11:23
 */
function displayHours(date) {

    var time = new Date(date);
    var hours = time.getHours();
    if(hours < 10){
        hours = "0"+hours.toString();
    }

    var minutes = time.getMinutes();
    if(minutes < 10){
        minutes = "0"+minutes.toString();
    }

    return hours + ':' + minutes;
}


/**
 * @desc Function for format a date for display minutes.
 * @link https://www.portfolio-loic-dauchy.com 
 * @param {*} date - Date to format.
 * @returns ex: 11 minutes et 23 secondes
 */
function displayFullFrenchMinutes(date) {

    var time = new Date(date);
    var minutes = time.getMinutes();
    if(minutes < 10){
        minutes = "0"+minutes.toString();
    }
    var secondes = time.getSeconds();
    if(secondes < 10){
        secondes = "0"+secondes.toString();
    }

    return minutes + ' minutes et ' + secondes + ' secondes';
}


/**
 * @desc Function for format a date for display minutes.
 * @link https://www.portfolio-loic-dauchy.com 
 * @param {*} date - Date to format.
 * @returns ex: 11min 23s
 */
function displayFrenchMinutes(date) {

    var time = new Date(date);
    var minutes = time.getMinutes();
    if(minutes < 10){
        minutes = "0"+minutes.toString();
    }
    var secondes = time.getSeconds();
    if(secondes < 10){
        secondes = "0"+secondes.toString();
    }

    return minutes + 'min ' + secondes+ 's';

}
