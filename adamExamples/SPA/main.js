$(document).ready(function () {

    const navigations = {
        'big-mofo-link': 'content1.html',
        'small-mofo-link': 'content2.html'
    }
    

    const root = $("#root")


    // change me to mayube a class selector or attribute your call motek
    $("a").click(function (e) { 

        // not necessary when you have # in your 'a' link
        e.preventDefault();

        const linkId = this.id
        const url = navigations[linkId]
        $.ajax({
            type: "get",
            url: url,
            success: function (response) {
                console.log('oh good', response);

                root.empty()
                root.append(response);

            },
            error: function (err) {
                console.log('oh fuckkkk', err);
            }  
        });
        


    });

});