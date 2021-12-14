const ExchangeRate = ({exchangedData}) => {
    return (
        <div className="exchange-rate">
            <h3>Exchange Rate</h3>
            <h1>{exchangedData.exchangeRate}</h1>
            <p>{exchangedData.primaryCurrency} to {exchangedData.secondaryCurrency}</p>
        </div>
    )
}

export default ExchangeRate
