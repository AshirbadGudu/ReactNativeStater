import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Badge = ({ title, backgroundColor }) => {
  return (
    <View
      style={{
        backgroundColor: backgroundColor,
        paddingHorizontal: 8,
        marginRight: 6,
        paddingVertical: 2,
        borderRadius: 4,
      }}
    >
      <Text style={{ color: "white" }}>{title}</Text>
    </View>
  );
};

export default Badge;

const styles = StyleSheet.create({});
