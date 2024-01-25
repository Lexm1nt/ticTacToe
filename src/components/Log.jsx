export default function Log({ turns }) {
  return (
    <ol id="log">
      {turns.map((turn) => (
        <li key={`${turn.square.row}${turn.square.col}`}>
          Игрок: {turn.player} Сделал ход: {turn.square.row},{turn.square.col}
        </li>
      ))}
    </ol>
  );
}
