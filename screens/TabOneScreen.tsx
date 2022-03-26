import {
  StyleSheet,
  TouchableOpacity,
  Alert,
  ImageBackground,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Feather } from "@expo/vector-icons";
import Colors from "../constants/Colors";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <ImageBackground
          source={require("../assets/images/img1.jpg")}
          style={styles.backgroundImage}
        >
          <Text style={styles.mainImgname}>작품이름</Text>
        </ImageBackground>

        <View style={styles.randomSubject}>
          <View style={styles.randomSubjectTitle}>
            <Text style={{ fontSize: 20 }}>ArtistName</Text>
            <TouchableOpacity
              onPress={() => alert("Hello, world!")}
              style={{ backgroundColor: "blue" }}
            >
              <Text style={{ fontSize: 20, color: "#fff" }}>더보기</Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            style={styles.randomContentBox}
          >
            <View style={styles.randomContent}>
              <Text style={styles.randomCName}>1</Text>
            </View>
            <View style={styles.randomContent}>
              <Text style={styles.randomCName}>2</Text>
            </View>
            <View style={styles.randomContent}>
              <Text style={styles.randomCName}>3</Text>
            </View>
            <View style={styles.randomContent}>
              <Text style={styles.randomCName}>4</Text>
            </View>
            <View style={styles.randomContent}>
              <Text style={styles.randomCName}>5</Text>
            </View>
            {/* 최대 10개만나오게>?*/}
          </ScrollView>
        </View>

        <View style={styles.randomSubject}>
          <View style={styles.randomSubjectTitle}>
            <Text style={{ fontSize: 20 }}>ArtistName</Text>
            <TouchableOpacity
              onPress={() => alert("Hello, world!")}
              style={{ backgroundColor: "blue" }}
            >
              <Text style={{ fontSize: 20, color: "#fff" }}>더보기</Text>
            </TouchableOpacity>
          </View>

          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            style={styles.randomContentBox}
          >
            <View style={styles.randomContent}>
              <Text style={styles.randomCName}>1</Text>
            </View>

            <View style={styles.randomContent}>
              <Text style={styles.randomCName}>2</Text>
            </View>
            <View style={styles.randomContent}>
              <Text style={styles.randomCName}>3</Text>
            </View>
            <View style={styles.randomContent}>
              <Text style={styles.randomCName}>4</Text>
            </View>
            <View style={styles.randomContent}>
              <Text style={styles.randomCName}>5</Text>
            </View>
            {/* 최대 10개만나오게>?*/}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  backgroundImage: {
    flex: 1,
    height: 700,
    width: "100%",
  },
  randomItem: {},
  randomSubject: {
    margin: 10,
  },
  mainImgname: {
    fontSize: 30,
    color: "white",
    alignItems: "flex-end",
  },
  randomContent: {
    width: 100,
    height: 100,
    backgroundColor: "grey",
    margin: 10,
  },
  randomContentBox: {
    flexDirection: "row",
  },
  randomCName: {},
  randomSubjectTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  scrollView: {},
});
