import React, { useEffect, useState } from 'react';
import './Search.css';
import {getData} from './api'

const Products = (props) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [data, setData] = useState(null);
    const callDataApi = async () => {
        const res = await getData();
        if (res === "500" || res === "404"){
            setData("apiError")
        }else{
            console.log(res)
            setData(res.data)
        }
    }

    useEffect( () => {
        callDataApi()
    }, []);
    if (!data) {
        return <h1>loading</h1>
    }
    else if (data==="apiError"){
       return <h1>Some problem occured</h1>
    }
    else{
    return (
    <div className="Search">
        <input type="text" placeholder="Search Name"
        onChange={ (event) => {setSearchTerm(event.target.value)} } />
        {data.filter((val) => {
            if(searchTerm === ""){
                return val
            }else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                return val
            }
            }).map((val, key) => {
            return <div className="name" key={key}> 
            <p> {val.name} </p>
            </div>;
        })}
    </div>
    );
    }
    
}

export default Products;