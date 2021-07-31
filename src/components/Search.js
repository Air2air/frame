import React, { useState } from "react";
import SearchInput from "./SearchInput";


const Search = () => {
  const [results, setResults] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const fetchResults = (evt) => {
    evt.preventDefault();

    const query = evt.target.query.value;
    setLoading(true);

    const fetchData = async () => {
      const redditResults = await fetch(
        `https://www.reddit.com/search.json?q=${query}&sort=new`,
        {
          mode: "cors",
        }
      ).then((res) => res.json());
      if (!redditResults.data.children.length) {
        setResults("No Results Found");
      } else {
        setResults(redditResults.data.children);
      }
      setLoading(false);
    };
    fetchData();
  };

  return (
    <>
      <SearchInput fetchQuery={fetchResults} />
      {isLoading ? (
        <div className="loading">Searching Reddit...</div>
      ) : (
        <>
        {results.length
          ? results.map((result) => (
            <div className="result-item">
            <div className="result-thumbnail">
              {result.data.thumbnail && <img src={result.data.thumbnail} alt="" />}
            </div>
            <div className="result-content">
              <div className="result-title">{result.data.title}</div>
              <div className="result-details">
                r/{result.data.subreddit}
                <div className="result-author">u/{result.data.author}</div>
              </div>
              {result.data.selftext}
            </div>
          </div>
            ))
          : "No results found"}
      </>
      )}
    </>
  );
};

export default Search;
