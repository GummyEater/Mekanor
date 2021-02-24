import "./App.css";
import { connect } from "react-redux";

function App(props) {
  return (
    <div>
      The count is {props.count}
      <button onClick={props.increment}>increment</button>
      <button onClick={props.incrementAsync}>incrementAsync</button>
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
