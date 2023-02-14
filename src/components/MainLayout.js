import React from 'react'
import Footer from './Footer'
import Header from './Header'

function MainLayout({ children }) {
  return (
    <div>
        <Header />
        {children}
        <Footer />
    </div>
  )
}

export default MainLayout