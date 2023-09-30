import { Link } from 'react-router-dom';
const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Ooops!</h2>
            <p>This Page Cannot Be Found!</p>
            <Link to='/'> Back to the HomePage</Link>
        </div>
     );
}
 
export default NotFound;