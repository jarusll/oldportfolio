import { BLOG_PATH } from "@constants/globals"
import { useTheme } from 'next-themes'
import { useState } from "react"
import Blog from "@classes/Blog"
import Directory from "@classes/Directory"
import BlogHead from "@components/BlogHead"
import clsx from "clsx"

function Blogs({ blogs }) {
    const { theme, setTheme } = useTheme()
    const [count, setCount] = useState(5)

    return (
        <div className="w-full self-center flex justify-center ibm_plex">
            {/* Theme toggle */}
            <button className="absolute top-0 right-0 m-1"
                onClick={() => setTheme(theme == "dark" ? "light" : "dark")}>
                <i className="fas fa-adjust p-2 hover:bg-gray-300 dark:hover:bg-gray-800 rounded-full transition-colors"></i>
            </button>

            {/* Blogs */}
            <div className="flex flex-col justify-start w-full">
                <h3 className="uppercase text-4xl text-center">Blogs</h3>
                <div className="p-2">
                    <ul>
                        {blogs.slice(0, count).map(blog => <BlogHead {...blog} />)}
                    </ul>
                </div>

                {/* Show more */}
                <button className="bg-green-600 text-white px-2 py-1 rounded text-xl hover:bg-green-700 self-center"
                    onClick={() => setCount(count + 5)} className={clsx({invisible: count >= blogs.length})}>More
                </button>

            </div>
        </div>
    )
}

export async function getStaticProps(ctx) {
    const blogs = (new Directory(BLOG_PATH)).allFiles().map(file => (new Blog(file.path)).metadata)
    return {
        props: {
            blogs 
        }
    }
}

export default Blogs;