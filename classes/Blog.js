/*
    I am a blog, I convert md files to html. You can use me by `new Blog(/path/to/mdFile)`
*/

import File from "@classes/File"
const grayMatter = require('gray-matter')
const showdown = require('showdown')

class Blog {

    constructor(blogPath) {
        const converter = new showdown.Converter()
        let { data, content } = grayMatter((new File(blogPath)).contents())
        const html = converter.makeHtml(content)

        this.blogPath = blogPath
        this.metadata = data
        this.contents = html
    }

}

export default Blog