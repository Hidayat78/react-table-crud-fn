import React, { useState } from 'react';
import './EditModal.css';

const EditModal = ({ setEmodal, cData, data, setData, title, setTitle, setImage, image, setPrice, price }) => {

    const [field, setField] = useState(data)
    // const handleInput1 = (e) => {
    //     const newData = data.map((itm) => (
    //         itm.id === cData.id ? { ...itm, title: e.target.value } : itm


    //     ))
    //     setData(newData)
    // }
    // const handleInput2 = (e) => {
    //     const newData = data.map((itm) => (
    //         itm.id === cData.id ? { ...itm, price: e.target.value } : itm


    //     ))
    //     setData(newData)
    // }
    // const handleInput3 = (e) => {
    //     const newData = data.map((itm) => (
    //         itm.id === cData.id ? { ...itm, image: e.target.value } : itm


    //     ))
    //     setData(newData)
    // }
    const handleInput1 = (e) => {
        const newData = field.map((itm) => (
            itm.id === cData.id ? { ...itm, [e.target.name]: e.target.value } : itm
            // {...itm , [e.target.name] : [e.target.value]} : itm

        ))
        setField(newData)
        //  console.log(e.target.name);
        //  setField(newData);
    }

    const handleryes = (e) => {
        setData(field)
        setEmodal(false);
    }

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     upDateProduct()
    // }
    return (
        <>
            <div className='main-divv'>
                <div className="modal-container">
                    <form
                    // onSubmit={(e) => handleSubmit(e)}
                    >
                        <div className='text-field'>
                            <input type='text' name='title' defaultValue={title} className='title' placeholder='Title' onChange={handleInput1} /><br />
                            <input type='text' name='image' defaultValue={image} className='image-edit' placeholder='Image Url' onChange={handleInput1} /><br />
                            <input type='text' name='price' defaultValue={price} className='price' placeholder='Price' onChange={handleInput1} />
                            <div className='btn-grp'>
                                <button className='cancel1' onClick={() => setEmodal(false)}>cancel</button>
                                <button className='yes1' onClick={handleryes}>Update</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default EditModal  