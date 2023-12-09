import React from "react";
import { IoMdClose } from "react-icons/io";
import Input from "./Input";
import { useState } from "react";
import Button from "./Button";

const Modal = ({title, content, btnText, btnFunc}) => {
    const [productInfo, setProductInfo] = useState({name: "",price:"", url:""})
    const onChangeFunc = (e,type) => {
        if(type == "url"){
            setProductInfo(prev => ({...prev, [e.target.name]: URL.createObjectURL (e.target.files[0])}))
        }else{
            setProductInfo(prev => ({...prev, [e.target.name]: e.target.value}))

        }
    }
    console.log(productInfo,"productInfo")
    return(
        <div className="fixed top-0 left-0 bottom-0 right-0 w-full h-screen flex items-center justify-center">
            <div className="w-1/3 bg-white shadow-lg rounded-m p-4">
                <div className="border-b py-3 flex items-center justify-between">
                    <div className="text-2xl"> {title} </div>
                    <IoMdClose size={24}/>
                </div>
                <Input type={"text"} placeholder={"Ürün ekle"}  name={"name"}  id={"name"}  onChange={e=> onChangeFunc(e,"name")}    />
                <Input type={"text"} placeholder={"Fiyat ekle"} name={"price"} id={"price"} onChange={e=> onChangeFunc(e,"price")}    />
                <Input type={"file"} placeholder={"Resim seç"}  name={"url"}   id={"url"}   onChange={e=> onChangeFunc(e,"file")}    />
                <Button btnText={btnText} onClick={btnFunc} />
            </div>
        </div>
    )
}

export default Modal