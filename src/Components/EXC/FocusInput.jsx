import { useRef } from "react"



function FocusInput(){

    const inputRef = useRef(null);

    return(
        <>
        <input ref={inputRef}></input>
        <button onClick={()=>{inputRef.current.focus()}}>Focus the input</button>
        </>
    )
}

export default FocusInput