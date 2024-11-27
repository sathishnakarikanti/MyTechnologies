import React from "react";
const UsememoChildComp = (props) => {
    console.log(props,'props')
return (
    <p>{props.user}</p>
)
}
export default UsememoChildComp;