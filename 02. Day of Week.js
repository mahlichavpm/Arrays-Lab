function daysOfWeek(number) {

    let week = ['Monday', 'Tuesday', 'Wednesday','Thursday','Friday','Saturday','Sunday'];
    let day = '';
    
    if (number < 8 && number > 0) {
        day = week[number - 1];
        console.log(day);
    } else {
        console.log('Invalid day!');
    }
}
daysOfWeek(1)