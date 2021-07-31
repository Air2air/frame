import React from "react";
import ResultItem from "./ResultItem";

const Results = ({ results }) => {
  if (results === "No Results Found") {
    return <div id="no-results">{results}</div>;
  }

  return (
    <>
      {results.length
        ? results.map((result) => (
            <ResultItem key={result.data.id} result={result.data} />
          ))
        : "No results found"}
    </>
  );
};

export default Results;
