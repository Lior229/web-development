const COINS_API_URL = "https://api.coingecko.com/api/v3/coins/list";
const COINS_API_BY_ID = "https://api.coingecko.com/api/v3/coins/";
const localStorageKey = 'CoinsKey'
const localStorageReportKey = 'ReportCoinsKey'
const TIME_OUT_CHECK = 10000;

let coins;
let reportCoins;
let moreInfoDates;

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

    $(".moreInfo").on("click", async function (event) { 
        const clicked_coin_id = $(this).attr('data-coin-id')
        // $(`#moreInfo-${clicked_coin_id}`)[0].children.length is 0 when opening and 1 when closing
        if ($(`#moreInfo-${clicked_coin_id}`)[0].children.length === 0) {
            const loaderHtml = `<div class="card card-body">
                                <div class="spinner-border text-primary" role="status">
                                    <span class="visually-hidden">Loading...</span>
                                </div>
                            </div>`;

            $(`#moreInfo-${clicked_coin_id}`).html(loaderHtml);

            try {
                let moreInfo = await getUpdatedMoreInfo(clicked_coin_id)
                        
                let moreInfoHtml = `<div class="card card-body">
                                        <img src="${moreInfo.coin_img}" alt="">
                                        <br>
                                        <p class="card-text"> UDS ${moreInfo.usd_price}&dollar;</p>
                                        <p class="card-text"> LIS ${moreInfo.ils_price}&#8362</p>
                                        <p class="card-text"> EUR ${moreInfo.eur_price}&euro;</p>
                                    </div>`;    

                $(`#moreInfo-${clicked_coin_id}`).html(moreInfoHtml);
                
            } catch (error) {
                console.log(error);
                //TODO: display err in card
            }
        }

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
  
    const coins  = (str === null) ? [] : JSON.parse(str);
  
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
    const loaderHtml = `
                        <div class="spinner-border text-primary" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>`;
    
    $("#root").html(loaderHtml)

    const htmlPage = await getPage(url)
    $("#root").html(htmlPage)
    await handlePageChange(url) // make sure we still wait for coins from api in case its not in localstorage before registering the events
}

async function handlePageChange(url) {
    switch (url) {
        case navigations["home-link"]:
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

async function getUpdatedMoreInfo(coin_id) {
    return new Promise(async (resolve, reject) => {
        let str = localStorage.getItem(coin_id);
        let lastInfoDate  = (str === null) ? null : JSON.parse(str);
        let updatedInfo;

        console.log(lastInfoDate);

        if(lastInfoDate) {           
            if (Date.now() - lastInfoDate.update_time > TIME_OUT_CHECK) {
                try {
                    console.log("getUpdatedMoreInfo: api call 1, timepass:"+ Date.now() - lastInfoDate.update_time);
                    updatedInfo = await getmoreInfoFromApi(coin_id);
                } catch (error) {
                    console.log(error);
                }
            } else updatedInfo = lastInfoDate
        } else{
            try {
                console.log("getUpdatedMoreInfo: api call 2, no more info at local storage");
                updatedInfo = await getmoreInfoFromApi(coin_id);
            } catch (error) {
                console.log(error);
            }
        }

        resolve(updatedInfo)
        
    })
}

function getmoreInfoFromApi(coin_id){

    const url = COINS_API_BY_ID + coin_id

    return new Promise((resolve, reject) => {
        $.ajax({
            url: url,
            success: function (moreInfo) {

                const {image, market_data} = moreInfo;

                const updatedInfo = {
                    update_time: Date.now(),
                    coin_img: image.thumb,
                    usd_price: market_data.current_price.usd || 'N/A',
                    ils_price: market_data.current_price.ils || 'N/A',
                    eur_price: market_data.current_price.eur || 'N/A'
                }

                localStorage.setItem(coin_id, JSON.stringify(updatedInfo));             
                resolve(updatedInfo);
            },
            error: function (err){
                reject(err)
            }
        })
    })
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