import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  View,
  Platform,
  FlatList,
  ScrollView,
} from "react-native";
import React from "react";
import categoriesData from "../assets/data/categoryData";
import popularData from "../assets/data/popularData";
import { Feather } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import colors from "../assets/colors/colors";

const HomeScreen = () => {
  const renderCategoryItem = ({ item }) => {
    return (
      <View
        style={[
          styles.categoryItemWrapper,
          {
            backgroundColor: item.selected ? colors.primary : "#ffff",
            marginLeft: item.id === 1 ? 20 : 0,
          },
        ]}
      >
        <Image source={item.image} style={styles.categoryItemImage} />
        <Text style={styles.categoryItemTitle}>{item.title}</Text>
        <View
          style={[
            styles.categorySelectWrapper,
            {
              backgroundColor: item.selected ? colors.white : colors.secondary,
            },
          ]}
        >
          <MaterialCommunityIcons
            name="greater-than"
            size={8}
            style={styles.categorySelectIcon}
            //color="black"
            color={item.selected ? "#00000" : "#fff"}
          />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
      >
        {/* header */}
        <SafeAreaView>
          <View style={styles.headerWrapper}>
            <Image
              source={require("../assets/img/chokoProfile.jpeg")}
              style={styles.profileImage}
            />
            {/* icon */}
            <Feather name="menu" size={24} color={colors.textDark} />
          </View>
        </SafeAreaView>

        {/* titles */}
        <View style={styles.titleWrapper}>
          <Text style={styles.titlesSubTitle}>Food</Text>
          <Text style={styles.titlesTitle}>Delivery</Text>
        </View>

        {/* search */}
        <View style={styles.searchWrapper}>
          <EvilIcons name="search" size={24} color={colors.textDark} />
          <View style={styles.search}>
            <Text style={styles.searchText}>Search</Text>
          </View>
        </View>

        {/* categories */}
        <View style={styles.categoriesWrapper}>
          <Text style={styles.categoriesTitle}>Categories</Text>
          <View style={styles.categoriesListWrapper}>
            <FlatList
              data={categoriesData}
              renderItem={renderCategoryItem}
              keyExtractor={(item) => item.id}
              horizontal={true}
            />
          </View>
        </View>

        {/* popular */}
        <View style={styles.popularWrapper}>
          <Text style={styles.popularTitle}>Popular</Text>
          {popularData.map((item, id) => (
            <View
              style={[
                styles.popularCardWrapper,
                {
                  marginTop: item.id === 1 ? 10 : 20,
                },
              ]}
              key={id}
            >
              <View>
                <View>
                  <View style={styles.popularTopWrapper}>
                    <MaterialCommunityIcons
                      name="crown"
                      size={12}
                      color={colors.primary}
                    />
                    <Text style={styles.popularTopText}>Top of the week</Text>
                  </View>
                  <View style={styles.popularTitleWrapper}>
                    <Text style={styles.popularTitlesTitle}>{item.title}</Text>
                    <Text style={styles.popularTitleWeight}>{item.weight}</Text>
                  </View>
                </View>
                <View style={styles.popularCardBottom}>
                  <View style={styles.addPizzaButton}>
                    <Feather name="plus" size={10} color={colors.textDark} />
                  </View>
                  <View style={styles.ratingWrapper}>
                    <Ionicons
                      name="ios-star"
                      size={10}
                      color={colors.textDark}
                    />
                    <Text style={styles.rating}>{item.rating}</Text>
                  </View>
                </View>
              </View>
              <View style={styles.popularCardRight}>
                <Image source={item.image} style={styles.popularCardImage} />
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

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
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 40,
    resizeMode: "cover",
  },
  titleWrapper: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  titlesSubTitle: {
    fontFamily: "monserratRegular",
    fontSize: 16,
    color: colors.textDark,
  },
  titlesTitle: {
    fontFamily: "monserratBold",
    fontSize: 32,
    color: colors.textDark,
    marginTop: 5,
  },
  searchWrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 30,
  },
  search: {
    flex: 1,
    marginLeft: 10,
    borderBottomColor: colors.textLight,
    borderBottomWidth: 2,
  },
  searchText: {
    fontFamily: "monserratSemiBold",
    fontSize: 14,
    marginBottom: 5,
    color: colors.textLight,
  },
  categoriesWrapper: {
    marginTop: 30,
  },
  categoriesTitle: {
    fontFamily: "monserratBold",
    fontSize: 16,
    paddingHorizontal: 20,
  },
  categoriesListWrapper: {
    paddingTop: 15,
    paddingBottom: 20,
  },

  categoryItemWrapper: {
    backgroundColor: "#F5CA48",
    marginRight: 20,
    borderRadius: 20,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  categoryItemImage: {
    width: 60,
    height: 60,
    marginTop: 24,
    alignSelf: "center",
    marginHorizontal: 20,
  },
  categoryItemTitle: {
    textAlign: "center",
    fontFamily: "monserratMedium",
    fontSize: 14,
    marginTop: 10,
  },
  categorySelectWrapper: {
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 20,
    width: 26,
    height: 26,
    borderRadius: 26,
    marginBottom: 20,
  },
  categorySelectIcon: {
    alignSelf: "center",
  },
  popularWrapper: {
    paddingHorizontal: 20,
  },
  popularTitle: {
    fontFamily: "monserratBold",
    fontSize: 16,
  },
  popularCardWrapper: {
    backgroundColor: colors.white,
    borderRadius: 25,
    paddingTop: 20,
    paddingLeft: 20,
    flexDirection: "row",
    overflow: "hidden",
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  popularTopWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  popularTopText: {
    marginLeft: 10,
    fontFamily: "monserratSemiBold",
    fontSize: 14,
  },
  popularTitleWrapper: {
    marginTop: 20,
  },
  popularTitlesTitle: {
    fontFamily: "monserratSemiBold",
    fontSize: 14,
    color: colors.textDark,
  },
  popularTitleWeight: {
    fontFamily: "monserratMedium",
    fontSize: 14,
    color: colors.textLight,
    marginTop: 5,
  },
  popularCardBottom: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginLeft: -20,
  },
  addPizzaButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: 40,
    paddingVertical: 20,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
  },
  ratingWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20,
  },
  rating: {
    fontFamily: "monserratSemiBold",
    fontSize: 12,
    color: colors.textDark,
    marginLeft: 5,
  },
  popularCardRight: {
    marginLeft: 20,
  },
  popularCardImage: {
    width: 210,
    height: 125,
    resizeMode: "contain",
  },
});
