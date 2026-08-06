import { ProgressBar } from "./ProgressBar"

const LetterDensity = ({sortLetters}) => {

    return(
        <>
            <section>
                <h2>Letter Density</h2>
                <article>
                    <ul className="meter-list">
                          
                        {   
                            sortLetters.slice(0, 5).map(letters => <ProgressBar key={letters.letter} letters={letters} />)
                        }
                    </ul>
                </article>

                <details>
                    <summary>See More</summary>
                    <ul className="meter-list">
                        {
                            sortLetters.slice(5, sortLetters.length).map(letters => <ProgressBar key={letters.letter} letters={letters} />)
                        }
                    </ul>
                </details>
            </section>
        </>
    )
}

export { LetterDensity }