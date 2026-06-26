import ResultsTable from "./ResultsTable";

const Results = ({ grade, results }) => {
  return (
    <div>
      <h2 className="title">Grade {grade} Results</h2>

      <ResultsTable results={results} />
    </div>
  );
};

export default Results;
