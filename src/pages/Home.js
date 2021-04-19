import { useState, useEffect } from 'react';
import BlogList from '../BlogList';
import useFetch from '../useFetch';

const HomePage = () => {
    // const HandleClick = (name, e) => {
    //    //alert('Hello My name is ' + name);
    //    console.log('Hello My name is ' + name, e.target);
    // }
    //    const [name, setName]=useState('Arif');
    //    const [age, setAge]=useState(30);
    //    const handleClick = () => {
    //        //alert('cffff');
    //        setName('Firoz');
    //        setAge(20);
    //    }

    const {blogs: blog, error, ispending} = useFetch('http://localhost:8000/blogs/');

    // const [myBlogs, setBlogs] = useState([
    //     { title: 'This is my first blog', body: 'My first body paragraph', author: 'Arif', id: 1 },
    //     { title: 'This is my second blog', body: 'My second body paragraph', author: 'Atul', id: 2 },
    //     { title: 'This is my thired blog', body: 'My 3rd body paragraph', author: 'Ontu', id: 3 },
    //     { title: 'This is my forth blog', body: 'My 4th body paragraph', author: 'Bappy', id: 4 }
    // ]);

    // const [myBlogs, setMyBlogs]=useState(null);
    // const [setIspending, setIspending]=useState(true);
    // const [error, setError]=useState(null);

    // const handleDelete = (id) => {
    //     const newBlogs = myBlogs.filter(rowData => rowData.id != id);
    //     setBlogs(newBlogs);
    // }

    // const [name, setName] = useState('Bappy islam');

    // useEffect(() => {
    //     console.log('Use Effect');
    // }, []);

    return (
        <div className="home">
            {error && <div> {error} </div>}
            {ispending && <div> Loading.... </div>}
            {blog && <BlogList blog={blog}> Loading.... </BlogList>}
            {/* <BlogList myBlogs={myBlogs} anotherTitle="This Is Another Propes" handleDelete={handleDelete}></BlogList>
            <button onClick={() => setName('Arif')}>Chick To Change</button>
            <p>{name}</p> */}
        </div>
    );
}

export default HomePage;