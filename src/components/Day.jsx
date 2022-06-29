import React, { useState } from "react";
import "../css/day.css";

function Day(props) {
  const days = props.matchingDays;
  console.log(days, "Day props day");
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevIndex = () => {
    setCurrentIndex((prevState) => {
      if (currentIndex !== 0) {
        let newIndex = currentIndex - 1;
        return newIndex;
      } else {
        return currentIndex;
      }
    });
  };

  const nextIndex = () => {
    setCurrentIndex((prevState) => {
      if (currentIndex !== days.length - 1) {
        let newIndex = currentIndex + 1;
        return newIndex;
      } else {
        return currentIndex;
      }
    });
  };

  return (
    <React.Fragment>
      {days.length > 0 ? (
        <section className="card-container">
          <ul className="cards">
            <button onClick={prevIndex}>Previous Special Title</button>
            <li>
              <article className="card reorder">
                <h2>{days[currentIndex].query}</h2>
                <img
                  src={days[currentIndex].url}
                  alt={days[currentIndex].share_text}
                  loading="lazy"
                />
                <p>{days[currentIndex].share_text}</p>
              </article>
            </li>
            <button onClick={nextIndex}>Next Special Title</button>
          </ul>
        </section>
      ) : (
        <section className="card-container">
          <ul className="cards">
            <li>
              <article className="card reorder">
                <h2>...</h2>
              </article>
            </li>
          </ul>
        </section>
      )}
    </React.Fragment>
  );
}
export default Day;
