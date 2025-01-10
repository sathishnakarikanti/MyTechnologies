import React from "react";

const Count = ({text, count}) => {
    console.log('Rendering count..!');
return (
    <>
<p>{`${text} - ${count}`}</p>
    </>
)
}
export default Count;