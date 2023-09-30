import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
const { data: blogs, isPending, error} = useFetch('http://localhost:8000/blog');  
    return ( 
      <>
        {error && <div> {error} </div> }
      { isPending && <div> Loading .... </div> }
        <div className="home">   
         {blogs && <BlogList blogs = {blogs} title = "All Blogs"/>}
        </div>
      
      </>
     );
}
 
export default Home;