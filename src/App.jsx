import { use, useState } from "react"
import { Header } from "./components/Header.jsx"
import { WriteArea } from "./components/WriteArea.jsx"
import { Controls } from "./components/Controls.jsx"
import { Stats } from "./components/Stats.jsx"
import { LetterDensity } from "./components/LetterDensity.jsx"

const App = () => {

  const [text, setText] = useState("Design is the silent ambassador of your brand. Simplicity is key to effective communication, creating clarity in every interaction. A great design transforms complex ideas into elegant solutions, making them easy to understand. It blends aesthetics and functionality seamlessly.")
  
  const [excludeSpaces, setExcludeSpaces] = useState(false)

  const [limitCharacter, setLimitCharacter] = useState(false)

  const [limitValue, setLimitValue] = useState(300)

  const [showAll, setShowAll] = useState(false)

  const [dark, setDark] = useState(false) 

  const handleExcludeSpaces = () => {
    setExcludeSpaces(!excludeSpaces)
  }

  const handleLimitValue = () => {
    setLimitValue(!limitCharacter)
  }

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

  const handleShowAll = () => {
    setShowAll(!showAll)
  }

  const cleanText = text.toLowerCase().replace(/[^a-záéíóúñü]/g, "")

  const total = cleanText.length

  const dictionaryLetters = {}

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

  const visibleLetters = showAll ? sortLetters : sortLetters.slice(0, 5)

  const handleDarkTheme = () => {
    setDark(!dark)
  }

  return (
    <main className={`${dark ? "dark-theme" : ""}`}>

      <Header dark={dark} handleDarkTheme={handleDarkTheme}/>

      <h2>Analyze your text<br></br>in real-time.</h2>

      <WriteArea 
        handleChangeTextArea={handleChangeTextArea}
        text={text}
      />

      <Controls 
        excludeSpaces={excludeSpaces}
        handleExcludeSpaces={handleExcludeSpaces} 
        limitCharacter={limitCharacter}
        handleChangeLimitInput={handleChangeLimitInput} 
        limitValue={limitValue} 
        handleLimitValue={handleLimitValue}
      />

      <Stats 
        words={words}
        sentences={sentences}
        characters={characters}
        readingTime={readingTime}
      />

      <LetterDensity
        sortLetters={sortLetters}
      />
    </main>
  )

} 

export { App }
