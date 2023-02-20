const num: number = 0;
const fn: () => number = () => 5;



type Numeric = number | string;
type Countries = string[];
type Numbers = number[];
type AnyArray = any[];

const numeric: Numeric = '5';

type _Coin = {
    currency: number;
    symbol: string;
    countries: Countries;
}


interface Coin {
    currency: number;
    symbol: string;
    countries: Countries;
}

const coin: Coin = {
    currency: 3,
    symbol: 'NIS',
    countries: ['israel', 'russia']
}



const renderCoinCard = (coin: Coin) => {
    return `<h1>${coin.symbol}<h1>`
}


