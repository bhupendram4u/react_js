 
 import NavbarComponent from "../navbar/NavbarComponent"
 import Footer from "../footer/Footer"  
 import { Outlet } from 'react-router-dom'

export default function Layout() {

    return (
        <>
            <NavbarComponent />
            <Outlet />
            <Footer />
        </>
    )
}
