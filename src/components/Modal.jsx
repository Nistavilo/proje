import React from "react";
import { IoMdClose } from "react-icons/io";
import Input from "./Input";

const Modal = ({title, content, btnText, btnFunc}) => {
    const onChangeFunc = (e) => {

    }
    return(
        <div className="fixed top-0 left-0 bottom-0 right-0 w-full h-screen flex items-center justify-center">
            <div className="w-1/3 bg-white shadow-lg rounded-m p-4">
                <div className="border-b py-3 flex items-center justify-between">
                    <div className="text-2xl"> {title} </div>
                    <IoMdClose size={24}/>
                </div>
                <Input placeholder={"Ürün ekle"} name={"name"} id={"name"} onChange={onChangeFunc}    />
            </div>
        </div>
    )
}

export default Modal