import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import { Link } from 'react-router-dom';

function Movie({ year, title, summary, poster, genres }) {
    //return <h5>{title}</h5>;

    // HTML 추가하기
    return (
        <div className = "up-on-scroll">
        <div className="movie">
            <Link
                to={{
                    pathname: '/movie-detail',
                    state: { year, title, summary, poster, genres },
                }}
            >
                <img src={poster} alt={title} title={title}></img>
                <div className="up-on-scroll">
                    <h3 className="movie__title">
                        {title}
                    </h3>
                    <h5 className="movie__year">{year}</h5>
                    <ul className="movie__genres">
                        {genres.map((genre, index) => {
                            return <li key={index} className="movie__genre">{genre}</li>
                        })}
                    </ul>
                    <p className="movie__summary">{summary.slice(0, 180)}</p>
                </div>
            </Link>
        </div>
        </div>

    );

}

Movie.propTypes = {
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

let ticking = false;

function isElementUnderBottom(elem, triggerDiff) {
    const { top } = elem.getBoundingClientRect();
    const { innerHeight } = window;
    return top > innerHeight + (triggerDiff || 0);
  }
  
  function handleScroll() {
    ticking = false;

    const elems = document.querySelectorAll('.up-on-scroll');
   // setTimeout(function() {
     //   console.log('Works!');
     // }, 10000);

    elems.forEach(elem => {
      if (isElementUnderBottom(elem, -20)) {
        elem.style.opacity = "0";
        elem.style.transform = 'translateY(70px)';
  
      } else {
        elem.style.opacity = "1";
        elem.style.transform = 'translateY(0px)';
  
      }
    })
  }
  
  function requestTick() {
    if(!ticking) {
      requestAnimationFrame(handleScroll);
    }
    ticking = true;
  }
  
   window.addEventListener('scroll', requestTick);

export default Movie;