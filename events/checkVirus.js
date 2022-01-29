module.exports = {
    name: 'messageCreate',
    execute(msg) {
        if(msg.attachments){
            msg.delete()
            console.log(`Deleted a message at ${msg.createdAt}`)
        }
    }
}