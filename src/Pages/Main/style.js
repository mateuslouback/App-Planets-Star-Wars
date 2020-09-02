import { StyleSheet } from "react-native";

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  titlePage: {
    color: "#FFF",
    fontSize: 27,
    marginVertical: 12,
    alignSelf: "flex-start",
    marginLeft: 20,
    fontWeight: "bold",
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
  namePlanet: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#F9F9F9",
  },
  populationNumber: {
    fontSize: 14,
    fontWeight: "normal",
    color: "#F9F9F9",
  },
  planetIcon: {
    resizeMode: "contain",
    width: 50,
    height: 50,
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
});
