import {Link} from 'react-router-dom';
const HeaderNav = () => {
    return (  
        <nav className="navbar">
             <h1>Here Navbar</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/about">About Us</Link>
                <Link to="/contact">Contact Us</Link>
                <Link to="/gallary">Gallary</Link>
                <Link to="/create" style={{color:"white",backgroundColor: '#f1356d',borderRadius:'8px'}}>Create A Blog</Link>
            </div>
        </nav>
    );
}
 
export default HeaderNav;