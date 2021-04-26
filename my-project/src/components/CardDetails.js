import React from 'react';
import NavBar from './Nav';

const DetailPage = () => {
    return (
        <div>
            <div>
                <div>
                    <img></img>
                </div>
                <div>
                    <h1>name</h1>
                    <div>
                        <ul className="px-6 py-1">
                            <li className="text-sm"><span className="font-semibold text-sm">Population</span>:</li>
                            <li className="text-sm"><span className="font-semibold medium text-sm">Region</span>:</li>
                            <li className="text-sm"><span className="font-semibold medium text-sm">Capital</span>:</li>
                        </ul>
                    </div>
                    <div>
                        Border Countries
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailPage;