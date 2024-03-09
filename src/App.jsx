import { useState } from 'react';
import FlashcardList from './FlashcardList';
import CardSetInfo from './CardSetInfo';
import './App.css';

const App = () => {
    const [cards] = useState([
        { question: 'What year was the first ice cream truck invented?', answer: '1920' },
        { question: 'What is the typical jingle played by ice cream trucks?', answer: 'The Entertainer by Scott Joplin' },
        { question: 'What is the most popular ice cream flavor?', answer: 'Vanilla' },
        { question: 'What is the average number of ice cream trucks operating in the United States?', answer: 'Approximately 6,000 ice cream trucks are in operation across the United States.' },
        { question: 'Where was the first recorded ice cream truck route established?', answer: 'The first recorded ice cream truck route was established in 1956 in Rhode Island, USA.' },
        { question: 'What is the largest ice cream cone ever made?', answer: 'The largest ice cream cone ever made measured over 10 feet tall and was created in Italy in 2018.' },
        { question: 'How many gallons of ice cream are consumed each year by Americans from ice cream trucks?', answer: 'Americans consume over 1.5 billion gallons of ice cream annually from ice cream trucks.' },
        { question: 'What is the most unusual ice cream flavor ever sold by an ice cream truck?', answer: 'One of the most unusual ice cream flavors sold by an ice cream truck is "garlic ice cream," which is a popular novelty flavor in some regions.' },
    ]);

    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);

    const handleNextCard = () => {
        const newIndex = Math.floor(Math.random() * cards.length);
        setCurrentCardIndex(newIndex);
        setShowAnswer(false);
    };

    return (
        <div className='app'>
            <CardSetInfo title='Ice Cream Truck Facts' description='Learn interesting facts about ice cream trucks!' totalCards={cards.length} />
            <FlashcardList cards={cards} currentCardIndex={currentCardIndex} showAnswer={showAnswer} setShowAnswer={setShowAnswer} />
            <button className='next-btn' type='submit' onClick={handleNextCard}>Next</button>
        </div>
    );
};

export default App;
