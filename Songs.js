import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import Colors from "./Themes/colors";
import { Ionicons } from "@expo/vector-icons";

export default function Songs({
  name,
  url,
  album,
  artists,
  duration,
  external_urls,
  preview_url,
  navigation,
}) {
  return (
    <Pressable
      onPress={() => navigation.navigate("Details", { webview: external_urls })}
    >
      <View style={styles.track}>
        <Pressable
          onPress={(e) => {
            e.stopPropagation();
            navigation.navigate("Preview", { webview: preview_url });
          }}
        >
          <Ionicons name="md-play-circle" size={24} color={Colors.spotify} />
        </Pressable>
        <Image
          style={styles.image}
          source={{
            uri: url,
          }}
        />
        <View>
          <Text style={styles.name} numberOfLines={1}>
            {name}
          </Text>
          <Text style={styles.artist}>{artists}</Text>
        </View>
        <Text style={styles.album} numberOfLines={1}>
          {album}
        </Text>
        <Text style={styles.duration}>{duration}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  track: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "2%",
    width: "100%",
  },
  tracknum: {
    fontSize: 16,
    color: Colors.gray,
    justifyContent: "center",
    alignContent: "center",
    paddingHorizontal: "1%",
    width: 25,
    marginHorizontal: 5,
  },
  album: {
    fontSize: 14,
    color: "white",
    width: 100,
    justifyContent: "flex-start",
    marginHorizontal: 5,
  },
  duration: {
    fontSize: 14,
    color: "white",
    justifyContent: "flex-end",
    flex: 1,
  },
  name: {
    fontSize: 16,
    color: "white",
    justifyContent: "flex-start",
    width: 110,
    marginHorizontal: 5,
  },
  artist: {
    fontSize: 14,
    color: Colors.gray,
    justifyContent: "flex-start",
    width: 110,
    marginHorizontal: 5,
  },
  image: {
    width: 60,
    height: 60,
    resizeMode: "contain",
    justifyContent: "flex-start",
    marginHorizontal: 5,
    marginLeft: 16,
  },
});
