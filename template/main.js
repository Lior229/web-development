const COINS_API_URL = "https://api.coingecko.com/api/v3/coins/list";
const COINS_API_BY_ID = "https://api.coingecko.com/api/v3/coins/";
const localStorageKey = 'CoinsKey'

let coins;

$(async ()=> { 

    await getCoins();

    displayCoins(coins);

    $(".moreInfo").click(function (event) { 

        const clicked_coin_id = $(this).attr('data-coin-id')

        let url = COINS_API_BY_ID + clicked_coin_id

        $.ajax({
            url: url,
            dataType:'json',
            success: function (response) {

                const {image, market_data} = response;
                const coin_img = image.thumb;
                const usd_price = market_data.current_price.usd;
                const ils_price = market_data.current_price.ils;
                const eur_price = market_data.current_price.eur;

                let moreInfoHtml = `<div class="card card-body">
                                        <img src="${coin_img}" alt="">
                                        <br>
                                        <p class="card-text"> UDS ${usd_price}</p>
                                        <p class="card-text"> LIS ${ils_price}</p>
                                        <p class="card-text"> EUR ${eur_price}</p>
                                    </div>
                                    `;

                $(`#moreInfo-${clicked_coin_id}`).html(moreInfoHtml);

            },
            error: err =>{
                console.log(err);
            }
        });

    });
    
});

function getCoinsFromApi(){

    return new Promise((resolve, reject) => {
        $.ajax({
            url: COINS_API_URL,
            success: coins => resolve(coins),
            error:err =>  reject(err)  
        })
    })
}

function loadCoinsFromLocalStorage() {

    const str = localStorage.getItem(localStorageKey);
  
    const coins = (str === null) ? [] : JSON.parse(str);
  
    return coins;
}

async function getCoins() {

    coins = loadCoinsFromLocalStorage();

    if (coins.length === 0) {

        try {
            coins = await getCoinsFromApi();
        } catch (error) {
            console.log(error);
        }

        localStorage.setItem(localStorageKey, JSON.stringify(coins));
    }
}

function displayCoins(coins) {

    let cards = `<div class="row">`;

    for (let index = 0; index < 100; index++) {

         cards += `<div class="col">
                        <div class="card myCardStyle">
                            <div class="card-body position-relative">
                                <div class="form-check form-switch position-absolute top-0 end-0">
                                    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
                                </div>
                                <h5 class="card-title">${coins[index].symbol}</h5>
                                <p class="card-text">${coins[index].name}</p>
                                <button class="moreInfo btn btn-primary" data-coin-id=${coins[index].id} type="button" data-bs-toggle="collapse" data-bs-target="#moreInfo-${coins[index].id}">
                                  More info
                                </button>
                                <div class="collapse" id="moreInfo-${coins[index].id}">
                                </div>
                            </div>
                        </div>
                    </div>` ;
        
    }

    cards += `</div>`

    $('#card-container').html(cards);
    
}