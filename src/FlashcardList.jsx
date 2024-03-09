import Flashcard from './Flashcard';

const FlashcardList = ({ cards, currentCardIndex, showAnswer, setShowAnswer }) => {
    const card = cards[currentCardIndex];

    return (
        <div className='flashcard-list'>
            <Flashcard question={card.question} answer={card.answer} showAnswer={showAnswer} setShowAnswer={setShowAnswer} />
        </div>
    );
};

export default FlashcardList;
