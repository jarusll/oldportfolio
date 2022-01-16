// import fs from 'fs';
// import path from 'path';
const fs = require('fs')
const path = require('path')

class Directory {

    constructor(dirPath){
        this.path = dirPath;
        this.files = [];
    }

    allFiles(){
        this.files = fs.readdirSync(this.path, {encoding: 'utf-8', withFileTypes: true})
                .filter(x => x.isFile())
                .map(x => path.resolve(this.path, x.name))
        return this;
    }

    byExtension(ext){
        this.files = this.allFiles().files.filter(x => path.extname(x).toLocaleLowerCase() == ext)
        return this;
    }

}

export default Directory;