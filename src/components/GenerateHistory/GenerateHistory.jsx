import { GENERATE_DATA } from "../../constanst"
import { QRCodeSVG } from 'qrcode.react';
import style from './generateHistory.module.css'


export const GenerateHistory = () => {

    const data = JSON.parse(localStorage.getItem(GENERATE_DATA) || "[]" );

    return (
    <div className={style.wrapper}>
        <h3 className = {style.title}>Your Generate History</h3>
         {data.map((text)=>{
            return <div className={style.item}  key={text}> 
            <p className={style.itemName}>{text}</p>
            <p><QRCodeSVG value={text} size={70}/></p>
           </div>
        })}
    </div>
  )
}