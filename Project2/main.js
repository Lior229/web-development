const COINS_API_URL = "https://api.coingecko.com/api/v3/coins/list";
const COINS_API_BY_ID = "https://api.coingecko.com/api/v3/coins/";
const localStorageKey = 'CoinsKey'
const localStorageReportKey = 'ReportCoinsKey'

let coins;
let reportCoins;

const navigations = {
    'home-link': 'home.html',
    'report-link': 'report.html',
    'about-link': 'about.html'
}

$(async ()=> { 

    await showPage("home.html");

    $("a").on("click", async function (event) { 

        //Prevent a link from opening the URL
        event.preventDefault()

        const linkId = this.id
        const url = navigations[linkId]

        await showPage(url);

    });

    registerEventListeners()
    
});

function registerEventListeners() {
    $(".moreInfo").off("click")
    $("#search-btn").off("click")
    $(":checkbox").off("change")

    $(".moreInfo").on("click", function (event) { 
        console.log('heyyyyy');

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
                                        <p class="card-text"> UDS ${usd_price}&dollar;</p>
                                        <p class="card-text"> LIS ${ils_price}&#8362</p>
                                        <p class="card-text"> EUR ${eur_price}&euro;</p>
                                    </div>
                                    `;

                $(`#moreInfo-${clicked_coin_id}`).html(moreInfoHtml);

            },
            error: err =>{
                console.log(err);
            }
        });

    });

    $("#search-btn").on("click", function() {
        const symbolToSearch = $("#searchBox").val().toLowerCase();

        // !symbolblabla
        if (symbolToSearch.length < 1) {
            //display all coins if there is no string to search
            displayCoins(coins);
        } else {
            const result = coins.filter((coin) => {
                return coin.symbol.includes(symbolToSearch);
            });

            if (result.length < 1) {
                //display all coins if there no search result 
                $(".coinCardContainer").show()
            } else {
                $(".coinCardContainer").hide()

                for (const coin of result) {
                    $(`#coinCardContainer-${coin.id}`).show();
                }
            }

        }
    });

    $(":checkbox").on("change", function() {

        const coin = coins.find((coin) => {
            return coin.id === this.id.replace('reportCheckbox-','');
        });

        if(this.checked) {
            if (reportCoins.length < 5) {
                reportCoins.push(coin);
            } else {
                // class for butuun to event click + id for coin.id
                let ulHTML = `<ul class="list-group">`;

                ulHTML += `<li class="list-group-item">
                                        <p>Coin symbol: ${coin.symbol}, Coin name: ${coin.name}</p>
                                    </li>`; 

                for (const reportCoin of reportCoins){
                    ulHTML += `<li class="list-group-item" >
                                            <div>
                                                <p>Coin symbol: ${reportCoin.symbol}, <br> Coin name: ${reportCoin.name}</p>
                                                <button class="btn btn-warning" type="button" id="">switch</button>
                                            </div>
                                        </li>`;
                }

                ulHTML += `</ul>`;

                $("#coin-list-cointner").html("");
                $("#coin-list-cointner").append(`<p>You can choose up to 5 coins.</p>
                                                 <p>select the wanted coins:</p>`);

                $("#coin-list-cointner").append(ulHTML);
                $("#myModal").modal("show");
                this.checked = false;
            }
        } else {
            // Remove coind from report arry
            reportCoins.splice(reportCoins.indexOf(coin), 1);
        }

        // update loacl storage after change
        localStorage.setItem(localStorageReportKey, JSON.stringify(reportCoins));
    });

}

function getCoinsFromApi(){

    return new Promise((resolve, reject) => {
        $.ajax({
            url: COINS_API_URL,
            success: coins => resolve(coins),
            error:err =>  reject(err)  
        })
    })
}

function loadCoinsFromLocalStorage(storageKey) {

    const str = localStorage.getItem(storageKey);
  
    const coins = (str === null) ? [] : JSON.parse(str);
  
    return coins;
}

function getPage(url) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: url,
            success: function (response) {      
                resolve(response)
            },
            error: function (err){
                reject(err)
            }
        });    
    })
    
}

async function showPage(url) {
    const htmlPage = await getPage(url)
    $("#root").html(htmlPage)
    await handlePageChange(url) // make sure we still wait for coins from api in case its not in localstorage before registering the events
}

async function handlePageChange(url) {

    console.log(url);
    switch (url) {
        case navigations["home-link"]:
            console.log("case home");
                await getCoins();
                getReportCoins();
                displayCoins(coins); 
                registerEventListeners()
            break;
        case navigations["report-link"]:

            break;
        case navigations["about-link"]:
        default:
            break;
    }

}

async function getCoins() {

    coins = loadCoinsFromLocalStorage(localStorageKey);

    if (coins.length === 0) {

        try {
            coins = await getCoinsFromApi();
        } catch (error) {
            console.log(error);
        }

        // TODO: delete silce  - 100 coins for testing
        coins = coins.slice(0,100);

        localStorage.setItem(localStorageKey, JSON.stringify(coins));
    }


}

async function getReportCoins() {
    reportCoins = loadCoinsFromLocalStorage(localStorageReportKey);
}

function displayCoins(coins) {

    let cards = `<div class="row">`;

    for (const coin of coins) {

        //if coin selected for report show checkbox as checked
        let checked = "";

        if (reportCoins.length > 0) {

            const result = reportCoins.find((coinToFind) => {
                return coin.id === coinToFind.id;
            });

            checked = result ? "checked" : "";
        }

        cards += `<div class="col coinCardContainer" id="coinCardContainer-${coin.id}" >
                    <div class="card myCardStyle">
                        <div class="card-body position-relative">
                            <div class="form-check form-switch position-absolute top-0 end-0">
                                <input class="form-check-input" type="checkbox" role="switch" id="reportCheckbox-${coin.id}" ${checked}>
                            </div>
                            <h5 class="card-title">${coin.symbol}</h5>
                            <p class="card-text">${coin.name}</p>
                            <button class="moreInfo btn btn-primary" data-coin-id=${coin.id} type="button" data-bs-toggle="collapse" data-bs-target="#moreInfo-${coin.id}">
                                More info
                            </button>
                            <div class="collapse" id="moreInfo-${coin.id}">
                            </div>
                        </div>
                    </div>
                </div>` ;
        
    }

    cards += `</div>`

    $("#card-container").html(cards);
    $("#card-container").show();
}