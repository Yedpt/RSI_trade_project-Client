import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import OnboardingPage from '../pages/OnboardingPage'

const Layout = () => {
    return (
        <>
            <NavBar />
            <OnboardingPage />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout
 