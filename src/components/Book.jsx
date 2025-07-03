import CoverBelakang from "../assets/image/cover-belakang-dummy.png"
import CoverDepan from "../assets/image/cover-depan-penyeluh-pertanian.png"


export default function Book(){
    return(
        <div className="book" id="book">
            <div className="container">
                <div className="title">
                    <h3 className="roboto">Buku Pilihan</h3>
                </div>
                <div className="row">
                    <div className="content-book">
                        <div className="cover">
                            <img src={CoverDepan} alt="" />
                            <img src={CoverBelakang} alt="" />
                        </div>
                        <h6 className="inria-serif m-0 opacity-75">Segera Terbit!</h6>
                        <h5 className="roboto">Penyuluh Pertanian: Pejuang Swasembada Pangan</h5>
                        <p className="inria-serif">Penyuluh Pertanian: Pejuang Swasembada Pangan mengungkap peran penting penyuluh sebagai penggerak perubahan di balik ketahanan pangan Indonesia. Buku ini memotret perjalanan panjang dunia penyuluhan, dari masa kolonial hingga era digital, lengkap dengan kisah nyata, pendekatan praktis, dan inovasi di lapangan. Sebuah bacaan reflektif dan inspiratif tentang profesi yang sering luput dari sorotan, namun menjadi kunci swasembada dan kedaulatan pangan bangsa.</p>
                        <a className="alike btn" href="/buku/penyuluh-pertanian">Jelajahi Sekarang</a>
                    </div>
                </div>
            </div>
        </div>
    );
}