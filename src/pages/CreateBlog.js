import { useState } from 'react';
import {useHistory} from 'react-router-dom';//if i want to redirect in the another page

const CreateBlog = () => {
    const [title, setTitle] = useState('');//form a je input fild ata tai avabe age dete hoy
    const [body, setBody] = useState('');//form a je input fild ata tai avabe age dete hoy
    const [author, setAuthor] = useState('arif');//form a je input fild ata tai avabe age dete hoy==arif na delow hobe

    const [ispending, setIsPending] = useState(false);///oi je loading er issues ta
    const history = useHistory();//if i want to redirect in the another page

    const handleSubmit = (e) => {//oi je form a data post korbo tai
      e.preventDefault();
      const blog ={title, body, author}

      setIsPending(true);

      fetch('http://localhost:8000/blogs', {
         method: 'POST',
         headers: {"Content-Type": "application/json"},
         body:JSON.stringify(blog)
      }).then(() => {
          console.log('new blog added');
          setIsPending(false);
          history.push('/');//oi je submit button a click dele from er data submit hoye home page a redirect korbe tai
      });
    }

    return (  
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input type="text" placeholder="Enter title" value={title} onChange={(e) => setTitle(e.target.value)} required/>
                <label>Blog Body:</label>
               <textarea placeholder="Enter body" value={body} onChange={(e) => setBody(e.target.value)} required></textarea>
               <label>Blog Author:</label>
               <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                <option value="arif">Arif</option>
                <option value="firoj">Firoj</option>
                <option value="atul">Atul</option>
                <option value="khan">Khan</option>
                <option value="bappy">Bappy</option>
               </select>
               {!ispending && <button>Add Blog</button>}
               {ispending && <button disabled>Add Blog.....</button>}
              
            </form>
        </div>
    );
}
 
export default CreateBlog;