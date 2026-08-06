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

}

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
    </main>
  )

export {App}
