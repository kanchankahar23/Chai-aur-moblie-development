import { ScrollView, Text } from "react-native";
// import { ScrollView } from "react-native-reanimated/lib/typescript/Animated";

function HomeScreen() {
  // const [isEnabled, setIsEnabled] = useState(false)
  // const toggleSwitch = () => {
  //   setIsEnabled((prev) => !prev)
  // }
  // const pressMe = () => {
  //   Alert.alert("button clicked");
  // };

  return (
    //  { <View style={{ backgroundColor: "white" }}>
    //     <Text style={{ fontSize: 24 }}>
    //       Hello Kanchan 😀 Lets Start one more skill in your bag
    //     </Text>
    //     <Button title="Click me" onPress={pressMe} />
    //     <Switch
    //       value={isEnabled}
    //       onValueChange={toggleSwitch}

    //     />
    //   </View>}
    <ScrollView>
      {[...Array(30)].map((_, i) => (
        <Text key={i} style={{ fontSize: 24 }}>
          Hello Kanchan {i+1}😀 Lets Start one more skill in your bag
        </Text>
      ))}
    </ScrollView>

  );
}

export default HomeScreen;