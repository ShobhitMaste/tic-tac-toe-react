import { useState } from "react";

export default function Player({ initialName, symbol, isActive, onPlayerChangeName }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  function handleEditClick() {
    setIsEditing((editing) => {
      console.log("editing - " + !editing);
      return !editing
    });
    console.log("isediting - " + isEditing);
    if(isEditing)
      onPlayerChangeName(symbol, playerName);

  }

  //handleInputPlayerName function automatically gets the evnet attribute, magica
  function handleInputPlayerName(event) {
    setPlayerName(event.target.value);
  }

  //defaultValue is a thing in inputs
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {isEditing ? (
          <input
            onChange={handleInputPlayerName}
            type="text"
            value={playerName}
            required
          ></input>
        ) : (
          <span className="player-name">{playerName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}> {isEditing ? "Save" : "Edit"} </button>
    </li>
  );
}
