import { StyleSheet, Dimensions, TextInput, View } from "react-native";
import React from "react";
import { IconButton } from "react-native-paper";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import theme from "../../constants/colors";

type Props = {
  containerStyle?: any;
  placeholder?: string;
  searchText?: string;
  setSearchText?: React.Dispatch<React.SetStateAction<string>>;
};

const Search = (props: Props) => {
  const width = Dimensions.get("window").width;

  const [searchState, setSearchState] = React.useState(false);

  const searchButtonHandler = () => {
    animated.value = animated.value == 0 ? 1 : 0;
    setSearchState((prevState) => !prevState);
  };

  // Creating Animated Text Input Component
  const animated = useSharedValue(0);
  const AnimatedInput = Animated.createAnimatedComponent(TextInput);
  const AnimatedButton = Animated.createAnimatedComponent(IconButton);
  const animatedSearchStyles = useAnimatedStyle(() => {
    return {
      width: withTiming(animated.value ? width - 200 : 0),
      paddingHorizontal: withTiming(animated.value == 0 ? 0 : 20),
    };
  });

  const animatedIconStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotate: withTiming(animated.value == 0 ? "0deg" : `180deg`, {
            duration: 1000,
            easing: Easing.inOut(Easing.quad),
          }),
        },
      ],
    };
  });

  return (
    <View style={[styles.searchContainer, props.containerStyle]}>
      <AnimatedInput
        placeholder={props.placeholder}
        style={[styles.textInput, animatedSearchStyles]}
        value={props.searchText}
        onChangeText={props.setSearchText}
        placeholderTextColor={theme.light.text}
      />
      <AnimatedButton
        icon={searchState ? "close" : "magnify"}
        size={30}
        iconColor="black"
        onPress={searchButtonHandler}
        style={[styles.searchIcon, animatedIconStyles]}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    borderRadius: 50,
  },
  textInput: {
    backgroundColor: "white",
    height: 45,
    borderRadius: 25,
    width: 0,
  },
  searchIcon: {},
});
