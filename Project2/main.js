const COINS_API_URL = "https://api.coingecko.com/api/v3/coins/list";
const COINS_API_BY_ID = "https://api.coingecko.com/api/v3/coins/";
const REPORT_API = "https://min-api.cryptocompare.com/data/pricemulti?fsyms=mycoins&tsyms=USD";
const localStorageKey = 'CoinsKey'
const localStorageReportKey = 'ReportCoinsKey'
const TIME_OUT_CHECK = 10000;

let coins;
let reportCoins;
let moreInfoDates;
let refreshChartInterval;

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
                //TODO: add messages to let know that the search had no result 
            } else {
                $(".coinCardContainer").hide()

                for (const coin of result) {
                    $(`#coinCardContainer-${coin.id}`).show();
                }
            }

        }
    });

    $(":checkbox").on("change", function() {

        let enteringCoin = coins.find((coin) => {
            return coin.id === this.id.replace('reportCheckbox-','');
        });

        if(this.checked) {
            if (reportCoins.length < 5) {
                reportCoins.push(enteringCoin);
            } else {
                $("#coin-list-modal-cointner").empty();
                $("#coin-list-modal-cointner").append(`<p>You can choose up to 5 coins.</p>
                                                 <p>select the wanted coins:</p>`);

                let ulHTML = `<ul class="list-group">`;

                ulHTML += `<li class="list-group-item">
                                        <p>Coin symbol: ${enteringCoin.symbol}, Coin name: ${enteringCoin.name}</p>
                                    </li>`; 

                reportCoins.forEach(reportCoin => {
                    ulHTML += `<li class="list-group-item">
                    <div>
                        <p>Coin symbol: ${reportCoin.symbol}, <br> Coin name: ${reportCoin.name}</p>
                        <button class="switch-report btn btn-warning" type="button" data-coin-id=${reportCoin.id}>switch</button>
                    </div>
                </li>`;
                    
                });

                ulHTML += `</ul>`;
                $("#coin-list-modal-cointner").append(ulHTML);

                $("button[data-bs-dismiss='modal']").on("click", function() {
                    $(`#reportCheckbox-${enteringCoin.id}`)[0].checked = false
                })

                $(".switch-report").on("click", function() {

                    let exitingCoin = reportCoins.find((coin) => {
                        return coin.id === $(this).attr('data-coin-id');
                    });

                    reportCoins.splice((reportCoins.indexOf(exitingCoin)), 1);
                    reportCoins.push(enteringCoin);

                    $(`#reportCheckbox-${exitingCoin.id}`)[0].checked = false

                    // update local storage after change
                    localStorage.setItem(localStorageReportKey, JSON.stringify(reportCoins));

                    $("#myModal").modal("hide");
                });

                $("#myModal").modal("show");

            }
        } else {
            // Remove coind from report arry
            const index = reportCoins.findIndex((coin) => {
                return coin.id == enteringCoin.id
            })
            reportCoins.splice(index, 1);
        }

        // update local storage after change
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
    clearInterval(refreshChartInterval);
    switch (url) {
        case navigations["home-link"]:
                await getCoins();
                getReportCoins();
                displayCoins(coins); 
                registerEventListeners()
            break;
        case navigations["report-link"]:
                displayReport();
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

        if(lastInfoDate) {           
            if (Date.now() - lastInfoDate.update_time > TIME_OUT_CHECK) {
                try {
                    updatedInfo = await getmoreInfoFromApi(coin_id);
                } catch (error) {
                    console.log(error);
                }
            } else updatedInfo = lastInfoDate
        } else{
            try {
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

async function displayReport(){

    let chartTitle = "";
    let url = "";

    reportCoins.forEach(reportCoin => {
        chartTitle += reportCoin.symbol.toUpperCase() + ","
    });

    chartTitle = chartTitle.slice(0, chartTitle.length-1);

    url = REPORT_API.replace("mycoins", chartTitle)

    let chartData = [];
    const first_prices = await getPriceApi(url);

    reportCoins.forEach(reportCoin => {

        let first_price = first_prices.find((price) => {
            return price.symbol === reportCoin.symbol.toUpperCase();
        }).price;

        let coinData = {
            type: "spline",
            name: reportCoin.symbol,
            showInLegend: true,
            xValueFormatString: "hh:mm:ss",
            yValueFormatString: "$##########.###########",
            dataPoints:[ {
                x: new Date(),
                y: first_price
            }]};

            chartData.push(coinData);
    });

    // create chart with first point
    let chart = new CanvasJS.Chart("chartContainer", {
        exportEnabled: true,
        animationEnabled: true,
		title:{
			text: "Coins report"          
		},
        subtitles: [{
            text: chartTitle
        }],
        axisX: {
            title: "Time",
            valueFormatString:"hh:mm:ss"
        },
        axisY: {
            title: "Coin Price in USD",
            yValueFormatString: "$##########.###########",
            titleFontColor: "#4F81BC",
            lineColor: "#4F81BC",
            labelFontColor: "#4F81BC",
            tickColor: "#4F81BC"
        },
        toolTip: {
            shared: true
        },
		data: chartData             
	});

	chart.render();

    console.log(chartData);

    refreshChartInterval = setInterval(async ()=>{
        const prices = await getPriceApi(url);

        prices.forEach((price)=>{

            //add new price to chart data
            let coinData = chartData.find((data) => {
                return data.name.toUpperCase() === price.symbol;
            });

            coinData.dataPoints.push({
                x: new Date(),
                y: price.price
            });

        })

        chart.render();
    }, 2000);

}

function getPriceApi(url){
    return new Promise((resolve, reject) => {
        $.ajax({
            url: url,
            success: function (prices) {

                let current_prices = [];

                for (var price in prices) {

                    current_prices.push({
                        symbol: price,
                        price: prices[price].USD
                        })
                    
                }
                resolve(current_prices);
            },
            error: function (err){
                reject(err)
            }
        })
    })
}