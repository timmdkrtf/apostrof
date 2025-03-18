import { FaTiktok } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import LogoSecondary from "../assets/image/2. Apostrof Logo Utama (N).png"
import { BsInstagram } from "react-icons/bs";

import { BsFillTelephoneFill } from "react-icons/bs";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";

export default function Footer(){
    return(
        <footer id="kontak">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-5 col-md-6 col-12">
                        <img src={LogoSecondary} />
                        <p className="Open-sans" style={{marginTop: "-10px"}}>by PT Abdi Bangun Aksara</p>
                        <ul style={{listStyleType:"none", padding:"0"}} className="Open-sans">
                            <li style={{padding: "5px 0"}}>
                                <a href="https://maps.app.goo.gl/8yRLm8ACmjuVgoQy8" target="_blank" style={{color: "white", textDecoration: "none"}}>
                                    Jl. Aria Surialaga No. 83, Kota Bogor 16119
                                </a>
                            </li>
                            <li style={{padding: "5px 0"}}>
                                <a href="tel:+622518632170" target="_blank" style={{color: "white", textDecoration: "none"}}>
                                    <BsFillTelephoneFill className="fs-5" style={{ margin:"-2px 15px 0 0" }} />
                                    +62 251 8632 170
                                </a>
                            </li>
                            <li style={{padding: "5px 0"}}>
                                <a href="https://api.whatsapp.com/send?phone=6281288048052" target="_blank" style={{color: "white", textDecoration: "none"}}>
                                    <BsWhatsapp className="fs-5" style={{ margin:"-2px 15px 0 0" }} />
                                    +62 812 8804 8052
                                </a>
                            </li>
                            <li style={{padding: "5px 0"}}>
                                <a href="mailto:contact@apostrof.co.id" target="_blank" style={{color: "white", textDecoration: "none"}}>
                                    <BsFillEnvelopeFill className="fs-5" style={{ margin:"-2px 15px 0 0" }} />
                                    contact@apostrof.co.id
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 link-contact Poppins d-flex flex-column justify-content-between">
                        <div className="d-flex justify-content-end sosmed text-end" style={{gap: "38px"}}>
                            <div className="pb-2">
                                <a href="https://www.facebook.com/apostrof.co.id" target="_blank" style={{color: "white", textDecoration: "none"}}>
                                    <FaFacebook className="fs-3" style={{ marginTop:"-3px" }} />
                                </a>
                            </div>
                            <div className="pb-2">
                                <a href="https://www.tiktok.com/@apostrof.co.id" target="_blank" style={{color: "white", textDecoration: "none"}}>
                                    <FaTiktok className="fs-3" style={{ marginTop:"-3px" }} />
                                </a>
                            </div>
                            <div className="pb-2">
                                <a href="https://instagram.com/apostrof.co.id" target="_blank" style={{color: "white", textDecoration: "none"}}>
                                    <BsInstagram className="fs-3" style={{ marginTop:"-3px" }} />
                                </a>
                            </div>
                        </div>
                        <div className="text-end fst-italic fs-5 quote">
                            <p>Jalan Pintas Kerumitan</p>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <hr />
                    <p className="text-end mb-0 Open-sans">© 2025 PT Abdi Bangun Aksara &middot; All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
}