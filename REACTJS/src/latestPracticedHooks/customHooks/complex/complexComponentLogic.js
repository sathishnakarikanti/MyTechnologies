import React, { useEffect, useState } from "react";

const UseComplexComponentLogic = (apiUrl) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
        setLoading(true);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    const handleClick = () =>{
      fetchData();
    }

    const clearInfo = () => { 
      setData(null)
    }

    return {data, error, loading, handleClick, clearInfo}
}
export default UseComplexComponentLogic 
