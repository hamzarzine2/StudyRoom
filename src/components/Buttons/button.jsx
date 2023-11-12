
const Button = (props) => {
  console.log(props);
  return <button onClick={props.event} className={props.class}>{props.value}</button>;
};

export default Button;
