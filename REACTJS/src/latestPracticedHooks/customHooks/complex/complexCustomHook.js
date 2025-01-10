import React, { useState } from "react";
import UseComplexComponentLogic from "./complexComponentLogic";
const  ComplexCustomHook = () => {
    let apiUrl = 'https://jsonplaceholder.typicode.com/todos/1';
    let {data, error, loading, handleClick, clearInfo} = UseComplexComponentLogic(apiUrl);  
    if (loading) {
        return <p>Loading...</p>;
      }
      if (error) {
        return <p>Error: {error}</p>;
      }
        return(
    <>
    <p>Some Complex Custom Hook</p>
<button onClick={handleClick}>Get Data</button><br />
<button onClick={clearInfo}>Clear Info</button><br />
{ data && <p>{`${data.id} ${data.title}`}</p>}

    </>
)
}
export default ComplexCustomHook