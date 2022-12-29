var grade = +prompt("Please enter your grade");

switch (true) {
    case (0): {
        console.log('fail')
        break;
    }
    case (grade >= 60 && grade < 70): {
        console.log('enough')
        break;
    }

    default: {
        console.log('not a legal grade')
    }
}


