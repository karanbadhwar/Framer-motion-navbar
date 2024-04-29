import transition from "./../transition";

function About() {
  return (
    <div>
      <h1>About Page</h1>
    </div>
  );
}

const TransitionedAbout = transition(About);

export default TransitionedAbout;
