import React,{useState,useEffect} from 'react'
import "./Nav.css";
function Nav() {

    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
               handleShow(true)
            }else handleShow(false);
        });
        return () => {
           window.removeEventListener("scroll");
        };
    }, []);
    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img 
            className="nav_logo"
            src="https://www.pinclipart.com/picdir/big/2-23236_transparent-netflix-logo-2018-clipart.png"
            alt="Netflix Logo" />
            <img 
            className="nav_avatar"
            src="https://th.bing.com/th/id/R71532b4d5d2a2e59067d878369f26d6b?rik=C5Mv4pMo1G0Bmg&riu=http%3a%2f%2ficons.iconarchive.com%2ficons%2fpapirus-team%2fpapirus-status%2f256%2favatar-default-icon.png&ehk=c1Imx7OpsKTWO86mKSehRYaeUdeYKcJBrRVT9BxvgDc%3d&risl=&pid=ImgRaw"
            alt="avatar Logo" />
        </div>
    )
}

export default Nav
