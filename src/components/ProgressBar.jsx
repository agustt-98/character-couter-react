const ProgressBar = ({letters}) => {

    return(
        <>
        <li key={letters.letter} className="meter-row"> 
            <span>{letters.letter.toUpperCase()}</span>
            <meter min="0" max="100" value={letters.percentage}></meter>
            <span>{letters.amount} ({letters.percentage.toFixed(2)}%)</span>
        </li>
        </>
        )
}    

export { ProgressBar }