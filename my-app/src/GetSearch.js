import React from 'react'
import { useState, useEffect } from 'react'

const GetSearch = props => {
    const [isLoading, setLoading] = useState(true)
    const [search, setSearch] = useState()

    useEffect(()=>{
      async function loadSearch(){
        await fetch('http://localhost:4000/search')
      .then(results => results)
      .then(resData => {
        console.log(resData.json());
        //setSearch(resData.json());
        setLoading(false);
      })
      .catch(error=>console.log(error));
    }
    loadSearch();
    },[]);

    //console.log(search);
    if (isLoading){
        return <><div>Loading...</div></>
    } else {
        return (<>
            <h1>Search Successfull!</h1>
      </>)
    }
}


export default GetSearch
