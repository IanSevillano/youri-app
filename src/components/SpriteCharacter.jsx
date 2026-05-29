function SpriteCharacter({

  sprite,

  text,

}) {

  return (

    <div className="sprite-wrapper">

      <img
        src={sprite}
        className="sprite-image"
      />

      <div className="sprite-dialog">

        {text}

      </div>

    </div>

  );
}

export default SpriteCharacter;