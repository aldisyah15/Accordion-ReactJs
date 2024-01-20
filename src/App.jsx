import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {WebMain} from './pages/web-main';

function App() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<WebMain/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default App
