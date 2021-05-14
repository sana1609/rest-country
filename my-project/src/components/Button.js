import React from 'react';
import { IoIosArrowRoundBack } from "react-icons/io";

const BackButton = () => {
    return (
        <button className='mx-24 my-6 bg-primary p-3 text-primary shadow-md '>
        <IoIosArrowRoundBack size='1rem' style = {{display:"inline"}} />
        Back</button>
    )
}

export default BackButton;

