import Footer from "../components/Footer"
import DotSpiral from "../assets/image/dot-spiral.webp";
import SejigoCover from "../assets/image/cover-sejigo.webp"
import LangkahText from "../assets/image/langkah-text-cover.webp"
import KecilMenujuText from "../assets/image/kecilmenuju-text-cover.webp"

import KutipLine from "../assets/image/kutip-line-synopsis.webp"
import TitleSynopsis from "../assets/image/title-text-synopsis.webp"

import SoftCoverDetail from "../assets/image/softcover-badge-detailimage.webp"
import HalamanDetail from "../assets/image/halaman-badge-detailimage.webp"
import ISBNDetail from "../assets/image/ISBN-badge-detailimage.webp"
import CoverDetail from "../assets/image/bg-offer (6).png"

import TitleAuthor from "../assets/image/title-text-author.webp"
import AuthorPhoto from "../assets/image/author-profile.webp"

import TitlePrapesan from "../assets/image/title-text-prapesan.webp"
import CoverPrapesan from "../assets/image/cover-sejigo-prapesan.webp"

import TitleOffer from "../assets/image/title-cover.webp"
import CoverSingle from "../assets/image/cover-sejigosingle-offer.webp"
import BtnOffer from "../assets/image/btn-offer.webp"
import BundlingOffer from "../assets/image/bundling-offer.webp"
import CoverBundle from "../assets/image/bg-offer (5).png"
import HargaPaket1 from "../assets/image/harga-paket1-offer.webp"
import HargaPaket2 from "../assets/image/harga-paket2-offer.webp"
import BadgeOffer from "../assets/image/badge-offer.webp"

import { useEffect } from "react";

export default function SejigoOffer(){
  useEffect(() => {
    if (window.AOS) {
      window.AOS.init({
        duration: 900,
        easing: "ease-in-out",
        once: true,
      });
    }
  }, []);

    return(
        <div className="landing-offer">
            <div className="cover" data-aos="fade-up">
                <img src={DotSpiral} className="dot" alt="" />
                <div className="container d-flex">
                    <div className="left">
                        <img src={SejigoCover} data-aos="fade-up" data-aos-delay="1200" data-aos-duration="1500" alt="" />
                    </div>
                    <div className="right">
                        <img className="title" data-aos="fade-right" data-aos-delay="300" src={LangkahText} alt="" />
                        <img className="subtitle" data-aos="fade-right" data-aos-delay="600" src={KecilMenujuText} alt="" />
                        <h4 className=" raleway badge-text" data-aos="fade-right" data-aos-delay="800">Jiwa yang Lebih Utuh</h4>
                    </div>
                </div>
            </div>
            <div className="synopsis">
                <div className="container">
                    <div className="row">
                        <img className="title" src={TitleSynopsis} alt="" />
                        <img className="kutip-line" src={KutipLine} data-aos="fade-up" alt="" />
                        <div className="Lato desc" data-aos="zoom-in">
                            <p>
                                Di tengah kompleksitas hidup saat ini, kesehatan mental terbukti memengaruhi cara kita berpikir, bersikap, bekerja, hingga merespons persoalan sosial di sekitar. Kesehatan jiwa bukan isu pribadi semata, melainkan fondasi kualitas hidup bersama.
                            </p>
                            <p>
                                <b><em>SEJI-GO: Sehat Jiwa Bersama Lahargo</em></b> karya dr. Lahargo Kembaren, Sp.KJ. menyajikan pemahaman kesehatan jiwa secara ringkas, jelas, dan relevan—dari konsep dasar hingga strategi penanganan. <b>Buku ini mengajak pembaca lebih sadar bahwa menjaga kesehatan jiwa adalah kunci membangun individu yang kuat dan masyarakat yang lebih sehat, jiwa dan raga.</b>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="detail-cover" data-aos="fade-up">
                <div className="container">
                    <div className="content">
                        <img src={CoverDetail} data-aos="fade-up" data-aos-delay="500" data-aos-duration="1500" alt="" />
                    </div>
                </div>
            </div>
            <div className="author" data-aos="fade-up" data-aos-duration="2000">
                <div className="container">
                    <div className="row">
                        <div className="left">
                            <img src={TitleAuthor} className="title-author" data-aos="fade-right" data-aos-delay="200" alt="" />
                            <p className="Lato desc" data-aos="fade-right" data-aos-delay="500" >
                                dr. Lahargo Kembaren, Sp.KJ., psikiater dengan pengalaman 12+ tahun, lulusan Fakultas Kedokteran Universitas Indonesia, mengikuti <em>fellowship</em> di WHO Collaboration Centre Korea, dan kini kandidat doktor (PhD) di FKUI. Aktif di RS Marzoeki Mahdi Bogor, RS Siloam Bogor, Apotek Mulia, serta sebagai konsultan di yayasan rehabilitasi dan pengurus PDSKJI, IDI, dan JRPI. Beliau menerima penghargaan <em>The Best Empathy Doctor</em> dari Kemenkes RI (2019).
                            </p>
                        </div>
                        <div className="right">
                            <img src={AuthorPhoto} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="prapesan">
                <div className="container">
                    <div className="row">
                        <div className="left">
                            <h4 className="Poppins">JANGAN LEWATKAN!</h4>
                            <img className="title" src={TitlePrapesan} data-aos="fade-right" data-aos-delay="200" alt="" />
                            <div className="d-flex">
                                <p className="subtitle Poppins" data-aos="fade-up" data-aos-delay="300">Periode Promo</p>
                                <p className="date Poppins" data-aos="fade-up" data-aos-delay="300">22 Desember 2025 - 12 Januari 2026</p>
                            </div>
                        </div>
                        <div className="right">
                            <img src={CoverPrapesan} data-aos="fade-up" data-aos-delay="700" data-aos-duration="1500" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="offer">
                <div className="container">
                    <div className="row">
                        <div className="left">
                            <img className="title" src={TitleOffer} alt="" />
                            <img className="cover-book" src={CoverSingle} alt="" />
                            <img className="harga" src={HargaPaket1} alt="" />
                            <a href="https://api.whatsapp.com/send/?phone=6281288048052&text=Halo%2C+saya+ingin+mengetahui+lebih+lanjut+mengenai+layanan+atau+produk+yang+ditawarkan+oleh+Abdi+Bangun+Aksara.+Mohon+Informasinya.+&type=phone_number&app_absent=0" target="_blank"><img className="button" src={BtnOffer} alt="" /></a>
                        </div>
                        <div className="right">
                            <img className="cover-book" src={CoverBundle} alt="" />
                            {/* <img className="bundling" src={BundlingOffer} alt="" />
                            <img className="title" src={TitleOffer} alt="" />
                            <img className="badge-offer" src={BadgeOffer} alt="" />
                            <img className="harga" src={HargaPaket2} alt="" />
                            <img className="cover-book" src={CoverBundle} alt="" />
                            <p className="Lato">harga spesial bundling berlaku untuk 50 pembeli pertama</p> */}
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}