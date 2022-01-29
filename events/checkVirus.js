module.exports = {
    name: 'messageCreate',
    execute(msg) {
        
        if(msg.attachments){
            console.log(`Attached message sent at ${msg.createdAt}`)
        }
        
    }
}