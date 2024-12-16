import { Route, Routes } from 'react-router-dom'
import { QrCodeScanner } from "./components/ScannerQr/QrCodeScanner"
import { QrCodeGenerator } from "./components/GenerateQr/QrCodeGenerator"
import { Navigation } from './components/Navigation/Navigation'
import { GenerateHistory } from "./components/GenerateHistory/GenerateHistory"
import { ScannHistory } from "./components/ScannHistory/ScannHistory"

export function Layout() {
    return (
        <>
        <Navigation/>
            <Routes>
                    <Route path="/generate" element={<QrCodeGenerator/>} index />
                    <Route path="/scanner" element = {<QrCodeScanner/> }/>
                    <Route path='/generate/history' element = {<GenerateHistory/> }/>
                    <Route path='/scann/history' element = {<ScannHistory/> }/>
            </Routes>
        </>
    )
}