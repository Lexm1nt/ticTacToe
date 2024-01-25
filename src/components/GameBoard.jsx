export default function GameBoard({ PlayerMove, board }) {
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerMove, columnIndex) => (
              <li key={columnIndex}>
                <button
                  onClick={() => PlayerMove(rowIndex, columnIndex)}
                  disabled={playerMove !== null}
                >
                  {playerMove}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
