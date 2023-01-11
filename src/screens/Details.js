import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
  Image,
  FlatList,
} from "react-native";
import React from "react";
import colors from "../assets/colors/colors";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Details = ({ route, navigation }) => {
  const { item } = route.params;

  const renderIngredientsItem = ({ item }) => {
    return (
      <View
        style={[
          styles.ingredientItemWrapper2,
          {
            marginLeft: item.id === "1" ? 20 : 0,
          },
        ]}
      >
        <Image source={item.image} style={styles.ingredientsImage} />
      </View>
    );
  };

  return (
    <View>
      {/* header */}
      <SafeAreaView>
        <View style={styles.headerWrapper}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={styles.headerLeft}>
              <Ionicons
                name="chevron-back-outline"
                size={12}
                color={colors.textDark}
              />
            </View>
          </TouchableOpacity>

          <View style={styles.headerRight}>
            <Entypo name="star" size={12} color={colors.white} />
          </View>
        </View>
      </SafeAreaView>
      {/* titles */}

      <View style={styles.titleWrapper}>
        <Text style={styles.title}>{item.title}</Text>
      </View>

      {/* price */}
      <View style={styles.priceWrapper}>
        <Text style={styles.priceText}>₦{item.price}</Text>
      </View>

      {/* pizza info */}

      <View style={styles.infoWrapper}>
        <View style={styles.infoLeftWrapper}>
          <View style={styles.infoItemWrapper}>
            <Text style={styles.infoItemTitle}>Size</Text>
            <Text style={styles.infoItemText}>
              {item.sizeName} {item.sizeNumber}"
            </Text>
          </View>

          <View style={styles.infoItemWrapper}>
            <Text style={styles.infoItemTitle}>Crust</Text>
            <Text style={styles.infoItemText}>{item.crust}</Text>
          </View>

          <View style={styles.infoItemWrapper}>
            <Text style={styles.infoItemTitle}>Delivery in</Text>
            <Text style={styles.infoItemText}>{item.deliveryTime} min</Text>
          </View>
        </View>
        <View>
          <Image source={item.image} style={styles.itemImage} />
        </View>
      </View>

      {/* Ingredients */}
      <View style={styles.ingredientsWrapper}>
        <Text style={styles.ingredientsTitle}>Ingredients</Text>
        <View style={styles.ingredientsListWrapper}>
          <FlatList
            data={item.ingredients}
            renderItem={renderIngredientsItem}
            keyExtractor={(item) => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>

      {/* place an order */}
      <TouchableOpacity onPress={() => alert("Your order has been placed!")}>
        <View style={styles.orderWrapper}>
          <Text style={styles.orderText}>Place an order</Text>
          <MaterialCommunityIcons
            name="greater-than"
            size={18}
            //style={styles.categorySelectIcon}
            color="black"
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "ios" ? null : 40,
  },
  headerWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  headerLeft: {
    borderColor: colors.textLight,
    borderWidth: 2,
    padding: 12,
    borderRadius: 10,
  },
  headerRight: {
    backgroundColor: colors.primary,
    padding: 12,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.textLight,
  },
  titleWrapper: {
    paddingHorizontal: 20,
    marginTop: 30,
  },
  title: {
    fontFamily: "monserratBold",
    fontSize: 32,
    color: colors.textDark,
    width: "50%",
  },
  priceWrapper: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  priceText: {
    color: colors.price,
    fontFamily: "monserratBold",
    fontSize: 32,
  },
  infoWrapper: {
    marginTop: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  infoLeftWrapper: {
    paddingHorizontal: 20,
  },
  infoItemWrapper: {
    marginBottom: 20,
  },
  infoItemTitle: {
    fontFamily: "monserratMedium",
    fontSize: 14,
    color: colors.textLight,
  },
  infoItemText: {
    fontFamily: "monserratSemiBold",
    fontSize: 18,
    color: colors.textDark,
  },
  itemImage: {
    resizeMode: "contain",
    marginLeft: 50,
  },
  ingredientsWrapper: {
    marginTop: 40,
  },
  ingredientsTitle: {
    paddingHorizontal: 20,
    fontFamily: "monserratBold",
    fontSize: 16,
    color: colors.textDark,
  },
  ingredientsListWrapper: {
    paddingVertical: 20,
  },
  ingredientItemWrapper2: {
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    marginRight: 15,
    borderRadius: 15,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  ingredientsImage: {
    resizeMode: "contain",
  },
  orderWrapper: {
    marginTop: 20,
    marginHorizontal: 20,
    backgroundColor: colors.primary,
    borderRadius: 50,
    paddingVertical: 25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  orderText: {
    fontFamily: "monserratBold",
    fontSize: 14,
    marginRight: 10,
  },
});
