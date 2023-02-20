

$("#firstRowCopy").click(function (e) { 

    $("#firstTarget").text($("#firstNameBox").val());

    $("#firstNameBox").val("") ;
    
});

$("#setRange").click(function (e) { 

    const minLim = parseInt($("#startLim").val());
    const maxLim = parseInt($("#endLim").val())

    for (let index = minLim ; index <= maxLim ; index++) {

        const newRange = document.createElement("option");  // Create with DOM
        newRange.innerHTML = `<option value="${index}"> ${index} </option>`;
        
        $('#selectedRange').append(newRange)
        
    }
    
});

