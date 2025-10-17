import BookData from "../data/BookData"
import { Link } from "react-router-dom"

export default function Book() {
    return (
        <div className="book" id="book">
            <div className="container">
                <div className="title">
                    <h3 className="roboto">Buku Pilihan</h3>
                </div>
                <div className="row">
                    {BookData.map((book, index) =>
                        <div className="content-book" key={index}>
                            <div className="cover">
                                <img src={book.image1} alt={book.title} />
                                <img src={book.image2} alt={book.title} />
                            </div>
                            <h6 className={`inria-serif m-0 opacity-75 ${book.status}`}>{book.statusTitle}</h6>
                            <h5 className="roboto">{book.title}</h5>
                            <p className="inria-serif">{book.description}</p>
                            <Link className="alike btn" to={`/buku/${book.slug}`}>Jelajahi Sekarang</Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
