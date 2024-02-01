import { Button, Image, StyleSheet, Text, View } from "react-native";
import * as Linking from "expo-linking";
import { Link } from "expo-router";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View
        style={{
          height: 380,
          borderBottomLeftRadius: 200,
          borderBottomRightRadius: 200,
          width: "100%",
          backgroundColor: "#535557",
          alignItems: "center",
        }}
      >
        <Image
          source={{ uri: "https://github.com/wpbarcelos.png" }}
          style={styles.avatar}
        />
      </View>
      <Text style={styles.title}>Wanderson Passos Barcelos</Text>

      <View style={{ width: "90%", gap: 10, paddingTop: 20 }}>
        <Button
          title="LinkedIn"
          color={"#3E64EC"}
          onPress={() =>
            Linking.openURL(
              "https://www.linkedin.com/in/wanderson-passos-barcelos-ab196872/"
            )
          }
        />
        <Button
          title="Github"
          color={"#3E64EC"}
          onPress={() => Linking.openURL("https://github.com/wpbarcelos/")}
        />
        <Link asChild href="/SkillsScreen">
          <Button title="Skills" color={"#3E64EC"} />
        </Link>
        <Button
          title="Enviar e-mail"
          color={"#3E64EC"}
          onPress={() => {
            Linking.openURL(
              "mailto:wpbarcelos@gmail.com?subject=Fale Comigo&body=Quero falar contigo sobre..."
            );
          }}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  avatar: {
    width: 200,
    height: 200,
    borderRadius: 150,
    marginTop: 20,
    resizeMode: "cover",
  },
  title: {
    marginTop: 10,
    fontSize: 26,
    fontWeight: "bold",
  },
});
