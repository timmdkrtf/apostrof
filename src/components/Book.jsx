import CoverBelakang from "../assets/image/cover-belakang-penyuluh-pertanian.png"
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
                        <p className="inria-serif">Buku ini mengajak pembaca menyelami peran strategis penyuluh pertanian—lebih dari sekadar pengajar lapangan, mereka adalah penggerak perubahan, jembatan antara sumber ilmu dan petani. Dimulai dari sejarah penyuluhan sejak 1817 di Indonesia, hingga tantangan era digital dan perubahan iklim, buku ini memotret perjalanan profesi penyuluh secara menyeluruh.</p>
                        <a className="alike btn" href="/buku/penyuluh-pertanian">Jelajahi Sekarang</a>
                    </div>
                </div>
            </div>
        </div>
    );
}