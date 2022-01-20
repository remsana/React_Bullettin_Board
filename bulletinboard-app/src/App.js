import BulletinBoard from "./components/BulletinBoard";
import "./App.css";

let questionsAndAnswers = [
  {
    question: "Vad är tre fördelar med att använda React?",
    answer: "1. React är mycket lättare att lära sig och använda. 2. Det hjälper till att skapa dynamiska webbapplikationer enkelt genom att använda JSX (JavaScript Extension). 3. En React-webbapplikation består av flera komponenter och varje komponent har sin egen logik och kontroller. Den återanvändbara koden hjälper till att göra våra appar lättare att utveckla och underhålla.",
    id: 1
    
  },
  {
    question: "Vad betyder Single Page Application och vad skiljer det från en “vanlig” webbplats?",
    answer: "En Single-Page Application (SPA) är en applikation som fungerar i en webbläsare och som inte kräver att sidan laddas om under användning. Exempel på SPA-appar är Gmail, Google Maps, Facebook eller GitHub. Å andra sidan anses en vanlig webbplats vara en mer klassisk metod för apputveckling. Det flersidiga designmönstret kräver att sidan laddas om varje gång innehållet ändras. Det är ett föredraget alternativ för stora företag med omfattande produktportföljer, såsom e-handelsföretag.",
    id: 2
  },
  {
    question: "Nämn tre skillnader mellan React och Angular.",
    answer: "1. React är väldigt flexibelt och bör kombineras med många andra bibliotek medan Angular kommer med ett flertal verktyg som är optimerade för varandra. 2. Angular är idealiskt om man vill skapa storskaliga och rika applikationer medan React skapar SPA. 3. Typescript som består av Javascript + HTML används i Angular medan React använder Javascript+JSX.",
    id: 3
  }
  ];

function App() {
  return (
    <div className="App">
      <h2 className="heading"> React Bulletin Board</h2>
      <BulletinBoard list={questionsAndAnswers}/>
    </div>
  );
}

export default App;
