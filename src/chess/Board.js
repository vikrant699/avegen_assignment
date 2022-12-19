import React from "react";
import { View, Dimensions, Text, Pressable } from "react-native";
import Square from "./Square";
import { reset, moves } from "./Moves";

const Board = () => {
  const [state, setState] = React.useState(reset);

  const resetBoard = () => {
    setState(reset);
  };

  const randomMove = () => {
    const random = Math.floor(Math.random() * moves.length);
    const openingMove = moves[random];
    Object.keys(reset).forEach((key) => {
      if (!(key in openingMove)) {
        openingMove[key] = reset[key];
      }
    });
    setState(openingMove);
  };

  const isEven = (num) => {
    return num % 2 == 0;
  };

  const renderBoard = () => {
    const columns = ["A", "B", "C", "D", "E", "F", "G", "H"];
    const board = [];

    for (let i = 0; i < columns.length; i++) {
      const squareRows = [];
      for (let j = 0; j < 8; j++) {
        const id =
          String.fromCharCode(j + 1 + 64) + String.fromCharCode(i + 1 + 64);

        squareRows.push(
          <Square
            style={{
              width: Dimensions.get("window").width / 9,
              height: Dimensions.get("window").width / 9,
              backgroundColor:
                (isEven(i) && isEven(j)) || (!isEven(i) && !isEven(j))
                  ? "white"
                  : "black",
            }}
            key={id}
            src={state[id]}
          />
        );
      }
      board.push(
        <View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "black",
              borderBottomWidth: 3,
              borderColor: "white",
              height: Dimensions.get("window").width / 18,
            }}
          >
            <Text
              style={{
                color: "white",
              }}
            >
              {columns[i]}
            </Text>
          </View>
          {squareRows}
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "black",
              borderTopWidth: 3,
              borderColor: "white",
              height: Dimensions.get("window").width / 18,
            }}
          >
            <Text
              style={{
                color: "white",
              }}
            >
              {columns[i]}
            </Text>
          </View>
        </View>
      );
    }
    return board;
  };

  const renderRowLabels = () => {
    const rowLabels = [];
    for (let i = 0; i < 8; i++) {
      rowLabels.push(
        <View
          style={{
            width: Dimensions.get("window").width / 18,
            height: Dimensions.get("window").width / 9,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "white",
            }}
          >
            {8 - i}
          </Text>
        </View>
      );
    }
    return rowLabels;
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "black",
            borderRightWidth: 3,
            borderColor: "white",
          }}
        >
          {renderRowLabels()}
        </View>
        {renderBoard()}
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "black",
            borderLeftWidth: 3,
            borderColor: "white",
          }}
        >
          {renderRowLabels()}
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Pressable
          style={{
            backgroundColor: "black",
            padding: 10,
            borderRadius: 5,
            margin: 5,
          }}
          onPress={() => randomMove()}
        >
          <Text
            style={{
              color: "white",
            }}
          >
            Random
          </Text>
        </Pressable>
        <Pressable
          style={{
            backgroundColor: "black",
            padding: 10,
            borderRadius: 5,
            margin: 5,
          }}
          title="Reset"
          onPress={() => resetBoard()}
        >
          <Text
            style={{
              color: "white",
            }}
          >
            Reset
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Board;
