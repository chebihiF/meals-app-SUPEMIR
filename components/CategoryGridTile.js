/** @format */

import { Pressable, View, Text } from "react-native";

const CategoryGridTile = ({ title }) => {
  return (
    <View>
      <Pressable>
        <View>
          <Text>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTile;
