import { Outlet } from "react-router-dom";
import Footer from "../component/layout/Footer";
import Header from "../component/layout/Header";


export default function Roots() {

    return (
        <>
            <Header />
            <div>
                <Outlet />
            </div>
            <Footer />
        </>
    )
}