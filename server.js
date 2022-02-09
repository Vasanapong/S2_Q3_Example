const axios = require('axios')

const appStart = async () => {

    if (process.argv[2] !== 'BEQSSF' && process.argv[2] !== 'BM70SSF') {
        console.log('Please insert fundcode : node server.js BEQSSF or node server.js BM70SSF')
        return
    }

    let fundCode = process.argv[2]
    let fetchData = await axios.get('https://codequiz.azurewebsites.net/', { headers: { Cookie: "hasCookie=true" } }).then(res => res.data);

    if(fundCode === 'BEQSSF'){
        let fundIndex = fetchData.indexOf(fundCode)
        let result = fetchData.slice(fundIndex+15,fundIndex+21)
        console.log(result)
    }

    if(fundCode === 'BM70SSF'){
        let fundIndex = fetchData.indexOf(fundCode)
        let result = fetchData.slice(fundIndex+17,fundIndex+23)
        console.log(result)
    }

}

appStart()