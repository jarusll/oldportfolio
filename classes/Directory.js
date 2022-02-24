const fs = require('fs')
const path = require('path')
import File from '@classes/File'

/*
    I am a directory, I list out files. 
*/
class Directory {

    constructor(dirPath){
        this.path = dirPath;
        this.files = [];
    }

    allFiles(){
        this.files = fs.readdirSync(this.path, {encoding: 'utf-8', withFileTypes: true})
                .filter(x => x.isFile())
                .map(x => new File(path.resolve(this.path, x.name)))
        return this.files
    }

}

export default Directory;