import React from "react";

const Review = ({ headline, byline, link, summary_short }) => {
  return (
    <div key={headline} className="review">
      <header>
        <a className="review-link" href={link.url}>
          {headline}
        </a>
        <br />
        <span className="author">{byline}</span>
      </header>
      <blockquote>{summary_short}</blockquote>
    </div>
  );
};

export default function MovieReviews(props) {
  return (
    <div className="review-list">
      {props.reviews.map((review) => (
        <Review
          key={review.display_title}
          headline={review.headline}
          byline={review.byline}
          link={review.link}
          summary_short={review.summary_short}
        />
      ))}
    </div>
  );
}
