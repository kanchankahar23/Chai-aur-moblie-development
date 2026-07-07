import { View, Text, StyleSheet, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const userName = "Kanchan";
  const currentHour = new Date().getHours();
  const greeting =
    currentHour < 12 ? "Good morning" : currentHour < 18 ? "Good afternoon" : "Good evening";

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.content}>
        <Text style={styles.emoji}>🏠</Text>
        <Text style={styles.title}>Home Screen</Text>
        <Text style={styles.greeting}>
          {greeting}, {userName}!
        </Text>
        <Text style={styles.subtitle}>Here's what's happening today</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  content: { flex: 1, justifyContent: "center", alignItems: "center", paddingHorizontal: 24 },
  emoji: { fontSize: 56, marginBottom: 8 },
  title: { fontSize: 30, fontWeight: "700", color: "#1a1a1a", marginBottom: 12 },
  greeting: { fontSize: 20, fontWeight: "600", color: "#4a4a4a" },
  subtitle: { fontSize: 15, color: "#8a8a8a", marginTop: 6 },
});