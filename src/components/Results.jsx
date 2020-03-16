import React from "react";
import Result from "./Result";
const Results = ({ results }) => {
  return (
    <section className="results">
      {results.map(result => {
        return <Result result={result} />;
      })}
    </section>
  );
};

export default Results;
