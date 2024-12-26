import PenerbitLogo from "../assets/image/Logo Utama Penerbit ABA (P).png"
import Logo from "../assets/image/1. Apostrof Logo Utama (P).png"

export default function About(){
    return(
        <div className="about" id="about">
            <div className="container">
                <div className="row">
                    <div className="halakah-about d-flex align-items-center justify-content-between">
                        <div className="text">
                            <h1 className="Montserrat">Tentang <span>Apostrof</span></h1>
                            <p className="poppins mt-3" style={{opacity:"0.85", wordSpacing:"2px", lineHeight:"30px"}}>Apostrof merupakan bagian dari Penerbit Abdi Bangun Aksara, berkomitmen menyajikan buku-buku nonfiksi yang menghadirkan pengetahuan secara terstruktur dan jelas. Dengan bahasa yang sederhana namun tetap bernas, setiap halaman dirancang untuk memperluas wawasan pembaca, memberikan pemahaman yang mendalam, dan menjadikan proses belajar lebih terarah dan bermakna.</p>
                            <a className="btn mt-5 Montserrat" href="#publisher-about">Baca Selengkapnya</a>
                        </div>
                        <div className="image text-center">
                            <img src={Logo} alt="" />
                        </div>
                    </div>
                    <div className="publisher-about d-flex gap-3 justify-content-between" id="publisher-about">
                        <div className="image">
                            <img src={PenerbitLogo} alt="" />
                        </div>
                        <div className="text">
                            <h2 className="Montserrat">Tentang Penerbit Abdi Bangun Aksara</h2>
                            <p className="poppins mt-3" style={{opacity:"0.85", wordSpacing:"2px", lineHeight:"30px"}}>
                                Abdi Bangun Aksara hadir untuk mendukung penulis dan pencinta
                                buku di Indonesia dengan semangat tinggi. Kami berkomitmen menerbitkan
                                karya berkualitas yang inspiratif dan bermanfaat, serta menyediakan
                                dukungan penuh bagi penulis. Selain itu, kami berfokus pada
                                peningkatan literasi sebagai kunci masa depan yang lebih cerah. Baca
                                selengkapnya untuk mengetahui lebih jauh tentang penerbit Abdi Bangun Aksara.
                            </p>
                            <a className="btn mt-5 Montserrat" href="https://abaksara.co.id" target="_blank">Telusuri Penerbit ABA</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}