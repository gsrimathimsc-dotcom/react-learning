function Welcome(props) {
  return (
    <div>
      <h2>Welcome, {props.name}!</h2>
      <p>Glad to have you in the {props.course} course.</p>
    </div>
  );
}


export default Welcome;