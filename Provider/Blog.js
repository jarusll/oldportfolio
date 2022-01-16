import { BLOG_PATH } from '@constants/globals';
import filereader from 'file-reader';

console.log(BLOG_PATH);

// wrapper for io actions
class Blog {

    constructor(blogPath){
        this.blogPath = blogPath;
        this.blogs = [];
    }

    all(){
        return (new Directory(this.blogPath))
                    .byExtension('.md')
                    .map(x => fileread(x))
                    .map(x => x.objectify())
    }

    bySlug(slug){
    }

    byTag(tag){
    }

    byDate(){
    }

    byQuery(){
    }
}