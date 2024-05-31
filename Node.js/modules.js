//os
const os = require('os')

const user = os.userInfo()
console.log(user)
console.log(`The system uptime is ${os.uptime()}`)
//...and many more

//path
const path = require('path')
console.log(path.sep)
const filepath = path.join('/content/','subfolder','test.txt')