import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  ScrollView,
  Text,
  Image,
  StatusBar,
  ActivityIndicator,
  ImageBackground,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from "react-native";
import axios from "axios";
import api from "../../services/api";
import styles from "./style";

export default function Planet({ route, navigation }) {
  const [hiddenLoad, setHiddenLoad] = useState(false);
  const [planet, setPlanet] = useState({});
  const [residents, setResidents] = useState({});
  const BG = "../../../assets/bg.png";
  const { urlPlanet } = route.params;

  useEffect(() => {
    loadPlanet();
  }, []);

  useEffect(() => {
    getGistsDescriptions();
  }, [planet]);

  const loadPlanet = async () => {
    const response = await api.get(urlPlanet).catch((error) => {
      Alert.alert(
        "Erro ao carregar planeta.",
        "Tente novamente mais tarde.",
        [{ text: "OK" }],
        {
          cancelable: false,
        }
      );

      return;
    });

    setPlanet(response.data);
  };

  const getGistsDescriptions = async () => {
    const linksArray = planet.residents;
    const promiseArray = linksArray.map((url) => axios.get(url));

    try {
      const gistsDescriptions = (await Promise.all(promiseArray)).map(
        (response) => response.data
      );
      setResidents(gistsDescriptions);
      setHiddenLoad(true);
    } catch (error) {
      console.error(error);
      setHiddenLoad(true);
    }
  };

  const renderComponent = useCallback(
    ({ item }) => (
      <View style={styles.listItem}>
        <Image
          style={styles.jeditIcon}
          source={require("../../../assets/jedi.png")}
        />
        <View>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.mass}>Massa: {item.mass}</Text>
        </View>
      </View>
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
        style={styles.container}
        source={require(BG)}
        resizeMode="cover"
      >
        <SafeAreaView
          style={{
            width: Dimensions.get("window").width,
            height: Dimensions.get("window").height,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              marginBottom: 12,
              alignSelf: "flex-start",
              marginLeft: 20,
              marginTop: 5,
            }}
          >
            <Image
              style={{ height: 40, width: 40, resizeMode: "contain" }}
              source={require("../../../assets/iconback.png")}
            />
          </TouchableOpacity>

          <ScrollView
            containerStyle={{
              flex: 1,
              width: Dimensions.get("window").width,
            }}
          >
            <View
              style={{
                marginHorizontal: 20,
                alignItems: "center",
              }}
            >
              <Image
                source={require("../../../assets/planet.png")}
                style={styles.planetIcon}
              />
              <Text style={styles.namePlanet}>Planeta {planet.name}</Text>
              <View style={{ flexDirection: "colum", alignItems: "center" }}>
                <Text style={styles.descPlanet}>
                  <Text style={{ fontWeight: "bold" }}>Clima:</Text>{" "}
                  {planet.climate}
                </Text>
                <Text style={styles.descPlanet}>
                  <Text style={{ fontWeight: "bold" }}>Terra:</Text>{" "}
                  {planet.terrain}
                </Text>
                <Text style={styles.descPlanet}>
                  <Text style={{ fontWeight: "bold" }}>População:</Text>{" "}
                  {planet.population}
                </Text>
              </View>
              <Text style={styles.residents}>Residentes:</Text>
              <FlatList
                scrollEnabled={false}
                style={{ flex: 1, width: "100%", marginTop: 20 }}
                data={residents}
                renderItem={renderComponent}
                keyExtractor={(item) => item.name}
              />
            </View>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    </>
  );
}
