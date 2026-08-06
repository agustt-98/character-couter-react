const Controls = ({excludeSpaces, handleExcludeSpaces, limitCharacter, handleChangeLimitInput, limitValue, handleLimitValue, readingTime}) => {
  return (
    <div className="post-main">
      <div className="div-checkbox">
        <label className="control-label">
          <input
            className="checkbox"
            type="checkbox"
            checked={excludeSpaces}
            onChange={() => handleExcludeSpaces(!excludeSpaces)}
          />
          Exclude Spaces
        </label>

        <label className="control-label">
          <input
            className="checkbox"
            type="checkbox"
            checked={limitCharacter}
            onChange={handleChangeLimitInput}
          />
          Set Character Limit
        </label>

        {limitCharacter && (
          <input
            className="limit-input"
            type="number"
            min="1"
            value={limitValue}
            onChange={handleLimitValue}
          />
        )}
      </div>

      <p className="reading-time">
        Approx. reading time: {readingTime < 1 ? '<1' : readingTime} minute
        {readingTime > 1 ? 's' : ''}
      </p>
    </div>
  );
};

export { Controls };
