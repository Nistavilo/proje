import React from "react";


const Button = ({onClick, btnText}) => {
    return(
        <button oncClick ={ onClick} > {btnText} </button>
        )
}

export default Button