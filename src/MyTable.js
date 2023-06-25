

function MyTable() {
    let nRows = 4;
    let nColumns = 4;
    
    let rows = [];
    for (let i = 0; i < nRows; i++) {
      rows.push(<MyBetterRow nColumns={nColumns} />);
    }
    return (
        <table>
          <MyBetterHeader nColumns={nColumns} />
          {rows}
        </table>
    );
  }
  function MyBetterHeader(props) {
    let cells = [];
    for (let i = 0; i < props.nColumns; i++) {
      cells.push(<MyBetterCell header={true} />);
    }
    
    return <tr>{cells}</tr>;
  }
  function MyBetterRow(props) {
    let cells = [];
    
    for (let i = 0; i < props.nColumns; i++) {
      cells.push(<MyBetterCell header={false}/>);
    }
    return <tr>{cells}</tr>;
  }
  function MyBetterCell(props) {
   
    return props.header ? (
      <th>//////</th>
    ) : (
      <td></td>
    );
  }
  export default MyTable;