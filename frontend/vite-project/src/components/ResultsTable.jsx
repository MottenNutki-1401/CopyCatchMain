function ResultsTable({ results }) {
  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Similarity Results</h3>

      <table border="1" style={{ width: "100%", marginTop: "10px" , color: "black", }}>
        <thead>
          <tr>
            <th>File</th>
            <th>Most Similar</th>
            <th>Similarity (%)</th>
          </tr>
        </thead>

        <tbody>
          {results.map((item, index) => (
            <tr key={index}>
              <td>{item.file}</td>
              <td>{item.most_similar}</td>
              <td>{item.similarity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ResultsTable;