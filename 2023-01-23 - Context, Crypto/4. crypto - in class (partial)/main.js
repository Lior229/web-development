$(() => {

    //global configuration 

    const loader = `
     <div id="loader" class="loader">
       <div class="loading-spinner"> </div>
     </div>
    `;

    const COIN_CARD_WIDTH = 150;

    const selectors = {
        mainContainer:'#main',
        homeSection:"#homeSection",
        reportSection:"#reportSection",
        aboutSection:"#aboutSection",
        loader:"#loader"
    }

    const COINS_API_URL = "https://api.coingecko.com/api/v3/coins"


    init();




    $('a').on('click',function(){
        window.removeEventListener("resize",updateColumnsInSectionDynamically);
        $('section').remove();
        const dataSection = $(this).attr('data-section');
        
        $("<section>",{
            id:dataSection,
            class:'some-class' //placeholder
        }).appendTo(selectors.mainContainer);

        const selector = `#${dataSection}`;

        switch(selector){
            case selectors.reportSection:
                alert('report section');
                break;
            case selectors.aboutSection:
                alert('about section');
                break;
            default:
            init();
            break;
        }
    })



    async function handleCoins(){
        try{
         $(loader).appendTo(selectors.mainContainer);
          const coins = await getJson(COINS_API_URL);

          displayCoins(coins);

        }catch(error){
            console.log('error getting the coins')
        }finally{
            $(selectors.loader).remove();
        }
    }

    
    function displayCoins(coins){
        let content = "";

        for(const coin of coins){

            const card = createCard(coin);
            content += card;
        }
        $(selectors.homeSection).html(content);
    }

    function createCard(coin){
        const {id,symbol,name,image:{thumb}} = coin;
        return `
           <div class="card" id="${id}"> 
             <div class="loaderContainer"></div>
             <span class="coin-symbol">${symbol}</span> <br>
             <span class="coin-name">${name}</span> <br>
             <img class="coin-image" src="${thumb}"/> <br>
             <button data-coin-id="${id}" class="more-info">More Info</button>
            <span></span>
             </div>
        `;
    }


    $('#search').on("keyup",function(){
        const textSearch = $(this).val().toLowerCase();
        console.log(textSearch)
    });


    function getJson(url){
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                $.ajax({
                    url,
                    success: users => resolve(users),
                    error:err =>  reject(err)
                   })
            },3000);
        });
    }

    function updateColumnsInSectionDynamically(){
      
        let columns = Math.floor(window.innerWidth / COIN_CARD_WIDTH);
        $(selectors.homeSection).css({
            gridTemplateColumns:`repeat(${columns},1fr)`,
            gridAutoRows:COIN_CARD_WIDTH
        });
    }


    function init(){
        let homeSection = $(selectors.homeSection);

        if(!homeSection.length){
            homeSection = $('<section>',{
                id:"homeSection",
                class:'some-class'
            })
        }

        homeSection.appendTo(selectors.mainContainer);

        updateColumnsInSectionDynamically();

        window.addEventListener("resize",updateColumnsInSectionDynamically);
        handleCoins();

    }


});
