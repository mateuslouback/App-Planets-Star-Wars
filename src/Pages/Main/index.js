import React, { useState, useEffect, useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  FlatList,
  Image,
  SafeAreaView,
  Alert,
  ActivityIndicator,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import styles from "./style.js";
import api from "../../services/api";

export default function Main({ navigation }) {
  const [hiddenLoad, setHiddenLoad] = useState(false);
  const [planets, setPlanets] = useState({});
  const BG = "../../../assets/bg.png";

  useEffect(() => {
    loadPlanets();
  }, []);

  const loadPlanets = async () => {
    const response = await api.get("planets").catch((error) => {
      Alert.alert(
        "Erro ao carregar os planetas.",
        "Tente novamente mais tarde.",
        [{ text: "OK" }],
        {
          cancelable: false,
        }
      );

      return;
    });

    setPlanets(response.data);
    setHiddenLoad(true);
  };

  const renderComponent = useCallback(
    ({ item }) => (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Planet", { urlPlanet: item.url });
        }}
        style={styles.listItem}
      >
        <Image
          style={styles.planetIcon}
          source={require("../../../assets/planet.png")}
        />
        <View>
          <Text style={styles.namePlanet}>Planeta {item.name}</Text>
          <Text style={styles.populationNumber}>
            {item.population} habitantes
          </Text>
        </View>
      </TouchableOpacity>
    ),
    []
  );

  return (
    <>
      <StatusBar style="light" />
      {hiddenLoad === false ? (
        <ActivityIndicator style={styles.load} size="large" color="#FFF" />
      ) : null}
      <ImageBackground
        style={{ flex: 1 }}
        source={require(BG)}
        resizeMode="cover"
      >
        <SafeAreaView style={styles.container}>
          <Text style={styles.titlePage}>Planetas</Text>
          <FlatList
            style={{ flex: 1, width: "100%" }}
            data={planets.results}
            renderItem={renderComponent}
            keyExtractor={(item) => item.name}
          />
        </SafeAreaView>
      </ImageBackground>
    </>
  );
}
