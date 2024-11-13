import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Routers from '../routes/Routers'
import {AuthContextProvider} from '../context/authContext'


const Layout = () => {
  return (
    <div>
      <AuthContextProvider>
        <Header/>
        <main>
            <Routers/>
        </main>
        <Footer/>
      </AuthContextProvider>

    </div>
  )
}

export default Layout