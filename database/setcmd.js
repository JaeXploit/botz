const fs = require('fs')
let _scommand = JSON.parse(fs.readFileSync('./database/_scommand.json'))

/////***πππππππ πΌπΏπΏ πΎππΏ & πΏπππππ***\\\\\
const addCmd = (id, command) => {
    const obj = { id: id, chats: command }
    _scommand.push(obj)
    fs.writeFileSync('./database/_scommand.json', JSON.stringify(_scommand))
    }
const getCommandPosition = (id) => {
    let position = null
    Object.keys(_scommand).forEach((i) => {
    if (_scommand[i].id === id) {
    position = i
    }
    })
    if (position !== null) {
    return position
    }
    }
const getCmd = (id) => {
    let position = null
    Object.keys(_scommand).forEach((i) => {
    if (_scommand[i].id === id) {
    position = i
    }
    })
    if (position !== null) {
    return _scommand[position].chats
    }
    }
const checkSCommand = (id) => {
    let status = false
    Object.keys(_scommand).forEach((i) => {
    if (_scommand[i].id === id) {
    status = true
    }
    })
    return status
    }

module.exports = {
    _scommand,
    addCmd,
    getCommandPosition,
    getCmd,
    checkSCommand
}