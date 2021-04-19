import { Link } from "react-router-dom";

const BlogList = ({myBlogs }) => {
    
    return (
        <div className="blog-list">
            {/* <h2>{anotherTitle}</h2> */}
            {myBlogs.map((rowData) => (
               <div className="blog-preview" key={rowData.id}>
                   <Link to={`/blogs/${rowData.id}`}>
                        <h2>{rowData.title}</h2>
                        <h2>And body text {rowData.body}</h2>
                        <p>Written by {rowData.author}</p>
                        {/* <button onClick={() => handleDelete(rowData.id)}>Delete Here</button> */}
                   </Link>
               </div>
            ))}
        </div>
      );
}
 
export default BlogList;