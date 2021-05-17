import React from 'react';
import { IoIosArrowRoundBack } from "react-icons/io";
import {Link} from "react-router-dom";
  

const BackButton = () => {
    return (
        <Link to={'/'}>
            <button className='m-6 bg-primary p-3 text-primary shadow-md '>
            <IoIosArrowRoundBack size='1rem' style = {{display:"inline"}} />
            Back</button>
        </Link>
    )
}

export default BackButton;

