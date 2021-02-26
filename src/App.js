import { connect } from "react-redux";
import "./App.scss";
import "bootswatch/dist/darkly/bootstrap.min.css";
//Custom Components
import NavbarComp from "./components/NavbarComp";

function App(props) {
  return (
    <div>
      <NavbarComp />
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
