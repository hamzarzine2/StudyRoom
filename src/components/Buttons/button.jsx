const Button = (props) => {
  
  return (
    <button onClick={props.event} className={props.class}>
      {props.value}
    </button>
  );
};

export default Button;
