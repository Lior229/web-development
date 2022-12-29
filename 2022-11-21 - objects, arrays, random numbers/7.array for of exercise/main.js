var salaries = [10000,15000,20150,12350,14000,12300,12000,12400,13000];

// for loop

for(var i = 0; i < salaries.length; i++){
    document.write(salaries[i] + "<br>");
}

document.write('<hr>');

var sum = 0;

for(var salary of salaries){
    // sum = sum + salary
    sum += salary;
}

document.write('salaries sum is:' + ' ' + sum)

var avg = sum / salaries.length;
document.write('<br>');
document.write('avg  is:' + ' ' + avg)
