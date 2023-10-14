import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ComponentHandler from '../components/share/ComponentHandler'
import Default from '../screens/Default'

const RoutesComponent: React.FC = () => {
  return (
    <Routes>
      <Route index path='/' element = {<Default />}/>
      <Route path='/:component' element = {<ComponentHandler />}/>
    </Routes>
  )
}

export default RoutesComponent
