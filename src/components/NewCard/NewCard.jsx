import { MapIcon, RelojIcon } from "../icons/PhoneIcon";
import "./newCard.css";
const NewsCard = ({
  icon: Icon,
  title,
  image,
  description,
  date,
  location,
}) => {
  return (
    <article className="news-card">
      <div className="news-card__media">
        <img
          src={image}
          alt={title}
          className="news-card__image"
          width="320"
          height="200"
          loading="lazy"
        />
      </div>

      <div className="news-card__content">
        <div className="news-card__body">
          <h3 className="news-card__title">
            {Icon && <Icon size={16} aria-hidden="true" />}
            {title}
          </h3>
          <p className="news-card__description">{description}</p>
        </div>

        <div className="news-card__meta">
          <time className="news-card__date" dateTime={date}>
            <RelojIcon />
            {date}
          </time>
          {location && (
            <span className="news-card__location">
              <MapIcon />
              {location}
            </span>
          )}
        </div>
      </div>
    </article>
  );
};

export default NewsCard;
