import { BsWhatsapp } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import LogoSecondary from "../assets/image/2. Apostrof Logo Utama (N).png"

export default function Footer(){
    return(
        <footer id="kontak">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-5 col-md-6 col-12">
                        <img src={LogoSecondary} />
                        <p className="Poppins">bagian dari Penerbit Abdi Bangun Aksara</p>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 link-contact Poppins">
                        <ul style={{listStyleType:"none", padding:"0"}}>
                            <li className="pb-2">
                                <a href="https://api.whatsapp.com/send?phone=6281288048052" target="_blank" style={{color: "white", textDecoration: "none"}}>
                                    <BsWhatsapp className="me-3 fs-5" style={{ marginTop:"-3px" }} />
                                    62 812-8804-8052
                                </a>
                            </li>
                            <li className="pb-2">
                                <a href="https://www.instagram.com/halakah.co.id" target="_blank" style={{color: "white", textDecoration: "none"}}>
                                    <BsInstagram className="me-3 fs-5" style={{ marginTop:"-3px" }} />
                                    halakah.co.id
                                </a>
                            </li>
                            <li className="pb-2">
                                <a href="https://www.facebook.com/profile.php?id=61561826281024" target="_blank" style={{color: "white", textDecoration: "none"}}>
                                    <BsFacebook className="me-3 fs-5" style={{ marginTop:"-3px" }} />
                                    Halakah
                                </a>
                            </li>
                        </ul>
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