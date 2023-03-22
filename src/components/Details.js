import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../asssets/colors/colors";

const Details = ({ route, navigation }) => {
  const { item } = route.params; //navigation paketi ile gelen bir props bu sayfaya home dan veri aktarımını sağlar
  console.log(item);
  return (
    <View style={styles.container}>
      <SafeAreaView>
        {/* Header */}
        <View style={styles.headerWrapper}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={styles.headerLeft}>
              <Feather
                name={"chevron-left"}
                size={12}
                color={colors.textDark}
              />
            </View>
          </TouchableOpacity>
          <View style={styles.headerRight}>
            <Feather name={"chevron-right"} size={12} color={colors.white} />
          </View>
        </View>

        {/* Titles */}
        <View style={styles.titlesWrapper}>
          <Text style={styles.titles}>{item.title}</Text>
        </View>
        {/* Price */}
        <View style={styles.priceWrapper}>
          <Text style={styles.priceText}>${item.price}</Text>
        </View>

        {/* Info */}
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
          <View >
            <Image source={item.image} style={styles.itemImage} />
          </View>
        </View>

        {/* Ingredients */}
        <View>
            
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  headerWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  headerLeft: {
    borderWidth: 2,
    padding: 12,
    borderRadius: 10,
    borderColor: colors.textDark,
  },
  headerRight: {
    borderWidth: 2,
    padding: 12,
    borderRadius: 10,
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  titlesWrapper: { paddingHorizontal: 20, marginTop: 30 },
  titles: {
    fontSize: 32,
    fontWeight: "bold",
    color: colors.textDark,
    width: "50%",
  },
  priceWrapper: { marginTop: 20, paddingHorizontal: 20 },
  priceText: { fontSize: 32, color: colors.price, fontWeight: "bold" },
  infoWrapper: {
    marginTop: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  infoLeftWrapper: { marginLeft: 20 },
  infoItemWrapper: { marginBottom: 20 },
  infoItemTitle: { fontSize: 14, color: colors.textLight },
  infoItemText: { fontSize: 18, color: colors.textDark },
  itemImage: { marginLeft: 50, resizeMode: "contain" },
});

export default Details;
