type fruitCardProps = {
  naam: string;
  prijs: number;
  omschrijving: string;
  uitverkoop: boolean;
  afbeelding: string;
};

const FruitCard = (props: fruitCardProps) => {
  console.log(props);
  return (
    <div className="fruit-card">
      <img className="fruit-image" src={props.afbeelding} alt="banaan" />
      <p>{props.naam}</p>
      {props.uitverkoop ? <h3>UITVERKOOP</h3> : <></>}
      <p>€ {props.uitverkoop ? props.prijs / 2 : props.prijs}</p>
      <p>{props.omschrijving}</p>
      <button>Koop</button>
    </div>
  );
};

export default FruitCard;
