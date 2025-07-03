import Logo from "../assets/image/1. Apostrof Logo Utama (P).png";

import CoverBelakang from "../assets/image/cover-belakang-dummy.png"
import CoverDepan from "../assets/image/cover-depan-penyeluh-pertanian.png"

import { useState } from "react";

import { BsWhatsapp } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";

export default function PenyuluhPertanianBook() {
  const breadcrumbStyle = {
    "--bs-breadcrumb-divider": `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E")`,
  };

  const toggleCover = () => setShowBackCover((prev) => !prev);

  const [showBackCover, setShowBackCover] = useState(false);

  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5 Poppins" id="exampleModalLabel">
                Deskripsi
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body Lato">
                <p className="Lato">
                  Penyuluh Pertanian: Pejuang Swasembada Pangan<br/><br/>
                  Penyuluh pertanian bukan sekadar pengajar di lapangan. Mereka adalah motor perubahan—membangkitkan semangat petani untuk lebih produktif, lebih berdaulat, dan lebih berdaya saing. Di balik setiap panen yang berhasil, ada peran-peran sunyi para penyuluh yang mengubah kebijakan menjadi aksi nyata yang menyentuh kehidupan petani.<br/><br/>
                  Buku ini mengajak pembaca menyelami dunia penyuluhan secara utuh. Dimulai dari akar sejarahnya sejak 1867 di Inggris oleh James Stuart, hingga jejak awal di Indonesia pada 1817 ketika G. Reinwardt memperkenalkan ratusan jenis tanaman baru di Kebun Raya Bogor—sampai pada tantangan era kini: digitalisasi, perubahan iklim, dan regenerasi petani.<br/><br/>
                  Lebih dari sekadar catatan sejarah, Penyuluh Pertanian: Pejuang Swasembada Pangan adalah refleksi kolektif dan edukasi menyeluruh. Buku ini menguraikan ruang lingkup kerja penyuluh dengan bahasa yang mudah dipahami dan aplikatif—membantu masyarakat luas melihat betapa penting dan strategisnya peran penyuluh dalam memperkuat ketahanan pangan serta memberdayakan desa.<br/><br/>
                  Disusun dari kisah nyata, pendekatan praktis, hingga inovasi yang dilakukan para penyuluh di berbagai pelosok negeri, buku ini mendokumentasikan kerja-kerja pendampingan petani milenial, transformasi kelembagaan petani melalui teknologi, dan berbagai bentuk kontribusi nyata lainnya.<br/><br/>
                  Buku ini menyadarkan kita bahwa profesi penyuluh bukan sekadar pelaksana program pemerintah, melainkan fondasi utama pembangunan pertanian yang kerap tak terlihat. Sebuah profesi dengan panggilan hati, bekerja dalam kesunyian demi masa depan yang lebih baik bagi petani dan bangsa.<br/><br/>
                  Penyuluh Pertanian: Pejuang Swasembada Pangan akan membuka mata Anda untuk memahami, menghargai, dan mungkin—tergerak untuk ikut mendukung mereka. Karena kemandirian pangan bangsa hanya mungkin tercapai jika ada mereka yang tak lelah menanam harapan di antara barisan tanaman, dan terus menyuluh jalan bagi petani Indonesia.<br/>
                </p>
            </div>
          </div>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-sm">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={Logo} alt="" style={{ width: "60px" }} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <div className="d-flex gap-2 ms-auto">
              <a href="https://wa.me/message/COYL226EZJTZC1" target="_blank">
                <BsWhatsapp className="fs-5" />
              </a>
              <a href="https://www.instagram.com/halakah.co.id" target="_blank">
                <BsInstagram className="fs-5" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61561826281024"
                target="_blank"
              >
                <BsFacebook className="fs-5" />
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div className="majmu">
        <div className="container">
          <nav style={breadcrumbStyle} aria-label="breadcrumb">
            <ol className="breadcrumb Poppins fs-6">
              <li className="breadcrumb-item">
                <a href="/">Beranda</a>
              </li>
              <li className="breadcrumb-item">
                <a href="/#book">Daftar Buku Apostrof</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Penyuluh Pertanian
              </li>
            </ol>
          </nav>
          <div className="content">
            <div className="cover">
              <img
                id="bookCover"
                src={showBackCover ? CoverBelakang : CoverDepan}
                alt=""
              />
              <button onClick={toggleCover} className="d-flex">
                {showBackCover ? "Cover Depan" : "Cover Belakang"}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-right mt-1 ms-1"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                  />
                </svg>
              </button>
            </div>
            <div className="detail">
              <h5 className="Lato fw-bold">Segera Terbit!</h5>
              <h2 className="Poppins mb-5">Penyuluh Pertanian: Pejuang Swasembada Pangan</h2>
              {/* <div className="title  mb-4">
                <h5 className="Poppins">Dapatkan sekarang!</h5>
                <div className="harga">
                  <h3 className="Lato">Rp75.000</h3>
                </div>
              </div> */}
              <a
                id="href"
                className="text-decoration-none"
                href="https://api.whatsapp.com/send?phone=6281288048052"
                target="_blank"
              >
                <button className="d-flex ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-whatsapp mt-1 me-2 Poppins"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                  </svg>
                  Informasi Lebih Lanjut!
                </button>
              </a>
              <div className="deskripsi ">
                <h6 className="Poppins">Deskripsi</h6>
                <p className="Lato">
                  Penyuluh Pertanian: Pejuang Swasembada Pangan<br/><br/>
                  Penyuluh pertanian bukan sekadar pengajar di lapangan. Mereka adalah motor perubahan—membangkitkan semangat petani untuk lebih produktif, lebih berdaulat, dan lebih berdaya saing. Di balik setiap panen yang berhasil, ada peran-peran sunyi para penyuluh yang mengubah kebijakan menjadi aksi nyata yang menyentuh kehidupan petani.<br/><br/>
                  Buku ini mengajak pembaca menyelami dunia penyuluhan secara utuh. Dimulai dari akar sejarahnya sejak 1867 di Inggris oleh James Stuart, hingga jejak awal di Indonesia pada 1817 ketika G. Reinwardt memperkenalkan ratusan jenis tanaman baru di Kebun Raya Bogor—sampai pada tantangan era kini: digitalisasi, perubahan iklim, dan regenerasi petani.
                </p>
                <button
                  type="button"
                  className="btn btn-primary d-flex Poppins"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Baca Selengkapnya
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    className="bi bi-chevron-down ms-2"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                    />
                  </svg>
                </button>
              </div>
              <div className="info-footer ">
                <h6 className="Poppins">Detail Buku</h6>
                <div className="flex-info">
                  <div className="text">
                    <h6 className="Poppins">Penerbit</h6>
                    <p className="Lato">Abdi Bangun Aksara</p>
                  </div>
                  <div className="text">
                    <h6 className="Poppins">Lebar</h6>
                    <p className="Lato">15 cm</p>
                  </div>
                  <div className="text">
                    <h6 className="Poppins">ISBN</h6>
                    <p className="Lato">-</p>
                  </div>
                  <div className="text">
                    <h6 className="Poppins">Halaman</h6>
                    <p className="Lato">+191</p>
                  </div>
                  <div className="text">
                    <h6 className="Poppins">Bahasa</h6>
                    <p className="Lato">Indonesia</p>
                  </div>
                  <div className="text">
                    <h6 className="Poppins">Panjang</h6>
                    <p className="Lato">23 cm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
