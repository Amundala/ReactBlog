import {useState, useEffect} from 'react';
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [name, setName] = useState('Amundala');
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() =>{
      const abortCont = new AbortController();
      setTimeout(() =>{
      fetch(url, {signal: abortCont.signal})
      .then(res => {
        console.log(res);
        if(!res.ok){
          throw Error("Didnt Fetch the resourcess!");
        }
        return res.json();
      })
      .then(data => {
        setData(data);
        setIsPending(false);
        setError(null);
      })
      .catch(error => {
        if(error.name === 'AbortError'){
          console.log("Abort Error on the way!");
        }else{
          setIsPending(false);
        setError(error.message);
        }
        
        
      })
      }, 1000)
    return () => abortCont.abort();
    }, [ url ]);
    return { data, isPending, error}
}

export default useFetch