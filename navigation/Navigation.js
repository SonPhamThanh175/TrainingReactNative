import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddStudent from "../screen/AddStudent";
import Student from "../screen/Student";
import StudentDetail from "../screen/StudentDetail";

const Stack = createNativeStackNavigator();

const ViewNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Student" component={Student}></Stack.Screen>
        <Stack.Screen name="StudentDetail" component={StudentDetail}></Stack.Screen>
        <Stack.Screen name="AddStudent" component={AddStudent}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ViewNavigation;
