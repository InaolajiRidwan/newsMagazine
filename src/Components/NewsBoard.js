import React, { useEffect } from "react";
import { useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = (props) => {
  const [articles, setArticles] = useState([]);

  // useEffect(() => {
  //   let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=9508b8e6de7b4bfeac010fdccf0e288f`;
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => setArticles(data.articles));
  // }, [props.category]);
  

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=9508b8e6de7b4bfeac010fdccf0e288f`;

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        return res.json();
      })
      .then((data) => setArticles(data.articles))
      .catch((error) => {
        // Handle the error here
        console.error("Error fetching data:", error);
        // Optionally, you can set an error state to display an error message in your component
      });
  }, [props.category]);


  return (
    <div>
      <h2 className="text-center mt-3 ">
        <span className="text-primary">Latest</span>
        <span className="badge bg-danger ms-2">News</span>
      </h2>
      {articles.map((news, index) => {
        return (
          <NewsItem
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        );
      })}
    </div>
  );
};

export default NewsBoard;
