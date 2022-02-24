const {statSync} = require('fs')
const read = require('read-file')
const path = require('path')

class File {
    constructor(filepath){
        this.path = filepath
    }

    contents(){
        return read.sync(this.path, 'utf8')
    }

    name(){
        return path.basename(this.path)
    }

    isFile(){
        return statSync(this.path).isFile()
    }

}

export default File