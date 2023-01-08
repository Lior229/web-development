function testEval(){
    const jsCode = `
       const x = 7;
       const y = 8;
       alert(x + y);
    `;

    eval(jsCode);
}