var color = prompt("Enter one of the following colors:red/magenta/blue/yellow/green");


switch (color) {
    case 'red':
        console.log('your color is red')
        break;
    case 'blue':
        console.log('your color is blue')
        break;
    case 'yellow':
        console.log('your color is yellow')
        break;
    case 'green':
        console.log('your color is green')
        break;
    case 'magenta':
        console.log('your color is red')
        break;
    default:
        console.log('there was no color match')
}


// the same thing as the if else example :

// if (color === 'red') {
//     console.log('your color is red')
// }
// else if (color === 'green') {
//     console.log('your color is green')
// }
// else if (color === 'blue') {
//     console.log('your color is blue')
// }
// else if (color === 'magenta') {
//     console.log('your color is magenta')
// }
// else if (color === 'yellow') {
//     console.log('your color is yellow')
// }