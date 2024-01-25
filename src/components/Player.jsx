import { useState } from "react";

export default function Player({
  defaultLogin,
  symbol,
  isActive,
  onChangeName,
}) {
  const [login, setLogin] = useState(defaultLogin);
  const [edit, setEdit] = useState(false);

  function handleLoginEdit(event) {
    setLogin(event.target.value);
  }

  function handleEditClick() {
    setEdit((editing) => !editing);

    if (edit) {
      onChangeName(symbol, login);
    }
  }

  let editableLogin = <span className="player-name">{login}</span>;

  let editBtn = <button onClick={handleEditClick}>Изменить</button>;
  if (edit) {
    editableLogin = (
      <input type="text" required value={login} onChange={handleLoginEdit} />
    );
    editBtn = <button onClick={handleEditClick}>Сохранить</button>;
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editableLogin}
        <span className="player-symbol">{symbol}</span>
      </span>
      {editBtn}
    </li>
  );
}
