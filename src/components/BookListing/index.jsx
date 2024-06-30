import { Link } from "react-router-dom";

export default function BookListing({id, title, author, image}) {
    return (
        <div>
            <Link to={`/book/${id}`}>
            <h3>{title}</h3>
            <p>{author}</p>
            <img src={image} alt="" />
            </Link>
        </div>
    )
}