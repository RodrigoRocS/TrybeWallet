const mockStore = {
  user: {
    email: 'tryber@teste.com',
  },
  wallet: {
    currencies: [
      'USD',
      'CAD',
      'GBP',
      'ARS',
      'BTC',
      'LTC',
      'EUR',
      'JPY',
      'CHF',
      'AUD',
      'CNY',
      'ILS',
      'ETH',
      'XRP',
      'DOGE',
    ],
    expenses: [
      {
        id: 0,
        value: '5',
        currency: 'USD',
        method: 'Dinheiro',
        tag: 'Alimentação',
        description: 'dolar',
        exchangeRates: {
          USD: {
            code: 'USD',
            codein: 'BRL',
            name: 'Dólar Americano/Real Brasileiro',
            high: '4.9383',
            low: '4.8949',
            varBid: '-0.0168',
            pctChange: '-0.34',
            bid: '4.901',
            ask: '4.9015',
            timestamp: '1681400826',
            create_date: '2023-04-13 12:47:0',
          },
          USDT: {
            code: 'USD',
            codein: 'BRLT',
            name: 'Dólar Americano/Real Brasileiro Turismo',
            high: '4.97',
            low: '4.91',
            varBid: '-0.045',
            pctChange: '-0.91',
            bid: '4.78',
            ask: '5.07',
            timestamp: '1681400160',
            create_date: '2023-04-13 12:36:00',
          },
          CAD: {
            code: 'CAD',
            codein: 'BRL',
            name: 'Dólar Canadense/Real Brasileiro',
            high: '3.6878',
            low: '3.6576',
            varBid: '0.0131',
            pctChange: '0.36',
            bid: '3.6712',
            ask: '3.6726',
            timestamp: '1681400826',
            create_date: '2023-04-13 12:47:0',
          },
          GBP: {
            code: 'GBP',
            codein: 'BRL',
            name: 'Libra Esterlina/Real Brasileiro',
            high: '6.1817',
            low: '6.1303',
            varBid: '0.003',
            pctChange: '0.05',
            bid: '6.14',
            ask: '6.1426',
            timestamp: '1681400828',
            create_date: '2023-04-13 12:47:08',
          },
          ARS: {
            code: 'ARS',
            codein: 'BRL',
            name: 'Peso Argentino/Real Brasileiro',
            high: '0.0231',
            low: '0.0228',
            varBid: '-0.0002',
            pctChange: '-0.87',
            bid: '0.0228',
            ask: '0.0228',
            timestamp: '1681400826',
            create_date: '2023-04-13 12:47:03',
          },
          BTC: {
            code: 'BTC',
            codein: 'BRL',
            name: 'Bitcoin/Real Brasileiro',
            high: '150916',
            low: '148200',
            varBid: '1153',
            pctChange: '0.77',
            bid: '150078',
            ask: '150129',
            timestamp: '1681400829',
            create_date: '2023-04-13 12:47:09',
          },
          LTC: {
            code: 'LTC',
            codein: 'BRL',
            name: 'Litecoin/Real Brasileiro',
            high: '467.71',
            low: '454.79',
            varBid: '5.25',
            pctChange: '1.15',
            bid: '464',
            ask: '464.9',
            timestamp: '1681400825',
            create_date: '2023-04-13 12:47:05',
          },
          EUR: {
            code: 'EUR',
            codein: 'BRL',
            name: 'Euro/Real Brasileiro',
            high: '5.449',
            low: '5.4',
            varBid: '0.0163',
            pctChange: '0.3',
            bid: '5.4192',
            ask: '5.4224',
            timestamp: '1681400822',
            create_date: '2023-04-13 12:47:02',
          },
          JPY: {
            code: 'JPY',
            codein: 'BRL',
            name: 'Iene Japonês/Real Brasileiro',
            high: '0.03724',
            low: '0.03679',
            varBid: '0.0001',
            pctChange: '0.27',
            bid: '0.03703',
            ask: '0.03705',
            timestamp: '1681400830',
            create_date: '2023-04-13 12:47:1',
          },
          CHF: {
            code: 'CHF',
            codein: 'BRL',
            name: 'Franco Suíço/Real Brasileiro',
            high: '5.5582',
            low: '5.4792',
            varBid: '0.0398',
            pctChange: '0.73',
            bid: '5.5254',
            ask: '5.5284',
            timestamp: '1681400826',
            create_date: '2023-04-13 12:47:06',
          },
          AUD: {
            code: 'AUD',
            codein: 'BRL',
            name: 'Dólar Australiano/Real Brasileiro',
            high: '3.3331',
            low: '3.2884',
            varBid: '0.0328',
            pctChange: '1',
            bid: '3.3214',
            ask: '3.3227',
            timestamp: '1681400826',
            create_date: '2023-04-13 12:47:06',
          },
          CNY: {
            code: 'CNY',
            codein: 'BRL',
            name: 'Yuan Chinês/Real Brasileiro',
            high: '0.718',
            low: '0.7127',
            varBid: '-0.0049',
            pctChange: '-0.68',
            bid: '0.7134',
            ask: '0.7137',
            timestamp: '1681400822',
            create_date: '2023-04-13 12:47:02',
          },
          ILS: {
            code: 'ILS',
            codein: 'BRL',
            name: 'Novo Shekel Israelense/Real Brasileiro',
            high: '1.3498',
            low: '1.3399',
            varBid: '-0.0046',
            pctChange: '-0.34',
            bid: '1.3407',
            ask: '1.3411',
            timestamp: '1681400825',
            create_date: '2023-04-13 12:47:05',
          },
          ETH: {
            code: 'ETH',
            codein: 'BRL',
            name: 'Ethereum/Real Brasileiro',
            high: '9946.34',
            low: '9421.24',
            varBid: '319.55',
            pctChange: '3.34',
            bid: '9846.91',
            ask: '9900.31',
            timestamp: '1681400830',
            create_date: '2023-04-13 12:47:10',
          },
          XRP: {
            code: 'XRP',
            codein: 'BRL',
            name: 'XRP/Real Brasileiro',
            high: '2.54',
            low: '2.49',
            varBid: '0.02',
            pctChange: '0.79',
            bid: '2.52',
            ask: '2.52',
            timestamp: '1681400830',
            create_date: '2023-04-13 12:47:10',
          },
          DOGE: {
            code: 'DOGE',
            codein: 'BRL',
            name: 'Dogecoin/Real Brasileiro',
            high: '0.43501',
            low: '0.40478',
            varBid: '0.02091',
            pctChange: '5.14',
            bid: '0.42729',
            ask: '0.42729',
            timestamp: '1681400804',
            create_date: '2023-04-13 12:46:44',
          },
        },
      },
    ],
    editor: false,
    idToEdit: 0,
    errorMessage: null,
    ask: 24.51,
  },
};

export default mockStore;
