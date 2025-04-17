function hello(name){
    return(`hello ${name}`);
}

function fahrenheitToCelsius(fahrenheit){
    const celsius = (fahrenheit -32) * 5/9
    return celsius;
}

// q1

function colour_mix(rgb_colour1, rgb_colour2){
    let rgb_colour = "";
    const valid_colour = ["red", "green", "blue"];

    // throw error

    if (!valid_colour.includes(rgb_colour1) || !valid_colour.includes(rgb_colour2)) {
        rgb_colour = "Error";
    }

    // secondary colours

    else if (rgb_colour1 == "green" && rgb_colour2 == "blue" || rgb_colour1 === "blue" && rgb_colour2 === "green"){
        rgb_colour = "aqua";
    }
    else if (rgb_colour1 == "red" && rgb_colour2 == "blue" || rgb_colour1 == "blue" && rgb_colour2 == "red"){
        rgb_colour = "fuschia";
    }
    else if (rgb_colour1 == "red" && rgb_colour2 == "green" || rgb_colour1 == "green" && rgb_colour2 == "red"){
        rgb_colour = "yellow";
    }

    // duplicate colours

    else if (rgb_colour1 == "red" && rgb_colour2 == "red"){
        rgb_colour = "red";
    }
    else if (rgb_colour1 == "blue" && rgb_colour2 == "blue"){
        rgb_colour = "blue";
    }
    else if (rgb_colour1 == "green" && rgb_colour2 == "green"){
        rgb_colour = "green";
    }
    else {
        return "Error";
    }
    return rgb_colour;
}

// q2

function largest_product(val1, val2, val3){
    let product = "";
    if (val1 <= val2 && val1 <= val3) // eliminate val1  
        {product = val2 * val3;
    }
    else if (val2 <= val1 && val2 <= val3) // eliminate val2
        {product = val1 * val3;
    }
    else if (val3 >= val2 && val3 <= val1) // eliminate val3
        {product = val1 * val2;
    }
    else {
        product = "Error";
    }

    return product;
}

// q3

// reminder - counting starts at 0

function day_of_the_week(day_num){
    let day = "";
    const valid_num = [1,2,3,4,5,6,7];
    if (!valid_num.includes(day_num)) {
        return "error";
    }
    else if (day_num == 1){
        day = "Sunday";
    }
    else if (day_num == 2){
        day = "Monday";
    }
    else if (day_num == 3){
        day = "Tuesday";
    }
    else if (day_num == 4){
        day = "Wednesday";
    }
    else if (day_num == 5){
        day = "Thursday";
    }
    else if (day_num == 6){
        day = "Friday";
    }
    else if (day_num == 7){
        day = "Saturday";
    }
    else {
        day = "Error"
    }
    
    return day;
}

//q4
function pay_raise(status, years, salary){
    let new_salary = "";

    if (status !== 'F' || status !== 'P'){
        new_salary = "Error";
    }
    else if(typeof years !== "number" || salary !== "number"){
        new_salary = "Error";
    }
    else if(years <= 0 || salary <= 0){
        new_salary = "Error";
    }

    // full time

    if (status === 'F'){
        if (years >= 10){
            new_salary = salary * 1.05;
        }
        else if (years < 4) {
            new_salary = salary * 1.015;
        }
        else {
            new_salary = salary * 1.02;
        }
    }

    // part time

    if (status === 'P'){
        if (years > 10) {
            new_salary = salary * 1.03;
        }
        else if (years < 4) {
            new_salary = salary * 1.01;
        }
        else {
            new_salary = salary * 1.02;
        }
    }

    const newSalary = salary + (salary * raise_percent);
    
    return new_salary.toFixed(2);
}

// q5

function is_leap(year){
    if (year <= 0) {
        return "Error";
    }
    else if (typeof year !== 'number') {
        return "Error";
    }

    if (year % 4 !== 0) 
        {return false;
    }
    if (year % 100 === 0 && year % 400 !== 0){
        return false;
    }
    else {
        return true;
    }
}

export {hello, fahrenheitToCelsius, colour_mix, day_of_the_week, pay_raise, is_leap}