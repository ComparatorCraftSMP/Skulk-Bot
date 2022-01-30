module.exports = {
    name: 'messageCreate',
    execute(msg) {
        //function for checking if url or attachment has a virus
        const checkVirus = (url) => {
            const options = {
                method: 'POST',
                headers: {
                  Accept: 'application/json',
                  'x-apikey': `${process.env.VT-API-KEY}`,
                  'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: new URLSearchParams({url: `${url}`})
              };
              
              fetch('https://www.virustotal.com/api/v3/urls', options)
                .then(response => response.json())
                .then(response => console.log(response))
                .catch(err => console.error(err));
        }
        //Checks if message sent has a url,
        const urlCheck = new RegExp("([a-zA-Z0-9]+://)?([a-zA-Z0-9_]+:[a-zA-Z0-9_]+@)?([a-zA-Z0-9.-]+\\.[A-Za-z]{2,4})(:[0-9]+)?(/.*)?");
        if(urlCheck.test(msg)) {
            console.log(`${msg.author.tag} sent a URL \nURL: ${urlCheck.exec(msg)[0]}`);
        }
        //checks if message sent has an attachment
        if(msg.attachments){
            console.log(`Attached ${msg.attachments.size} message sent at ${msg.createdAt}`)
        }
    }
}