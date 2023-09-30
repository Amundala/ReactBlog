import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Tina');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        setIsPending(true);

        //create blog object
        const blog = { title, body, author };
        fetch('http://localhost:8000/blog', {
            method: 'POST',
            headers: { "Content-Type": "Application/json" },
            body: JSON.stringify(blog)
        }).then(
            () => {
                setIsPending(false);
                console.log('New Blog Added!');
                //history.go(-1);
                history.push('/');
            })
    }
    return (  
        <div className="create">
            <h2>Create a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input 
                    type="text" 
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea 
                    name="" 
                    id="" 
                    cols="30"
                    rows="10"
                    onChange={(e) => setBody(e.target.value)}
                    required
                 ></textarea>
                 <label> Blog Author</label>
                 <select 
                    name="" 
                    id=""
                    value={ author }
                    onChange={(e) => setAuthor(e.target.value)}
                 >
                    <option value="Tom"> Tom</option>
                    <option value="Tina"> Tina</option>
                 </select>
                 { !isPending && <button>Add Blog</button>}
                 { isPending && <button disabled>Addling Blog....</button>}
                 
            </form>
        </div>
    );
}
 
export default Create;