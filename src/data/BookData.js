import pongbaltanDepan from "../assets/image/sampul-buku-polbangtan-depan.png"
import pongbaltanBelakang from "../assets/image/sampul-buku-polbangtan-belakang.png"

import sejigoDepan from "../assets/image/sampul-buku-sejigo-depan.jpeg"
import sejigoBelakang from "../assets/image/cover-belakang-dalam-pengembangan.png"

const BookData = [
    {
        id: 1,
        image1: pongbaltanDepan,
        image2: pongbaltanBelakang, 
        title: "Penyuluh Pertanian: Pejuang Swasembada Pangan", 
        description: "Penyuluh Pertanian: Pejuang Swasembada Pangan mengungkap peran penting penyuluh sebagai penggerak perubahan di balik ketahanan pangan Indonesia. Buku ini memotret perjalanan panjang dunia penyuluhan, dari masa kolonial hingga era digital, lengkap dengan kisah nyata, pendekatan praktis, dan inovasi di lapangan. Sebuah bacaan reflektif dan inspiratif tentang profesi yang sering luput dari sorotan, namun menjadi kunci swasembada dan kedaulatan pangan bangsa.", 
        slug: "penyuluh-pertanian",
        statusTitle: "-",
        status: "invisible",
        more: {
            authorName: "Husni Ginanjar, Yoyon Haryanto, dan Rudi Hartono",
            price: 100000,
            longDesc: 
                 `Penyuluh Pertanian: Pejuang Swasembada Pangan\n
                  Penyuluh pertanian bukan sekadar pengajar di lapangan. Mereka adalah motor perubahan—membangkitkan semangat petani untuk lebih produktif, lebih berdaulat, dan lebih berdaya saing. Di balik setiap panen yang berhasil, ada peran-peran sunyi para penyuluh yang mengubah kebijakan menjadi aksi nyata yang menyentuh kehidupan petani.\n
                  Buku ini mengajak pembaca menyelami dunia penyuluhan secara utuh. Dimulai dari akar sejarahnya sejak 1867 di Inggris oleh James Stuart, hingga jejak awal di Indonesia pada 1817 ketika G. Reinwardt memperkenalkan ratusan jenis tanaman baru di Kebun Raya Bogor—sampai pada tantangan era kini: digitalisasi, perubahan iklim, dan regenerasi petani.\n
                  Lebih dari sekadar catatan sejarah, Penyuluh Pertanian: Pejuang Swasembada Pangan adalah refleksi kolektif dan edukasi menyeluruh. Buku ini menguraikan ruang lingkup kerja penyuluh dengan bahasa yang mudah dipahami dan aplikatif—membantu masyarakat luas melihat betapa penting dan strategisnya peran penyuluh dalam memperkuat ketahanan pangan serta memberdayakan desa.\n
                  Disusun dari kisah nyata, pendekatan praktis, hingga inovasi yang dilakukan para penyuluh di berbagai pelosok negeri, buku ini mendokumentasikan kerja-kerja pendampingan petani milenial, transformasi kelembagaan petani melalui teknologi, dan berbagai bentuk kontribusi nyata lainnya.\n
                  Buku ini menyadarkan kita bahwa profesi penyuluh bukan sekadar pelaksana program pemerintah, melainkan fondasi utama pembangunan pertanian yang kerap tak terlihat. Sebuah profesi dengan panggilan hati, bekerja dalam kesunyian demi masa depan yang lebih baik bagi petani dan bangsa.\n
                  Penyuluh Pertanian: Pejuang Swasembada Pangan akan membuka mata Anda untuk memahami, menghargai, dan mungkin—tergerak untuk ikut mendukung mereka. Karena kemandirian pangan bangsa hanya mungkin tercapai jika ada mereka yang tak lelah menanam harapan di antara barisan tanaman, dan terus menyuluh jalan bagi petani Indonesia.`,
            shortDesc: 
                `
                  Penyuluh Pertanian: Pejuang Swasembada Pangan\n
                  Penyuluh pertanian bukan sekadar pengajar di lapangan. Mereka adalah motor perubahan—membangkitkan semangat petani untuk lebih produktif, lebih berdaulat, dan lebih berdaya saing. Di balik setiap panen yang berhasil, ada peran-peran sunyi para penyuluh yang mengubah kebijakan menjadi aksi nyata yang menyentuh kehidupan petani.\n
                  Buku ini mengajak pembaca menyelami dunia penyuluhan secara utuh. Dimulai dari akar sejarahnya sejak 1867 di Inggris oleh James Stuart, hingga jejak awal di Indonesia pada 1817 ketika G. Reinwardt memperkenalkan ratusan jenis tanaman baru di Kebun Raya Bogor—sampai pada tantangan era kini: digitalisasi, perubahan iklim, dan regenerasi petani.
                `
        },
        detailBook: {
            penerbit: "Abdi Bangun Aksara",
            lebar: "15 cm",
            isbn: "-",
            halaman: "xxiii + 169",
            bahasa: "indonesia",
            panjang: "23 cm",
        }
    },
    {
        id: 2,
        image1: sejigoDepan,
        image2: sejigoBelakang,
        title: "SEJI-GO: Sehat Jiwa Bersama Lahargo",
        description: "Kesehatan jiwa setara penting dengan kesehatan fisik, memengaruhi kemampuan berpikir, merasa, berperilaku, dan menjalin hubungan untuk kualitas hidup yang baik. Buku SEJI-GO: Sehat Jiwa Bersama Lahargo karya dr. Lahargo Kembaren, SpKJ, menjelaskan masalah kesehatan jiwa, dari definisi hingga strategi penanganan, secara jelas dan cerdas. Buku ini informatif, menginspirasi kesadaran kolektif, dan mendukung kehidupan sehat jiwa-raga.",
        slug: "SEJI-GO",
        statusTitle: "segera terbit!",
        status: "visible",
        more: {
            authorName: "",
            price: 0,
            longDesc: 
                 `Kesehatan jiwa sama pentingnya dengan kesehatan fisik karena memengaruhi cara seseorang berpikir, merasa, dan berinteraksi. Mental yang sehat memungkinkan individu menghadapi tantangan hidup, mengembangkan potensi diri, dan berkontribusi positif bagi sesama.\n
                  Melalui SEJI-GO: Sehat Jiwa Bersama Lahargo, dr. Lahargo Kembaren, Sp.KJ — psikiater dan edukator terkemuka di Indonesia — mengajak pembaca memahami kesehatan jiwa secara lebih dekat dan manusiawi. Buku ini membahas berbagai persoalan mental, mulai dari gejala hingga strategi penanganan, dengan gaya yang jernih, cerdas, dan membumi.\n
                  Lebih dari sekadar bacaan, SEJI-GO menjadi ajakan untuk membangun kesadaran bersama bahwa merawat jiwa adalah langkah penting menuju kehidupan yang sehat, utuh, dan bermakna.`,
            shortDesc: 
                 `Kesehatan jiwa sama pentingnya dengan kesehatan fisik karena memengaruhi cara seseorang berpikir, merasa, dan berinteraksi. Mental yang sehat memungkinkan individu menghadapi tantangan hidup, mengembangkan potensi diri, dan berkontribusi positif bagi sesama.\n
                  Melalui SEJI-GO: Sehat Jiwa Bersama Lahargo, dr. Lahargo Kembaren, Sp.KJ — psikiater dan edukator terkemuka di Indonesia — mengajak pembaca memahami kesehatan jiwa secara lebih dekat dan manusiawi. Buku ini membahas berbagai persoalan mental, mulai dari gejala hingga strategi penanganan, dengan gaya yang jernih, cerdas, dan membumi.`
        },
        detailBook: {
            penerbit: "Abdi Bangun Aksara",
            lebar: "14,8 cm",
            isbn: "-",
            halaman: "-",
            bahasa: "indonesia",
            panjang: "21 cm",
        }
    }
]

export default BookData