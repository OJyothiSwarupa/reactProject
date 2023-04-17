import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

function QuoteGenerator()  {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [backgroundColor, setBackgroundColor] = useState("blue")

  async function getRandomQuote()  {
    const response = await axios.get('https://type.fit/api/quotes');
    const {text, author} = response.data[Math.floor(Math.random() * response.data.length)];
    console.log(response);
    setQuote(text);
    setAuthor(author);
    setBackgroundColor(getRandomColor());
  }
  function newQuoteClick() {
   getRandomQuote();
  }

  function getRandomColor(){
    const colors = [
      '#FF0000','#008000','#808080','#FFCCCB','#FFFF00','#ADD8E6',
      '#FFCCCB','#800080','#00FF00','#9D00FF','#800000','#93917C'
    ];
    const index = Math.floor(Math.random()*colors.length);
    return colors[index];
  }

  return (
    <div style = {{backgroundColor, width:"600px", height:"200px", className:"mx-auto", marginLeft:"450px", marginTop:"200px", fontWeight: "bold"}}>
      <div><br />
        "{quote}"
      </div><br />
      <div style = {{marginLeft:"15rem"}}>
        -{author}
      </div><br />
      <div style={{marginLeft:"18rem"}}>
        <Button variant="light" onClick={newQuoteClick}>New Quote</Button>
      </div>
    </div>

  );
};

export default QuoteGenerator;