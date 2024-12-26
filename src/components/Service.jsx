import { BiBookReader } from "react-icons/bi";
import { BsPencilSquare } from "react-icons/bs";
import { BsFolder2Open } from "react-icons/bs";

export default function Service(){
    return(
        <div className="service" id="service">
            <div className="container">
                <div>
                    <h2 className="Montserrat my-2">Layanan Kami</h2>
                </div>
                <div className="row mt-5 pt-3">
                    <div className="service-card">
                        <BiBookReader />
                        <h4 className="Montserrat my-3">Buku Nonfiksi Berkualitas</h4>
                        <p className="Poppins">Apostrof menghadirkan buku-buku nonfiksi yang dirancang untuk memperkaya wawasan dan pemahaman pembaca. Dengan gaya penyampaian yang lugas dan terstruktur, setiap buku menjadi jembatan antara ide-ide kompleks dan bahasa yang sederhana, menjadikan pengetahuan lebih mudah diakses tanpa kehilangan kedalaman maknanya.</p>
                    </div>
                    <div className="service-card">
                        <BsFolder2Open />
                        <h4 className="Montserrat my-3">Kelas Pembelajaran</h4>
                        <p className="Poppins">Apostrof menawarkan kelas pembelajaran yang dirancang untuk mengasah pemikiran kritis dan kreativitas, sekaligus memberikan bekal keterampilan yang relevan untuk mendukung kebutuhan profesional. Materi disusun dengan pendekatan terarah, praktis, dan relevan, dipandu oleh para ahli yang berpengalaman di bidangnya. Setiap sesi tidak hanya memberikan ruang eksplorasi gagasan dan pendalaman konsep, tetapi juga menyiapkan peserta untuk menghadapi tantangan dunia kerja dengan lebih percaya diri dan kompeten.</p>
                    </div>
                    <div className="service-card">
                        <BsPencilSquare />
                        <h4 className="Montserrat my-3">Lokakarya Menulis Nonfiksi</h4>
                        <p className="Poppins">Apostrof menyelenggarakan lokakarya menulis nonfiksi yang dirancang untuk membantu peserta mengembangkan keterampilan menulis yang jelas, informatif, dan bermakna. Dengan bimbingan mentor profesional, peserta akan mempelajari teknik, metode, dan pendekatan penulisan yang efektif. Lokakarya ini tidak hanya berfokus pada menciptakan karya berkualitas, tetapi juga memberikan manfaat nyata bagi pengembangan karier, terutama dalam bidang yang membutuhkan kemampuan komunikasi tertulis yang unggul. Setiap peserta didorong untuk menghasilkan karya yang dapat menjadi nilai tambah dalam perjalanan profesional mereka.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}