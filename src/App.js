import React, { useState } from 'react';
import './App.css';
import Card from './Card';

function App() {
  const [showCard, setShowCard] = useState(true)
  const toggleShowCard = () => setShowCard(!showCard)
  const [datas, setDatas] = useState([
   {
    avatar: `data:image/jpeg;base64,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`,
    title: 'International',
    name: 'Dim',
   },
   {
    avatar: 'data:image/jpeg;base64,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',
    title: 'Creative Administrator',
    name: 'Tim',
   },
   {
    avatar: 'data:image/jpeg;base64,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',
    title: 'Administrator',
    name: 'gray',
   },
   {
    avatar: 'data:image/jpeg;base64,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',
    title: 'Designer',
    name: 'Mai',
   },
  ])

  const deleteHandler = (position) => {
    const copy_data = datas
    const Onefound = copy_data?.[position]
    const result = copy_data.splice(position, 1)
    // console.log(Onefound);
    // return result
    // console.log(result);
    setDatas(datas)
  }


  const cardsMarkup = showCard && datas.map((data, idx) => {
    return  <Card
                key={idx}
                avatar={data.avatar}
                name={data.name}
                title={data.title}
                onDelete={() => deleteHandler(idx)}
              />
  }) 

  return (
    <div className="App">
      <button className="button" onClick={toggleShowCard}>Toggle show/hide</button>
      <div className='card-container'>{cardsMarkup}</div>
    </div>
  );
}

export default App;
