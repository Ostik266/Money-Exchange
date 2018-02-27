// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let exchange = {};
    if (currency > 10000)
    return exchange = {error: "You are rich, my friend! We don't have so much coins for exchange"};
    if (currency < 0)
    return exchange;
    if (currency === 0)
    return exchange;
    if (currency === 50)
    return exchange = {"H":1};
    if (currency === 25)
    return exchange = {"Q":1};
    if (currency === 10)
    return exchange = {"D":1};
    if (currency === 5)
    return exchange = {"N":1}
    if (currency === 1)
    return exchange = {"P":1};
    else 
    {
        let H = 0;
        let Q = 0;
        let D = 0;
        let N = 0;
        let P = 0;

		H = Math.floor(currency/50);
        if (H>=1)
        currency = currency%50;
        Q = Math.floor(currency/25);
        if (Q>=1)
        currency = currency%25;
        D = Math.floor(currency/10);
        if (D>=1)
        currency = currency%10;
        N = Math.floor(currency/5);
        if (N>=1)
        P = currency%5;
        else P = currency;

        exchange = {"H": H, "Q": Q, "D": D, "N": N, "P": P }
        if (exchange.H === 0)
        delete exchange.H;
        if (exchange.Q === 0)
        delete exchange.Q;
        if (exchange.D === 0)
        delete exchange.D;
        if (exchange.N === 0)
        delete exchange.N;
        if (exchange.P === 0)
        delete exchange.P;
        return exchange;
    }
}
