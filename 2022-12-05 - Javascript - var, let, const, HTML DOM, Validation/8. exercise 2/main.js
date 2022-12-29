function calc(){
    const numOneBox = document.getElementById("numOneBox");
    const numTwoBox = document.getElementById("numTwoBox");
    const resultSpan = document.getElementById("resultSpan");

    const num1 = +numOneBox.value;
    const num2 = +numTwoBox.value;
    const sum = num1 + num2;

    resultSpan.innerHTML = `<p style="color:red">${sum}</p>`;
}