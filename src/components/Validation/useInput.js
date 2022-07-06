import { useState } from "react"

const useInput = (initalValue) =>{
    const [inputField,setInputField] = useState(initalValue)
    const bind={
        value:inputField,
        onChange:e =>setInputField(e.target.value)
    }

    return [inputField,bind]
}

export default useInput