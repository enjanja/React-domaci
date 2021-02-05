import React from 'react';
import './Tekst.css';

function Tekst(props) {
    return (
        <>
            <div className='text_full'>
                <div className="text_container">
                    <div className="text_heading">
                        <h4>{props.heading}</h4>
                    </div>
                    <div className="text_body">
                        <p>{props.text}</p>
                    </div>
                    <div className="text_footer">
                        {props.footer}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tekst