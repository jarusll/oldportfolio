import Directory from "@providers/Directory"

function Blogs({ blogs }) {
    return (
        <div>
            {JSON.stringify(blogs, null, 4)}
        </div>
    )
}

export async function getStaticProps(ctx) {
    const dirOutput = new Directory('/home/jarusll').allFiles().byExtension('.png').files;
    return {
        props: {
            blogs: dirOutput
        }
    }
}

export default Blogs;