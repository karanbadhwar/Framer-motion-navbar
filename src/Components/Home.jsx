import transition from "./../transition";

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
}
const TransitionedHome = transition(Home);

export default TransitionedHome;
