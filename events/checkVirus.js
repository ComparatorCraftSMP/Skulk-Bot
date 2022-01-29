module.exports = {
    name: 'messageCreate',
    execute(msg) {
        const urlCheck = new RegExp("([a-zA-Z0-9]+://)?([a-zA-Z0-9_]+:[a-zA-Z0-9_]+@)?([a-zA-Z0-9.-]+\\.[A-Za-z]{2,4})(:[0-9]+)?(/.*)?");
        if(urlCheck.test(msg)) {
            console.log("It has an URL!");
            console.log(urlCheck.exec(msg)[0]);
        }
        if(msg.attachments){
            console.log(`Attached ${msg.attachments.size} message sent at ${msg.createdAt}`)
        }
    }
}