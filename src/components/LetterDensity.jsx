import { ProgressBar } from "./ProgressBar"

const LetterDensity = ({sortLetters}) => {

    return(
        <>
            <section className="density">
                <h2 className="density-title">Letter Density</h2>
                    <ul className="meter-list">
                        {   
                            sortLetters.slice(0, 5).map(letters => <ProgressBar key={letters.letter} letters={letters} />)
                        }
                    </ul>

                {sortLetters.length > 5 && (
                    <details className="see-more">
                        <summary>See More</summary>
                            <ul className="meter-list">
                                {sortLetters.slice(5, sortLetters.length).map((letters) => (
                                <ProgressBar key={letters.letter} letters={letters} />
                                ))}
                             </ul>
                </details>
                )}
            </section>
                            
        </>
    )
}

export { LetterDensity }