document.addEventListener('DOMContentLoaded', () => {
    const apiKey = '17aee7e966ff04f01e95f2d62c1f9aa1';
    const apiUrl = `http://api.coinlayer.com/live?access_key=${apiKey}&symbols=BTC,ETH,LTC,XRP,BCH`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            document.getElementById('btc-price').textContent = `$${data.rates.BTC}`;
            document.getElementById('eth-price').textContent = `$${data.rates.ETH}`;
            document.getElementById('ltc-price').textContent = `$${data.rates.LTC}`;
            document.getElementById('xrp-price').textContent = `$${data.rates.XRP}`;
            document.getElementById('bch-price').textContent = `$${data.rates.BCH}`;
        })
        .catch(error => {
            console.error('Error fetching the cryptocurrency prices:', error);
            document.getElementById('btc-price').textContent = 'Error fetching price';
            document.getElementById('eth-price').textContent = 'Error fetching price';
            document.getElementById('ltc-price').textContent = 'Error fetching price';
            document.getElementById('xrp-price').textContent = 'Error fetching price';
            document.getElementById('bch-price').textContent = 'Error fetching price';
        });
});
