import { connect } from "react-redux";
import Button from "react-bootstrap/Button";
import "./App.scss";

function App(props) {
  return (
    <div>
      The count is {props.count}
      <Button onClick={props.increment}>increment</Button>
      <Button onClick={props.incrementAsync}>incrementAsync</Button>
    </div>
  );
}

const mapState = (state) => ({
  count: state.count,
});

const mapDispatch = (dispatch) => ({
  increment: () => dispatch.count.increment(1),
  incrementAsync: () => dispatch.count.incrementAsync(1),
});

const AppContainer = connect(mapState, mapDispatch)(App);

export default AppContainer;
