import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Board from "./src/chess/Board";

const navigator = createStackNavigator(
  {
    Home: Board,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Chessboard",
    },
  }
);

export default createAppContainer(navigator);
