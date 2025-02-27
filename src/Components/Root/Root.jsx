import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Root = () => {
    return (
        <>
            <Navbar></Navbar>
            <Outlet></Outlet> 
            <Footer></Footer>
        </>
    );
};

export default Root;