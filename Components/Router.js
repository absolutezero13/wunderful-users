import UsersPage from "./UsersPage";
import UserDetails from "./UserDetails";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const screens = {
  users: {
    screen: UsersPage,
  },
  userDetails: {
    screen: UserDetails,
  },
};

const Stack = createStackNavigator(screens);
export default createAppContainer(Stack);
