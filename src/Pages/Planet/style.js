import { StyleSheet } from "react-native";

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  namePlanet: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#F9F9F9",
    marginVertical: 25,
  },
  descPlanet: {
    fontSize: 14,
    fontWeight: "normal",
    color: "#F9F9F9",
    marginVertical: 10,
  },
  planetIcon: {
    resizeMode: "contain",
    width: 150,
    height: 150,
    marginRight: 15,
    marginTop: 30,
    marginBottom: 15,
  },
  jeditIcon: {
    resizeMode: "contain",
    width: 40,
    height: 40,
    marginRight: 15,
  },
  load: {
    position: "absolute",
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.7)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  listItem: {
    paddingVertical: 17,
    paddingHorizontal: 20,
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#37373F",
    flexDirection: "row",
    alignItems: "center",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#F9F9F9",
  },
  mass: {
    fontSize: 14,
    fontWeight: "normal",
    color: "#F9F9F9",
  },
  residents: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "flex-start",
    marginTop: 20,
  },
});
