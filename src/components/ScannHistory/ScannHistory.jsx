import { SCAN_DATA } from "../../constanst"
import {QRCodeSVG} from 'qrcode.react';
import style from './ScannHistory.module.css'

export const ScannHistory = () => {
    const data = JSON.parse(localStorage.getItem(SCAN_DATA) || "[]" );

    return (
     <div className={style.wrapper}>
         <h3 className = {style.title}>Your Scann History</h3>
          {data.map((text)=>{
             return <div className={style.item}  key={text}> 
             <p className={style.itemName}>{text}</p>
             <p><QRCodeSVG value={text} size={70}/></p>
            </div>
         })}
     </div>
   )
}
