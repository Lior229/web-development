$(() => {

    const symbols = ['btc', 'etc', 'fmn', 'blm']; // you can use new Set(); which provides validation for multi

    $('.symbol-checkbox').on('change', function (e) {
        const isChecked = e.target.checked;
        const symbol = $(this).attr("data-coin-symbol");
        if (isChecked) {
            symbols.add(symbol);
        }




        console.log(symbols)

    })


    $('.symbol-button').on('click', function (e) {
        const isChecked = $(this).attr("data-checked") === 'false' ? false : true;
        $(this).attr("data-checked", !isChecked)


        console.log(isChecked)

        // const isChecked = e.target.checked;
        // const symbol = $(this).attr("data-coin-symbol");
        // if (isChecked) {
        //     symbols.add(symbol);
        // }




        // console.log(symbols)

    })

    console.log(symbols.join(','))



});