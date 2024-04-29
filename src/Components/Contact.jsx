import transition from "./../transition";
function Contact() {
  return (
    <div>
      <h1>Contact Page</h1>
    </div>
  );
}
const TransitionedContact = transition(Contact);

export default TransitionedContact;
