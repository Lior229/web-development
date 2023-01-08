getAverage = (numArray) => {
    let sumArray = 0;
    let avg = 0;
    // try catch
    try {
      //   validation
      // 1.check if the input is an array
  
      if (Array.isArray(numArray)) {
        console.log(`input is an array`);
        for (let i = 0; i < numArray.length; i++) {
          // check if the input inside of the array is typeof number
          if (typeof numArray[i] === `number`) {
            sumArray = numArray.reduce(
              (prevValue, nextValue) => prevValue + nextValue
            );
            avg = sumArray / numArray.length;
          }
        }
        alert(`sum - ${sumArray}`);
        alert(`average - ${avg}`);
        console.log(`sum - ${sumArray}`);
        console.log(`average - ${avg}`);
      } else {
        throw Error();
      }
    } catch (error) {
      // point at the error and the location of it
      alert(`You Didnt Insert An Array!`);
      alert(`Lets fix it together...`);
      alert(`first, lets create an array for you: numArray = [ ] `);
      alert(`now, lets add some values to work with...`);
      alert(`please enter 5 numbers - 1 at a time.`);
      numArray = [];
      let firstNum = +prompt(`enter first number`);
      let secondNum = +prompt(`enter second number`);
      let thirdNum = +prompt(`enter third number`);
      let fourthNum = +prompt(`enter fourth number`);
      let fifthNum = +prompt(`enter fifth number`);
  
      numArray.push(firstNum, secondNum, thirdNum, fourthNum, fifthNum);
      for (let i = 0; i < numArray.length; i++) {
        // check if the input inside of the array is typeof number
        if (typeof numArray[i] === `number`) {
          sumArray = numArray.reduce(
            (prevValue, nextValue) => prevValue + nextValue
          );
  
          avg = sumArray / numArray.length;
        }
      }
      alert(`Great! lets see what we got!`);
  
      alert(
        ` your numbers are: ${numArray} <br>, sum of the array - ${sumArray} <br> average of the array - ${avg}`
      );
      console.log(numArray);
    }
  
    // creating avg functioality
    return avg;
  };
  
  countObjectProperties = (object) => {
    let objectLength = 0;
    try {
      if (typeof object === `object`) {
        objectLength = Object.keys(object).length;
        console.log(`amout of properties in the object - ${objectLength}`);
      } else {
        throw new Error();
      }
    } catch (error) {
      alert(`You Didnt Insert An Object!`);
      alert(`Lets fix it together...`);
      alert(`lets add some keys and values to work with...`);
      alert(`please enter 3 properties - 1 at a time.`);
      let firstPropKey = prompt(`enter first property`);
      let secondPropKey = prompt(`enter second property`);
      let thirdPropKey = prompt(`enter third property`);
  
      let firstPropValue = prompt(`Enter a Value for ${firstPropKey}`);
      let secondPropValue = prompt(`Enter a Value for ${secondPropKey}`);
      let thirdPropValue = prompt(`Enter a Value for ${thirdPropKey}`);
      object = {
        firstPropKey: firstPropValue,
        secondPropKey: secondPropValue,
        thirdPropKey: thirdPropValue,
      };
  
      objectLength = Object.keys(object).length;
      console.log(object);
      console.log(objectLength);
      alert(`Great! lets see what we got!`);
  
      alert(`Success! please check the console.`);
    }
  };
  
  customCodeInput = () => {
    const codeInput = document.querySelector(`#userCode`);
    try {
      let code = eval(codeInput.value);
      if (codeInput instanceof Error) {
        throw new Error();
      } else {
        alert("success! look at the console to see your code");
        return;
      }
    } catch (error) {
      let errorMsg = `please check your code : ${error.stack}`;
      alert(errorMsg);
    }
  };
  