/// <reference path="jquery-3.6.0.js" />

$(() => {
  /**
   * Global configuration
   */
  const loader = `
  <div id="loader" class="loader">
     <div class="loading-spinner"></div>
   </div>`;

  const selectors = {
    mainContainer: "#main",
    homeSection: "#homeSection",
    reportSection: "#reportSection",
    aboutSection: "#aboutSection",
    loader: "#loader",
    loaderContainer: ".loaderContainer",
  };

  const MORE_INFO_LOCAL_STORAGE_KEY = "more_info";
  const TWO_MINUTES = 120000; // in milliseconds

  const COINS_API_URL = "https://api.coingecko.com/api/v3/coins";
  const CARD_WITH = 150;
  let coins = [];
  const moreInfoTimers = {};

  localStorage.setItem(MORE_INFO_LOCAL_STORAGE_KEY, JSON.stringify({}));

  init();

  $("a").on("click", function () {
    window.removeEventListener("resize", updateColumnsInSectionDynamically);
    $("section").remove();
    const dataSection = $(this).attr("data-section");

    $("<section>", {
      id: dataSection,
      class: "some-class",
    }).appendTo(selectors.mainContainer);

    const selector = `#${dataSection}`;

    switch (selector) {
      case selectors.reportSection:
        console.log("reportSection");
        break;
      case selectors.aboutSection:
        console.log("aboutSection");
        break;
      default:
        console.log("home");
        init();
        break;
    }
  });

  $("#homeSection").on("click", ".card > button.more-info", async function () {
    let coin;
    const coinId = $(this).attr("data-coin-id");
    const currentCard = $(`#${coinId}`);
    const currentLoaderContainer = $(currentCard).find(
      selectors.loaderContainer
    );

    const now = new Date();
    const timer =  moreInfoTimers[coinId];

  
    const timeDiff = timer ? now - timer : TWO_MINUTES;

    if (timeDiff < TWO_MINUTES) {
      // get the coin from local storage
 
      const coinsHash = getCoinFromLocalStorage();


      coin = coinsHash[coinId];
    
    } else {
      // if 2 minutes have passed - get the coin from the api

      // render loader
      $(loader).appendTo(currentLoaderContainer);
      $(currentLoaderContainer).show();

      coin = await getMoreInfo(coinId);

      // hide loader
      $(selectors.loader).remove();
      $(currentLoaderContainer).hide();

      // get the current data from local storage
      const coinsHash = getCoinFromLocalStorage();
      
      coinsHash[coinId] = coin;

      //insert the coin data into local storage
      localStorage.setItem(MORE_INFO_LOCAL_STORAGE_KEY, JSON.stringify(coinsHash));
      //reset the timer
      moreInfoTimers[coinId] = new Date();
    }

    const content = `
        <br>
        💲 ${coin.market_data.current_price.usd} <br>
        💶 ${coin.market_data.current_price.eur} <br>
        🎼 ${coin.market_data.current_price.ils}
        `;
    $(this).next().html(content);
  });

  $("input[type=search]").on("keyup", function () {
    const textToSearch = $(this).val().toLowerCase();
    if (textToSearch === "") {
      displayCoins(coins);
    } else {
      const filteredCoins = coins.filter(
        (c) => c.symbol.indexOf(textToSearch) >= 0
      );
      if (filteredCoins.length > 0) {
        displayCoins(filteredCoins);
      }
    }
  });

  async function handleCoins() {
    try {
      $(loader).appendTo(selectors.mainContainer);
      coins = await getJSON(COINS_API_URL);
      displayCoins(coins);
    } catch (err) {
      alert(err.message);
    } finally {
      $(selectors.loader).remove();
    }
  }

  function displayCoins(coins) {
    let content = "";
    for (const coin of coins) {
      const card = createCard(coin);
      content += card;
    }
    $("#homeSection").html(content);
  }

  function createCard(coin) {
    const {
      id,
      symbol,
      name,
      image: { thumb },
    } = coin;

    const card = `
            <div class="card" id="${id}">
                <div class="loaderContainer"></div>
                <span class="coin-symbol">${symbol}</span> <br>
                <span class="coin-name">${name}</span> <br>
                <img class="coin-image" src="${thumb}" /> <br>
                <button data-coin-id="${id}" class="more-info">More Info</button>
                <span></span>
            </div>
        `;
    return card;
  }

  async function getMoreInfo(coinId) {
    const coin = await getJSON(`${COINS_API_URL}/${coinId}`);
    return coin;
  }

  function getJSON(url) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        $.ajax({
          url,
          success: (data) => {
            resolve(data);
          },
          error: (err) => {
            reject(err);
          },
        });
      }, 1000);
    });
  }

  function updateColumnsInSectionDynamically() {
    let columns = Math.floor(window.innerWidth / CARD_WITH);
    $(selectors.homeSection).css({
      gridTemplateColumns: `repeat(${columns},1fr)`,
      gridAutoRows: CARD_WITH,
    });
  }

  function init() {
    let homeSection = $(selectors.homeSection);

    if (!homeSection.length) {
      homeSection = $("<section>", {
        id: "homeSection",
        class: "some-class",
      });
    }

    homeSection.appendTo(selectors.mainContainer);

    updateColumnsInSectionDynamically();

    window.addEventListener("resize", updateColumnsInSectionDynamically);

    handleCoins();
  }

  function getCoinFromLocalStorage(){
    const coin = localStorage.getItem(MORE_INFO_LOCAL_STORAGE_KEY);
    return coin ? JSON.parse(coin) : {};
  }
});
