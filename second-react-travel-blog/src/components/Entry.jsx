import locationIcon from "../assets/fill-219.png";

export default function Entry() {
    return (
        <article className="entry">
            <img src="/mount-fuji.png" alt="Location photo" className="entry--image" />
            <div className="entry--content">
                <div className="entry--location">
                    <img src={locationIcon} alt="Location icon" className="entry--location--icon" />
                    <h3>Japan</h3>
                    <a href="https://www.google.com/maps?sca_esv=fd502329e85da6f5&output=search&q=mount+fuji&source=lnms&fbs=AEQNm0Aa4sjWe7Rqy32pFwRj0UkWd8nbOJfsBGGB5IQQO6L3J3ppPdoHI1O-XvbXbpNjYYxy9nF8_reHIdIO9ZF-Un9cArTzwv0bd95zkEJt7f3xiwVRSP1cUp3CbxIfksOHJJZzWjCH0MM0qCUYa6qg_uLL5LcQjmZ3n9uh0JFZZh9tLs3zVJ2gice66N_7qpMGElrW8ijFEuwzGpEl_9-6oZ1jHMA4ow&entry=mc&ved=1t:200715&ictx=111">View on Google Maps</a>
                </div>
                <h2 className="entry--title">Mount Fuji</h2>
                <p className="entry--date">12 Jan, 2021 - 24 Jan, 2021</p>
                <p className="entry--description">
                   Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.
                </p>
            </div>
        </article>
    )
}
