import React from "react";
import ProductCard from "../components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../components/Modal";
import Button from "../components/Button";
import Input from "../components/Input"

const Product = () => {    
    const {modal}= useSelector( state=> state.modal)
    const dispatch =  useDispatch
    const [productInfo, setProductInfo] = useState({name: "",price:"", url:""})
    const onChangeFunc = (e,type) => {
        if(type == "url"){
            setProductInfo(prev => ({...prev, [e.target.name]: URL.createObjectURL (e.target.files[0])}))
        }else{
            setProductInfo(prev => ({...prev, [e.target.name]: e.target.value}))
         }
    }
    console.log(modal,"modal")
    const buttonFunc = () =>{
        dispatch()
    }
    const contentModal = (
        <>
            <Input type={"text"} placeholder={"Ürün ekle"}  name={"name"}  id={"name"}  onChange={e=> onChangeFunc(e,"name")}    />
            <Input type={"text"} placeholder={"Fiyat ekle"} name={"price"} id={"price"} onChange={e=> onChangeFunc(e,"price")}   />
            <Input type={"file"} placeholder={"Resim seç"}  name={"url"}   id={"url"}   onChange={e=> onChangeFunc(e,"file")}    />
            <Button btnText={"Oluştur"} onClick={buttonFunc} />
        </>
    )
    return (
        <div>
           <ProductCard/>
           {modal && <Modal content={contentModal} title = {"Ürün oluştur"}  />} 
        </div>

        )
}

export default Product 