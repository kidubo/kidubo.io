import React from 'react'
import Nav from './Nav';
import Data from '../constant/Data.json';
import PageContent from '../components/page/PageContent';


const App = () => {
  return (
    <div>
        <Nav name = {Data.name} profilePic={Data.profilePic}/>
        <PageContent />
    </div>
  )
}

export default App

