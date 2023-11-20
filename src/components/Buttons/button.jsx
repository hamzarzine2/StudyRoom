const Button = (props) => {
  console.log(props.class);
  return (
    <button onClick={props.event} className={props.class}>
      {props.value}
    </button>
  );
};

export default Button;
