import React from "react";

const ProductCard = ({dt}) => {
    return(
        <div className="w-[200px] h-[200px] relative m-2 rounded-md">
            <img src="dt?.url" className="w-full h-full absolute rounded-md"  alt="" />
            <div className="absolute left-0 bottom-0 bg-indigo-600 text-white w-full px-2">
                <div className="text-lg font-semibold"> {dt?.name}   </div>
                <div> {dt?.price}$ </div>
            </div>
        </div>
    )
}

export default ProductCard