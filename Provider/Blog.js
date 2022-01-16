// import { BLOG_PATH } from '@constants/globals';
import { BLOG_PATH } from '../constants/globals';
const {BLOG_PATH} = require( '../constants/globals');
const read = require('file-reader');

console.log(BLOG_PATH);

// wrapper for io actions
class Blog {

    constructor(blogPath){
        this.blogPath = blogPath;
        this.blogs = [];
    }

    all(){
        // get blog path 
        // read all
        // store in object
        // return
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