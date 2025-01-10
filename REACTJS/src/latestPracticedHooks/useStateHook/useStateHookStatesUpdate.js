import React, { useEffect, useState } from "react";

const useStateHook = () =>{
    const [firstField , handleFirstField] = useState('');
    const [secondField , handleSecondField] = useState('');
    const [thirdField , handleThirdField] = useState('');

    const [allFields, handleAllFields] = useState({
        firstField:'',
        secondField:'',
        thirdField:''
    })
    
    const handleChange = (e) => {
        let {name, value} = e.target

    // Update the corresponding field
    if (name === "firstField") {
        handleFirstField(value);
      } else {
        handleSecondField(value);
      }
     
        //appending letter by letter, here we not able to remove the data once update in third field we can do it by now 2 ways.
       
        // if("firstField" === name){
        //     handleFirstField(value)
        //     let latestKey = value.replace(firstField,'');
        // let data = `${thirdField}${latestKey}`
        // handleThirdField(data);
        // }
        // else{
        //     handleSecondField(value)
        //     let latestKey = value.replace(secondField,'');
        // let data = `${thirdField}${latestKey}`
        // handleThirdField(data);
        // }

        // let test = value
        // let test1 = test.split("") 
        // handleThirdField(prev => `${prev}${test1[test1.length-1]}`)
        // if('firstField' === name){
        // handleFirstField(value)
        // }
        // else{
        // handleSecondField(value)
        // }
    }
       // In this way are updating the state in first field and second field at fixed position so we can mutate the thirdField state value by using useEffect hook.
       useEffect(() => {
        handleThirdField(`${firstField}${secondField}`);
      }, [firstField, secondField]);
 

    const handleChangeState = (e) => {
    let {name, value} = e.target;
    handleAllFields(prev => ({
        ...prev, [name]:value
    }))
    }
      useEffect(() => {
        handleAllFields(prev => ( {...prev, thirdField:`${allFields.firstField}${allFields.secondField}`}));
      }, [allFields.firstField, allFields.secondField]);
        console.log(allFields.firstField,'firstField');
    return(
        <>
        useStateHook<br/>
        <p>Printing first field entered, second field entered text into third field.</p>
        <input type="text" placeholder='first field' name="firstField" value={firstField} onChange={(e)=>handleChange(e)}/><br/>
        <input type="text" placeholder='second field field' name="secondField" value={secondField} onChange={(e)=>handleChange(e)}/><br/>
        <input type="text" placeholder='third field' value={thirdField} name="thirdField" readOnly/>
        
        <p>Here intializing states in object.</p>
        <input type="text" placeholder='first field' name="firstField" value={allFields.firstField} onChange={(e)=>handleChangeState(e)}/><br/>
        <input type="text" placeholder='second field' name="secondField" value={allFields.secondField} onChange={(e)=>handleChangeState(e)}/><br/>
        <input type="text"placeholder='third field' value={allFields.thirdField} name="thirdField" readOnly/>
        <br/>
        <br/>
        <br/>
        <input type='text' placeholder='third field' value={`${allFields.firstField}${allFields.secondField}`} readOnly></input><br/><br/>
        </>
    )
}
export default useStateHook;