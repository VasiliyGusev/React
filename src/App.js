import {Message} from "./components/Message/Message";
import {useState} from "react";

export const App = () => {
    const [text, setText] = useState('Текст для компонента Message из родителя')
    const handleChangeText = (el) => {
        setText(el.target.value)
    }
  return (
    <div className="App">
        <input onChange={handleChangeText}/>
        <Message text={text}/>
    </div>
  );
}

