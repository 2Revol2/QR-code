import {QRCodeSVG} from 'qrcode.react';
import { useState } from 'react';
import style from'./qrCodeGenerator.module.css';
import { GENERATE_DATA } from "../../constanst"


export function QrCodeGenerator() {
    const [value, setValue] = useState('')
    const [result, setResult] = useState('')


    function onClickHandler() {
        setResult(value)

        const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || "[]" );
        localStorage.setItem(GENERATE_DATA, JSON.stringify([...prevData, value]))
        setValue('')
    }

    function onChangeHandler(event) {
        setValue(event.target.value);
        setResult('')
    }

    return (
        <div className={style.container}>
                <input 
                  type="text" value={value} 
                  onChange={onChangeHandler} 
                  className={style.input} 
                  placeholder='Type your text'
                  />
              <button type='button' onClick={onClickHandler} className={style.button}>Generate QR</button>
              {result !== '' && (
                <QRCodeSVG value={result} size={200}/>
                )}
        </div>
    )
}