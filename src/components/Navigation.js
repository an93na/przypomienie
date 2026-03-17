import React from 'react'
import {Route, Routes} from 'react-router-dom'
import { Strona1 } from './Strona1'
import { StronaGlowna } from './StronaGlowna'
import { Strona2 } from './Strona2'
import { Strona3 } from './Strona3'
import { NotFound } from './NotFound'

export const Navigation = () => {
  return (
    <Routes>
        <Route path='/' element={<StronaGlowna/>} />
        <Route path='/strona1' element={<Strona1/>}/>
        <Route path='/strona2' element={<Strona2/>}/>
        <Route path='/strona3' element={<Strona3/>}/>
        <Route path='*' element={<NotFound/>}/>
    </Routes>
  )
}
