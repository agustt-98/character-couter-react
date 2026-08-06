const Stats = ({characters, words, sentences, readingTime}) => {
    return(
        <>
        <section className="cards">
            <article className="stat-card card1">
                <h2>{characters}</h2>
                <p>Total Characters</p>
            </article>

            <article className="stat-card card2">
                <h2>{words}</h2>
                <p>Word Count</p>
            </article>

            <article className="stat-card card3">
                <h2>{String(sentences).padStart(2, '0')}</h2>
                <p>Sentence Count</p>
            </article>
        </section>
        </>
    )
}

export { Stats }