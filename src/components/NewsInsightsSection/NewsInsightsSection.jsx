import { NEWS_DATA } from "../../constants/news";
import NewsCard from "../NewCard/NewCard";
import "./newsInsightsSection.css"
const NewsInsightsSection = () => {
  return (
    <>
      <section className="news-insights">
        <div className="news-insights__container-title">
            <h2 className="news-insights__title">News & Insights</h2>
        </div>
        <p className="news-insights__description">
          Stay up to date with Rheonics updates, events, webinars, and technical
          insights.
        </p>
      <ul className="news-insights__grid">
        { NEWS_DATA.map((newItem, i) => (
            <li key={newItem.id} className="news-insights__item">
                <NewsCard {...newItem} />
            </li>
        )) }
      </ul>
      </section>

    </>
  );
};
export default NewsInsightsSection;
