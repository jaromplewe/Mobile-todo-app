import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
// import CheckBoxForTask from "./CheckBoxForTask";

const TaskCard = (props) => {

  const [showCheck, setShowCheck] = useState(false);

  const toggleCheck = () => {
    showCheck ? setShowCheck(false) : setShowCheck(true);
  };

  const completeTask = (index) => {
    if (!showCheck) {
      return;
    }
    let itemsCopy = [...props.taskItems];
    itemsCopy.splice(index, 1);
    props.setTaskItems(itemsCopy);
  };

  const handleCheckBoxPress = () => {
      debugger;
    toggleCheck();
    completeTask();
  };

  const renderCheck = () => {
    console.log("showCheck: ", showCheck);
    if (showCheck === "true") {
      return (
        <Image
          source={require("../assets/check.png")}
          style={styles.checkmark}
        />
      );
    }
  };

  return (
    <View style={styles.item}>
      {/* Check Box */}
      <View style={styles.checkBox}>
        <TouchableOpacity
          style={styles.checkbox}
          onPress={() => handleCheckBoxPress()}
        >
          {renderCheck()}
        </TouchableOpacity>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>

      <View style={styles.circular}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  checkBox: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  itemText: {
    maxWidth: "80%",
  },
  checkbox: {
    width: 24,
    height: 24,
    borderColor: "#55BCF6",
    borderWidth: 2,
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  checkmark: {
    width: 20,
    height: 20,
    borderRadius: 3,
  },
});

export default TaskCard;
