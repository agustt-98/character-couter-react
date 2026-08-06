const WriteArea = ({handleChangeTextArea, text}) => {
    
    return (
        <>
        <div className="textarea-div">
            <textarea className="textarea" 
                onChange={handleChangeTextArea} 
                value={text}>
            </textarea>
        </div>
        </>
    )
}

export { WriteArea }