// 10 days of Javascript
// This file is created by mayur

const getDayName = dateString => {
    const date = new Date(dateString);
    let dayName;

    switch (date.getDay()) {
        case 0:
            dayName = "Sunday";
            break;
        case 1:
            dayName = "Monday";
            break;
        case 2:
            dayName = "Tuesday";
            break;
        case 3:
            dayName = "Wednesday";
            break;
        case 4:
            dayName = "Thursday";
            break;
        case 5:
            dayName = "Friday";
            break;
        case 6:
            dayName = "Saturday";
            break;
    }

    return dayName;
};
