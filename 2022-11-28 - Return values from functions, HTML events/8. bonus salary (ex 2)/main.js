function getBonus(salary){
    return salary * 0.15;
}

function main(){
    var salary = +prompt("Enter your salary");
    var bonus = getBonus(salary);
    alert('Bonus: ' + bonus);
}

main();