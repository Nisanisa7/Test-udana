import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ExtraPage, LandingPage } from '../../page'

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/person" element={<ExtraPage/>}/>
        </Routes>
    )
}

export default Routers
