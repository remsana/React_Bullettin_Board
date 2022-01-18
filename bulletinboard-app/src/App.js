import BulletinBoard from "./components/BulletinBoard";
import "./App.css";

let questionsAndAnswers = [
  {
    question: "Vad är tre fördelar med att använda React?",
    answer: "Answer to question 1",
    id: 1
    
  },
  {
    question: "Vad betyder Single Page Application och vad skiljer det från en “vanlig” webbplats?",
    answer: "Answer to question 2",
    id: 2
  },
  {
    question: "Nämn tre skillnader mellan React och Angular.",
    answer: "Answer to question 3",
    id: 3
  }
  ];

function App() {
  return (
    <div className="App">
      <h1 style={{color: "darkblue"}}> React Bulletin Board</h1>
      <BulletinBoard list={questionsAndAnswers}/>
    </div>
  );
}

export default App;
