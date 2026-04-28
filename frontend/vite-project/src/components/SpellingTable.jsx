function SpellingTable({ results }) {
  return (
    <div style={{ marginTop: "20px", color: "black" }}>
      <h3>Spelling Results</h3>

      <table style={{ width: "100%", backgroundColor: "white" }} border="1">
        <thead style={{ backgroundColor: "#f1f1f1" }}>
          <tr>
            <th>File</th>
            <th>Misspelled Words</th>
            <th>Total Words</th>
            <th>Score (%)</th>
          </tr>
        </thead>

        <tbody>
          {results.map((item, index) => (
            <tr key={index}>
              <td>{item.file}</td>
              <td>{item.misspelled}</td>
              <td>{item.total_words}</td>
              <td>{item.score}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SpellingTable;