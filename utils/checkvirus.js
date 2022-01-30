const dotenv = require('dotenv');
dotenv.config();
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
  //function for checking if url or attachment has a virus
  const checkVirus = (url) => {
    const options = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'x-apikey': `${process.env.VTAPIKEY}`,
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({url: `${url}`})
      };
      
      fetch('https://www.virustotal.com/api/v3/urls', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}

module.exports = { checkVirus }