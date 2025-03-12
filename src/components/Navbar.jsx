import Logo from "../assets/image/1. Apostrof Logo Utama (P).png"

import { BsWhatsapp } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";

export default function Navbar(){
    return(
    <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-sm">
        <div className="container">
            <a className="navbar-brand" href="#"><img src={Logo} alt="" style={{width: "60px"}} /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 Poppins">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Beranda</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#about">Tentang Kami</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#service">Layanan</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#book">Buku</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contact">Kontak</a>
                    </li>
                </ul>
                <div className="line-horizontal">

                </div>
                <div className="d-flex gap-2">
                    <a href="https://wa.me/message/COYL226EZJTZC1" target="_blank"><BsWhatsapp className="fs-5" /></a>
                    <a href="https://instagram.com/apostrof.co.id" target="_blank"><BsInstagram className="fs-5" /></a>
                    <a href="https://www.facebook.com/apostrof.co.id" target="_blank"><BsFacebook className="fs-5" /></a>
                </div>
            </div>
        </div>
    </nav>
    );
}