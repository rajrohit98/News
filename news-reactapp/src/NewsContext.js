import React, { createContext,useEffect, useState } from "react";
import axios from "axios";


export const NewsContext = createContext();

export const NewsContextProvider = (props) =>{
    const [data,setData] = useState()
    const apiKey = "4ea0729393744eecac642a909d0d22a7";

    useEffect(() => {
      axios
        .get
            (`https://newsapi.org/v2/everything?q=tesla&from=2021-04-29&sortBy=publishedAt&apiKey=${apiKey}`
        )
        .then(response => setData(response.data))
        .catch((error) => console.log(error));

    }, [data]);

    return(
        <NewsContext.Provider value = {{ data }}>
            {props.children}
        </NewsContext.Provider>
    );
};