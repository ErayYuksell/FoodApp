import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  FlatList,
  ScrollView,
} from "react-native";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import categoriesData from "../asssets/data/categoriesData";
import popularData from "../asssets/data/popularData";
import colors from "../asssets/colors/colors";

const Home = () => {
  const renderCatagoryItem = ({ item }) => {
    return (
      <View
        style={[
          styles.categoryItemWrapper,
          {
            backgroundColor: item.selected ? colors.primary : colors.white,
            marginLeft: item.id == 1 ? 20 : 0,
          },
        ]}
      >
        <Image style={styles.categoryItemImage} source={item.image} />
        <Text style={styles.categoryItemTitle}>{item.title}</Text>
        <View
          style={[
            styles.categorySelectWrapper,
            {
              backgroundColor: item.selected ? colors.white : colors.secondary,
            },
          ]}
        >
          <Feather
            name="chevron-right"
            size={8}
            style={styles.categorySelectIcon}
            color={item.selected ? colors.black : colors.white}
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
        {/* Header */}
        <SafeAreaView>
          <View style={styles.headerWrapper}>
            <Image
              style={styles.profileImage}
              source={require("../asssets/images/profile.png")}
            />
            <Feather name="menu" size={24} color={colors.textDark} />
          </View>
        </SafeAreaView>

        {/* Titles */}
        <View style={styles.titlesWrapper}>
          <Text style={styles.titlesSubtitle}>Food</Text>
          <Text style={styles.titlesTitles}>Delivery</Text>
        </View>

        {/* Search */}
        <View style={styles.searchWrapper}>
          <Feather name="search" size={24} color={colors.textDark} />
          <View style={styles.search}>
            <Text style={styles.searchText}>Search</Text>
          </View>
        </View>

        {/* Catagories */}
        <View style={styles.categoriesWrapper}>
          <Text style={styles.categoriesTitle}>Catagories</Text>
          <View style={styles.categoriesListWrapper}>
            <FlatList
              data={categoriesData}
              keyExtractor={(item) => item.id}
              renderItem={renderCatagoryItem}
              horizontal={true}
            />
          </View>
          {/* Popular */}
          <View style={styles.popularWrapper}>
            <Text style={styles.popularTitle}>Popular</Text>
            {popularData.map((item) => (
              <View
                style={[
                  styles.popularCardWrapper,
                  { marginTop: item.id == 1 ? 10 : 20 },
                ]}
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
                    <View style={styles.popularTitlesWrapper}>
                      <Text style={styles.popularTitlesTitle}>
                        {item.title}
                      </Text>
                      <Text style={styles.popularTitlesWeight}>
                        Weight {item.weight}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.popularCardBottom}>
                    <View style={styles.addPizzaButton}>
                      <Feather name="plus" size={10} color={colors.textDark} />
                    </View>
                    <View style={styles.ratingWrapper}>
                      <MaterialCommunityIcons
                        name="star"
                        size={10}
                        color={colors.textDark}
                      />
                      <Text style={styles.rating}>{item.rating}</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.popularCardRight}>
                  <Image style={styles.popularCardImage} source={item.image} />
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  profileImage: { width: 40, height: 40, borderRadius: 40 },
  titlesWrapper: { marginTop: 30, paddingHorizontal: 20 },
  titlesSubtitle: { fontSize: 16, color: colors.textDark, fontWeight: "bold" }, //fontFamily hata veriyor
  titlesTitles: {
    fontSize: 32,
    color: colors.textDark,
    fontWeight: "bold",
    marginTop: 5,
  },
  searchWrapper: {
    flexDirection: "row",
    marginTop: 30,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  search: {
    flex: 1,
    marginLeft: 10,
    borderBottomWidth: 2,
    borderBottomColor: colors.textLight,
  },
  searchText: { fontSize: 14, marginBottom: 5, color: colors.textLight }, //fontFamily hata veriyor
  categoriesWrapper: { marginTop: 30 },
  categoriesTitle: { fontSize: 16, paddingHorizontal: 20, fontWeight: "bold" }, //fontFamily hata veriyor
  categoriesListWrapper: { marginTop: 15, marginBottom: 20 },
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
    marginTop: 25,
    marginHorizontal: 20,
    alignSelf: "center",
  },
  categoryItemTitle: { textAlign: "center", fontSize: 14, marginTop: 10 }, //fontFamily hata veriyor
  categorySelectWrapper: {
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 20,
    width: 26,
    height: 26,
    borderRadius: 26,
  },
  categorySelectIcon: { alignSelf: "center" },
  popularWrapper: { paddingHorizontal: 20 },
  popularTitle: { fontSize: 16, fontWeight: "bold" }, //fontFamily hata veriyor
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
  popularTopWrapper: { flexDirection: "row", alignItems: "center" },
  popularTopText: { marginLeft: 10, fontSize: 14 },
  popularTitlesWrapper: { marginTop: 20 },
  popularTitlesTitle: {
    //fontFamily hata veriyor
    fontSize: 14,
    fontWeight: "bold",
    color: colors.textDark,
  },
  popularTitlesWeight: {
    //fontFamily hata veriyor
    fontSize: 12,
    fontWeight: "bold",
    color: colors.textLight,
    marginTop: 5,
  },
  popularCardBottom: {
    flexDirection: "row",
    alingItems: "center",
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
  ratingWrapper: { flexDirection: "row", alignItems: "center", marginLeft: 20 },
  rating: {
    fontSize: 12,
    color: colors.textDark,
    fontWeight: "bold",
    marginLeft: 5,
  }, //fontFamily hata veriyor
  popularCardRight: { marginLeft: 40 },
  popularCardImage: { width: 210, height: 125, resizeMode: "contain" },
});

export default Home;
