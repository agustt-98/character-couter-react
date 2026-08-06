const WriteArea = ({handleChangeTextArea, text}) => {
    
    return (
        <>
            <textarea 
                onChange={handleChangeTextArea} 
                value={text}>
            </textarea>
        </>
    )
}

export { WriteArea }