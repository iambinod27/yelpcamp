import sprites from "../Assets/icons/sprites.svg";

function Icon(props) {
  return (
    <svg className={props.className}>
      <use href={`${sprites}/#${props.name}`} />
    </svg>
  );
}

export default Icon;
