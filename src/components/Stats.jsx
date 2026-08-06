const Stats = ({characters, words, sentences, readingTime}) => {
    return(
        <>
        <div>
            <p>Total Characters: {characters}</p>
            <p>Word Count: {words}</p>
            <p>Sentence Count: {sentences}</p>
            <p>Reading Time: ~{readingTime} minutes</p>
        </div>
        </>
    )
}

export { Stats }