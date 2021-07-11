const EventEmitter = require('events')
const uuid = require('uuid')
const uid = uuid.v4()

class Logger extends EventEmitter{
    log(msg){
        //Call event
        this.emit('message', {id:uid, msg })
    }
}

module.exports = Logger