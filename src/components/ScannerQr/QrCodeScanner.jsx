import { Scanner } from '@yudiel/react-qr-scanner';
import { useState } from 'react';
import style from "./qrCodeScanner.module.css";
import { SCAN_DATA } from "../../constanst"


export function QrCodeScanner() {
    let [scanned, setScanned] = useState(null);

    function scanHandler(result) {
        setScanned(result[0].rawValue)

        const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || "[]" );
        localStorage.setItem(SCAN_DATA, JSON.stringify([...prevData, result[0].rawValue]))
    }

    return (
        <div className={style.container}>
            <Scanner
            onScan={scanHandler} 
            components = {{
                    audio: false,
                    zoom: false,
                }}
            styles = {{
                container: { width: 300, height: 300}
            }}
            />
            <p className={style.result}>Result</p>
            <a href="" className={style.link}>{scanned}</a>
        </div>
    )
}