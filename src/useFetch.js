import {useState, useEffect} from 'react';
const useFetch = (url) => {
    const [blogs, setBlogs]=useState(null);
    const [ispending, setIspending]=useState(true);
    const [error, setError]=useState(null);

    useEffect(() => {
        //console.log('Use Effect');
        setTimeout(() => {
            fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw Error('Could not fetch the data for that resource');
                }
                return res.json();
            })
            .then(data => {
                setBlogs(data);
                setIspending(false);
                setError(null);
            })
            .catch(err => {
                setIspending(false);
                setError(err.message);
            })
        }, 1000);
    }, [url]);
    return {blogs, ispending, error}
}
 
export default useFetch;