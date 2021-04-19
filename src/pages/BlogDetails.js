import { useParams, useHistory } from "react-router-dom";
import useFetch from "../useFetch";

const BlogDetails = () => {
    const {id} = useParams();
    const {blogs: blog, error, ispending} = useFetch('http://localhost:8000/blogs/' + id);//oi je blog a click korbe thik oi blog a id deye dekhabe
    //console.log(blog);
    const history = useHistory();//if i want to redirect in the another page

    //=====delete er jonno=====
    const handleClick = () => {
        //alert('dfdfdf');
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }

    return ( 
        <div className="blog-preview">
            {ispending && <div className="gmm">Loading....</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                     <p>Written By {blog.author}</p>
                    <p>
                       {blog.body}
                    </p>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
            <h2>Blog Details - {id}</h2>
        </div>
     );
}
 
export default BlogDetails;