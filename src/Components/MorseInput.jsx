import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import classes from '../Components/News.css';


const MorseInput = () => {
  const morseCode = {
    "A": ".-", "B": "-...", "C": "-.-.", "D": "-..", "E": ".",
    "F": "..-.", "G": "--.", "H": "....", "I": "..", "J": ".---",
    "K": "-.-", "L": ".-..", "M": "--", "N": "-.", "O": "---",
    "P": ".--.", "Q": "--.-", "R": ".-.", "S": "...", "T": "-",
    "U": "..-", "V": "...-", "W": ".--", "X": "-..-", "Y": "-.--",
    "Z": "--..",
    "0": "-----", "1": ".----", "2": "..---", "3": "...--",
    "4": "....-", "5": ".....", "6": "-....", "7": "--...",
    "8": "---..", "9": "----."
  };

  const [inputValue, setInputValue] = useState('');
  const [translatedText, setTranslatedText] = useState('');

  const handleOnClick = () => {
    let translatedMorse = '';
    for (let i = 0; i < inputValue.length; i++) {
      const char = inputValue[i].toUpperCase();
      if (char === ' ') {
        translatedMorse += '   ';
      } else if (morseCode[char]) {
        translatedMorse += morseCode[char] + ' ';
      }
    }
    setTranslatedText(translatedMorse.trim());
    inputValue = '';
  }

  return (
    <div>
      <input value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleOnClick}>Convert to Morse</button>
      <h2>{translatedText}</h2>
    </div>
  );
}

ReactDOM.render(<MorseInput />, document.getElementById('root'));

export default MorseInput;
