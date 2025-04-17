import {fahrenheitToCelsius, hello, colour_mix, day_of_the_week, pay_raise, is_leap} from './functions.js';

function QuestionA(){
    return <section>
A. Write a function that takes a _name_ as an argument and _returns a string_ that _contains "hello"_ and the name paramerer. Test at least 3 names. <br />*Note ... I solved this one already
      <h2>results</h2>
      <p>hello("Rich") == "{hello('Rich')}"</p>
      <p>hello("Bill") == "{hello('Bill')}"</p>
      <p>hello("Chris") == "{hello('Chris')}"</p>
    </section>;
}

function QuestionB(){
    return <section>
B. Write a function that converts from fahrenheit to celsius        
<h2>results</h2>
<p>fahrenheitToCelsius(32) == "{fahrenheitToCelsius(32)}"</p>
<p>fahrenheitToCelsius(212) == "{fahrenheitToCelsius(212)}"</p>
<p>fahrenheitToCelsius(70) == "{fahrenheitToCelsius(70)}"</p>
    </section>
}

return <section>
            <h1>Final Exam</h1>
</section>

function Question1(){
    return <section>
<h2>1. Determines the secondary rgb_colour from mixing two primary RGB (Red, Green, Blue) colours. The order of the colours is *not* significant. Returns "Error" if any of the rgb_colour parameter(s) are invalid.</h2>
<b>Results</b>
<p>colour_mix("blue", "blue") = {colour_mix("blue", "blue")}</p>
<p>colour_mix("red", "red") = {colour_mix("red", "red")}</p>
<p>colour_mix("green", "green") = {colour_mix("green", "green")}</p>
<p>colour_mix("red", "blue") = {colour_mix("red", "blue")}</p>
<p>colour_mix("green", "blue") = {colour_mix("green", "blue")}</p>
<p>colour_mix("red", "green") = {colour_mix("red", "green")}</p>
<p>colour_mix("purple", "green") = {colour_mix("purple", "green")}</p>
    </section>
};

function Question2(){
    return <section>
        <h2>2. Return the product of the two largest values from
        val1, val2, and val3 </h2>
        <b>Results</b>
        <p>largest_product(4, 10, 20) = {largest_product(4, 10, 20)}</p>
        <p>largest_product(200, 120, 25) = {largest_product(200, 120, 25)}</p>
        <p>largest_product(3, 12, 6) = {largest_product(3, 12, 6)}</p>
        <p>largest_product(5, 1, 0) = {largest_product(5, 1, 0)}</p>
    </section>
}

function Question3(){
    return <section>
        <h2>3. Returns the name of a day of the week given an integer day number.
        Day 1 is "Sunday", day 7 is "Saturday".</h2>
        <b>Results</b>
        <p>day_of_the_week(6) = {day_of_the_week(6)}</p>
        <p>day_of_the_week(10) = {day_of_the_week(10)}</p>
        <p>day_of_the_week(1) = {day_of_the_week(1)}</p>
        <p>day_of_the_week(0) = {day_of_the_week(0)}</p>
        <p>day_of_the_week(3) = {day_of_the_week(3)}</p>
    </section>
}

function Question4(){
    return <section>
        <h2>4. Calculates pay raises for employees. Pay raises are based on: status: Full Time ('F)' or Part Time ('P') and years of service</h2>
        <h2>Raises are:</h2>
        <li>5% for full time greater than or equal to 10 years service</li>
        <li>1.5% for full time less than 4 years service</li>
        <li>3% for part time greater than 10 years service</li>
        <li>1% for part time less than 4 years service</li>
        <li>2% for all others</li>
        <b>Results</b>
        <p>pay_raise("F", 3, 45000) = {pay_raise("F",3, 45000)}</p>
        <p>pay_raise("F", 10, 85000) = {pay_raise("F", 10, 85000)}</p>
        <p>pay_raise("P", 15, 25000) = {pay_raise("P", 15, 25000)}</p>
        <p>pay_raise("P", 2, 15000) = {pay_raise("P", 2, 15000)}</p>
        <p>pay_raise("Q", 1, 15000) = {pay_raise("Q", 1, 15000)}</p>

    </section>
}

function Question5(){
    return <section>
        <h1>5. Determines if a year is a leap year. Every year that is
    exactly divisible by four is a leap year, except for years
    that are exactly divisible by 100, but these centurial years
    are leap years if they are exactly divisible by 400. For
    example, the years 1700, 1800, and 1900 are not leap years,
    but the years 1600 and 2000 are.</h1>
    <b>Results</b>
    <p>is_leap(1989) = {is_leap(1989)}</p>
    <p>is_leap(2024) = {is_leap(2024)}</p>
    <p>is_leap(2024) = {is_leap(2002)}</p>
    <p>is_leap(2000) = {is_leap(2000)}</p>
    <p>is_leap("25 BC") = {string(is_leap("25 BC"))}</p>
    </section>
}

export {QuestionA, QuestionB, Question1, Question2, Question3, Question4, Question5}