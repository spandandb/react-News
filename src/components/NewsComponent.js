import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';
// import sampleOutputData from '../sampleOutputData.json';
import Spinner from './Spinner';
import CategorySelector from './CategorySelector';
import CategoryChangedAlert from './CategoryChangedAlert';

export default function NewsComponent(props) {
  const [newsData, setNewsData] = useState({
    articles: [],
    loading: false
  });
  const [category, setCategory] = useState('breaking-news');
  const [alert, setAlert] = useState(false);

  const allNewsCards = newsData.articles.map((newsData) => {
    return (
      <NewsItem
        key={newsData.url}
        title={newsData.title}
        imgUrl={newsData.image}
        readMoreLink={newsData.url}
        description={newsData.description}
        author={newsData.source.name}
      />
    );
  });
  useEffect(() => {
    props.setProgress(30); // eslint-disable-next-line
    setNewsData((prevState) => {
      return { ...prevState, loading: true };
    });
    props.setProgress(70); // eslint-disable-next-line
    const apiKey = `8f6d126a4492e78d5ed3356f04920cc4`;
    // const apiKey = `cc330dcb2b5f48749802617176b91c4d`;
    // const url = `https://newsapi.org/v2/top-headlines?`;
    const url = `https://gnews.io/api/v4/top-headlines?country=in&topic=${category}&lang=en&token=${apiKey}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setNewsData({ articles: data.articles, loading: false });
      });
    document.title = `Pocket News - ${
      category[0].toUpperCase() + category.slice(1)
    }`;
    showAlert();
    props.setProgress(100); // eslint-disable-next-line
  }, [category]);

  function showAlert() {
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 5000);
  }

  const categoryBusiness = () => {
    setCategory('business');
  };
  const categoryEntertainment = () => {
    setCategory('entertainment');
  };
  const categoryGeneral = () => {
    setCategory('breaking-news');
  };
  const categoryHealth = () => {
    setCategory('health');
  };
  const categoryScience = () => {
    setCategory('science');
  };
  const categorySports = () => {
    setCategory('sports');
  };
  const categoryTechnology = () => {
    setCategory('technology');
  };

  return (
    <>
      {alert && <CategoryChangedAlert currentCategory={category} />}
      <h1>Breaking Today</h1>
      <CategorySelector
        categoryBusiness={categoryBusiness}
        categoryEntertainment={categoryEntertainment}
        categoryGeneral={categoryGeneral}
        categoryHealth={categoryHealth}
        categoryScience={categoryScience}
        categorySports={categorySports}
        categoryTechnology={categoryTechnology}
      />
      <h4 style={{ color: 'white' }}>
        Top Headlines{'  '}
        <span className='badge bg-danger'>
          {category[0].toUpperCase() + category.slice(1)}
        </span>
      </h4>
      {newsData.loading && <Spinner />}
      {!newsData.loading && (
        <div>
          <div className='news--container--outer'>
            <div className='news--container'>{allNewsCards}</div>
          </div>
        </div>
      )}
    </>
  );
}
