import { BsWhatsapp } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import LogoSecondary from "../assets/image/2. Apostrof Logo Utama (N).png"

export default function Footer(){
    return(
        <footer id="kontak">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-5 col-md-6 col-12">
                        <img src={LogoSecondary} />
                        <p className="Poppins" style={{marginTop: "-10px"}}>bagian dari Penerbit Abdi Bangun Aksara</p>
                        <ul style={{listStyleType:"none", padding:"0"}}>
                            <li className="pb-2">
                                <a href="https://maps.app.goo.gl/8yRLm8ACmjuVgoQy8" target="_blank" style={{color: "white", textDecoration: "none"}}>
                                    Jl. Aria Surialaga No.83, Kota Bogor 16119
                                </a>
                            </li>
                            <li className="pb-2">
                                <a href="tel:+622518632170" target="_blank" style={{color: "white", textDecoration: "none"}}>
                                    <MdLocalPhone className="me-3 fs-5" style={{ marginTop:"-3px" }} />
                                    +62 251 8632 170
                                </a>
                            </li>
                            <li className="pb-2">
                                <a href="https://api.whatsapp.com/send?phone=6281288048052" target="_blank" style={{color: "white", textDecoration: "none"}}>
                                    <BsWhatsapp className="me-3 fs-5" style={{ marginTop:"-3px" }} />
                                    +62 812 8804 8052
                                </a>
                            </li>
                            <li className="pb-2">
                                <a href="mailto:contact@apostrof.co.id" target="_blank" style={{color: "white", textDecoration: "none"}}>
                                    <MdEmail className="me-3 fs-5" style={{ marginTop:"-3px" }} />
                                    contact@apostrof.co.id
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 link-contact Poppins d-flex flex-column justify-content-between">
                        <div className="d-flex justify-content-end sosmed">
                            <div className="pb-2 me-2">
                                <a href="https://www.facebook.com/apostrof.co.id" target="_blank" style={{color: "white", textDecoration: "none"}}>
                                    <FaFacebook className="me-3 fs-3" style={{ marginTop:"-3px" }} />
                                </a>
                            </div>
                            <div className="pb-2 me-2">
                                <a href="https://www.tiktok.com/@apostrof.co.id" target="_blank" style={{color: "white", textDecoration: "none"}}>
                                    <FaTiktok className="me-3 fs-3" style={{ marginTop:"-3px" }} />
                                </a>
                            </div>
                            <div className="pb-2 me-2">
                                <a href="https://instagram.com/apostrof.co.id" target="_blank" style={{color: "white", textDecoration: "none"}}>
                                    <BsInstagram className="me-3 fs-3" style={{ marginTop:"-3px" }} />
                                </a>
                            </div>
                        </div>
                        <div className="text-end fst-italic fs-5 mt-4">
                            <p>Jalan Pintas Kerumitan</p>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <hr />
                    <p className="text-end mb-0 pb-3 Poppins" style={{fontSize:"12px"}}>© PT Abdi Bangun Aksara &middot; All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
}