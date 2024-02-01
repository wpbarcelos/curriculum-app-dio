import { Image, StyleSheet, Text, View } from "react-native";

function Header() {
  return (
    <View
      style={{
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        paddingVertical: 20,
        paddingHorizontal: 20,
      }}
    >
      <Image
        source={{ uri: "https://github.com/wpbarcelos.png" }}
        style={{ width: 70, height: 70, borderRadius: 50, resizeMode: "cover" }}
      />
      <Text style={{ fontWeight: "bold", fontSize: 20 }}>
        Wanderson Passos Barcelos
      </Text>
    </View>
  );
}

export default function SkillScreen() {
  const skills = [
    { tech: "HTML", exp: "10 anos" },
    { tech: "JAVASCRIPT", exp: "10 anos" },
    { tech: "CSS", exp: "10 anos" },
    { tech: "PHP", exp: "7 anos" },
    { tech: "REACT", exp: "4 anos" },
    { tech: "REACT NATIVE", exp: "4 anos" },
    { tech: "VUE", exp: "5 anos" },
    { tech: "ANGULAR", exp: "6 anos" },
    { tech: "LARAVEL", exp: "5 anos" },
    { tech: "TYPESCRIPT", exp: "3 anos" },
    { tech: "JAVA", exp: "1 anos" },
  ];

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.title}>Skills</Text>

      <View style={styles.containerSkills}>
        {skills.map((item) => (
          <View
            key={item.tech}
            style={{ justifyContent: "space-between", flexDirection: "row" }}
          >
            <Text style={{ fontWeight: "bold" }}>{item.tech}</Text>
            <Text style={{ fontWeight: "bold" }}>{item.exp}</Text>
          </View>
        ))}
      </View>

      <Text
        style={{
          backgroundColor: "#d9d9d9",
          fontWeight: "bold",
          textAlign: "center",
          marginTop: 20,
          marginHorizontal: 20,
          padding: 20,
          fontSize: 16,
          elevation:4
        }}
      >
        Linguagem CORE PHP{"\n"}
        Desenvolvimento de APIs{"\n"}
        Scriptcase{"\n"}
        Sistemas legados
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    paddingHorizontal: 30,
    marginVertical: 10,
  },
  containerSkills: {
    backgroundColor: "#D9D9D9",
    paddingVertical: 10,
    paddingHorizontal:20,
    gap: 2,
  },
});
