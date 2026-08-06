import { use, useState } from "react"
import { Header } from "./components/Header"

const App = () => {

  const [text, setText] = useState("Design is the silent ambassador of your brand. Simplicity is key to effective communication, creating clarity in every interaction. A great design transforms complex ideas into elegant solutions, making them easy to understand. It blends aesthetics and functionality seamlessly.")
  
  const [excludeSpaces, setExcludeSpaces] = useState(false)

  const [limitCharacter, setLimitCharacter] = useState(false)

  const [limitValue, setLimitValue] = useState(300)

  const characters = excludeSpaces ? text.replace(/\s/g, "").length : text.length

  const words = text.trim() === "" ? 0 : text.trim().split(/\s+/).length

  const sentences = text.trim() === "" ? 0 : text.split(/[.!?]/).filter(sentence => sentence.trim() != "").length

  const readingTime = Math.ceil(words / 200)

  const handleChangeTextArea = (e) => {
    const value = e.target.value
    if (limitCharacter) {
      if (value.length <= limitValue) {
        setText(value)
      }
    } else {
      setText(value)
    }
  }

  const handleChangeLimitInput = () => {
    setLimitCharacter(!limitCharacter)
    const newText = text.slice(0, limitValue)
    setText(newText)
  }

  const cleanText = text.toLowerCase().replace(/[^a-záéíóúñü]/g, "")

  const total = cleanText.length

  const dictionaryLetters = {

  }

  cleanText.split("").forEach(letter => {
    dictionaryLetters[letter] = (dictionaryLetters[letter] || 0) + 1 
  })

  const letters = Object.entries(dictionaryLetters).map(dataLetter => {
    const letter = dataLetter[0]
    const letterAmount = dataLetter[1]

    const infoToRender = {
      letter: letter,
      amount: letterAmount,
      percentage: (letterAmount / total) * 100
    }

    return infoToRender
  })

  const sortLetters = letters.sort((a, b) => b.amount - a.amount)

  return (
    <main>
      <Header />

      <h2>Analyze your text<br></br>in real-time.</h2>

      <textarea 
        onChange={handleChangeTextArea} 
        value={text}>
      </textarea>
      <div>
        <label>
          <input type="checkbox" checked={excludeSpaces} onChange={() => setExcludeSpaces(!excludeSpaces)}/>
            Exclude Spaces
        </label>
        <label>
          <input type="checkbox" checked={limitCharacter} onChange={handleChangeLimitInput}/>
            Set Character Limit
        </label>
        {
          limitCharacter && <input type="number" value={limitValue} onChange={(e) => setLimitValue(e.target.value)} />
        }
      </div>
      <p>Total Characters: {characters}</p>
      <p>Word Count: {words}</p>
      <p>Sentence Count: {sentences}</p>
      <p>Reading Time: ~{readingTime} minutes</p>

      <section>
        <h2>Letter Density</h2>
        <article>
          {
            sortLetters.map(letters => (
            <div key={letters.letter}> 
              <span>{letters.letter.toUpperCase()}</span>
              <meter min="0" max="100" value={letters.percentage}></meter>
              <span>{letters.amount} ({letters.percentage.toFixed(2)}%)</span>
            </div>))
          }
        </article>
      </section>
    </main>
  )

} 

export { App }
