import "./App.css";
import FruitCard from "./Components/FruitCard";

const App = () => {
  const fruitLijst = [
    {
      naam: "Banaan!",
      prijs: 6.2,
      omschrijving: "Geel, krom en zoet",
      uitverkoop: true,
      afbeelding: "https://banaan.nl/wp-content/uploads/banaan.png"
    },
    {
      naam: "Appel!",
      prijs: 5,
      omschrijving: "Groen, krom en zoet",
      uitverkoop: false,
      afbeelding:
        "https://www.solo.be/uploadedimages/ingredienten/960x446/960/450/appel.jpg/webp"
    },
    {
      naam: "Kokosnoot",
      prijs: 15,
      omschrijving: "Rond en hard",
      uitverkoop: true,
      afbeelding:
        "https://www.solo.be/uploadedimages/ingredienten/960x446/960/450/appel.jpg/webp"
    }
  ];

  return (
    <div className="App">
      {fruitLijst
        // .filter((fruit) => fruit.uitverkoop)
        .map((fruit) => {
          return (
            <FruitCard
              naam={fruit.naam}
              prijs={fruit.prijs}
              omschrijving={fruit.omschrijving}
              uitverkoop={fruit.uitverkoop}
              afbeelding={fruit.afbeelding}
            />
          );
        })}
    </div>
  );
};

export default App;
