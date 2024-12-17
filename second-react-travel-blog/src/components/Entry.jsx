import locationIcon from "../assets/fill-219.png";

export default function Entry(props) {
    return (
        <article className="entry">
            <img src={props.imgSrc} alt={props.imgAlt} className="entry--image" />
            <div className="entry--content">
                <div className="entry--location">
                    <img src={locationIcon} alt="Location icon" className="entry--location--icon" />
                    <h3>{props.location}</h3>
                    <a href={props.mapLink}>View on Google Maps</a>
                </div>
                <h2 className="entry--title">{props.title}</h2>
                <p className="entry--date">{props.date}</p>
                <p className="entry--description">
                   {props.description}
                </p>
            </div>
        </article>
    
    )
}
