import UsersPage from "./UsersPage";
import UserDetails from "./UserDetails";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const screens = {
  users: {
    screen: UsersPage,
    navigationOptions: {
      title: "Home",
      headerTitleAlign: "center",
    },
  },
  userDetails: {
    screen: UserDetails,
    navigationOptions: {
      title: "User Details",
      headerTitleAlign: "center",
    },
  },
};

const Stack = createStackNavigator(screens);
export default createAppContainer(Stack);
