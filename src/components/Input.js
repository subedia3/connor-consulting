import React from "react";
import './Input.css';

function Input(props){

    const STYLES = ['input_short', 'input_medium','input_large', 'input-footer_short','input-footer_medium','input-footer_large'];

    const checkInputStyle = STYLES.includes(props.inputStyle) ? props.inputStyle : STYLES[0];


        if(props.textarea === 'textarea' ){
            return(
                <div className={`input-div ${checkInputStyle}`}>
                <textarea 
                className='input'
                type='text'
                name={props.name}
                placeholder={props.placeholder}
                required
                >
                </textarea>
                </div>
        );
        }


        else{
            return(
                <div className={`input-div ${checkInputStyle}`}>
                <input 
                className='input'
                type={props.type}
                name={props.name}
                placeholder={props.placeholder}
                required
                >
                </input>
                </div>
        );

        }

        


 
}

export default Input;