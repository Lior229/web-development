function myfunc() {
    var myarr = [12, 20, 24, 11, 21];
    console.log(myarr);
    // sumEvenBumbers(myarr,0,4)
    // console.log(sumEvenBumbers(myarr,0,4));
    // console.log(getMinNumber(myarr,0,4,myarr[0]));
    // console.log(checkEvenumbers(myarr,0,2));
    console.log(5);
    console.log(sumDigit(5, 0));
    console.log(95123);
    console.log(sumDigit(95123, 0));
}
function sumEvenBumbers(myarr, startIndex, endIndex) {
    if (startIndex === endIndex) {
        if (myarr[startIndex] % 2 == 0) {
            return myarr[startIndex];
        }
        return 0;
    }
    if (myarr[startIndex] % 2 == 0) {
        return myarr[startIndex] + sumEvenBumbers(myarr, startIndex + 1, endIndex);
    }
    else {
        return 0 + sumEvenBumbers(myarr, startIndex + 1, endIndex);
    }
}
function getMinNumber(myarr, startIndex, endIndex, minNumber) {
    if (startIndex === endIndex) {
        if (myarr[startIndex] < minNumber) {
            return myarr[startIndex];
        }
        return minNumber;
    }
    if (myarr[startIndex] < minNumber) {
        return getMinNumber(myarr, startIndex + 1, endIndex, myarr[startIndex]);
    }
    return getMinNumber(myarr, startIndex + 1, endIndex, minNumber);
}
function checkEvenumbers(myarr, startIndex, endIndex) {
    if (startIndex === endIndex) {
        if (myarr[startIndex] % 2 == 0) {
            return true;
        }
        return false;
    }
    if (myarr[startIndex] % 2 == 0) {
        return true && checkEvenumbers(myarr, startIndex + 1, endIndex);
    }
    else {
        return false + checkEvenumbers(myarr, startIndex + 1, endIndex);
    }
}
function sumDigit(mynumber, digitSum) {
    if ((mynumber / 10) < 1) {
        return Math.floor((mynumber % 10));
    }
    return (Math.floor((mynumber % 10)) + sumDigit(Math.floor((mynumber / 10)), digitSum));
}
