import React, { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { products } from "../data/products";
import { useShopping } from "../store/ShoppingStore";

export default function AddItemScreen() {
  const [search, setSearch] = useState("");

  const { addItem } = useShopping();

  const filteredProducts = products.filter((product) =>
    product.name
      .toLocaleLowerCase("tr-TR")
      .includes(search.toLocaleLowerCase("tr-TR"))
  );

  const addProduct = (
    product: (typeof products)[number]
  ) => {
    addItem({
      id: `${product.id}-${Date.now()}`,
      productId: product.id,
      name: product.name,
      quantity: 1,
      unit: product.unit,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Ürün Ekle</Text>

      <Text style={styles.subtitle}>
        Evde eksilen ürünü bul ve listeye ekle.
      </Text>

      <TextInput
        style={styles.search}
        placeholder="🔍 Ürün ara..."
        value={search}
        onChangeText={setSearch}
      />

      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.product}
            onPress={() => addProduct(item)}
          >
            <View style={styles.productInfo}>
              <Text style={styles.productName}>
                {item.name}
              </Text>

              <Text style={styles.category}>
                {item.category} • {item.unit}
              </Text>
            </View>

            <View style={styles.add}>
              <Text style={styles.addText}>＋</Text>
            </View>
          </TouchableOpacity>
        )}
        ListEmptyComponent={
          <Text style={styles.empty}>
            Aradığın ürün bulunamadı.
          </Text>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F5",
  },

  title: {
    fontSize: 30,
    fontWeight: "800",
    color: "#20201D",
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  subtitle: {
    color: "#777",
    paddingHorizontal: 20,
    marginTop: 5,
    marginBottom: 18,
  },

  search: {
    backgroundColor: "#FFF",
    marginHorizontal: 20,
    borderRadius: 16,
    paddingHorizontal: 16,
    height: 52,
    fontSize: 16,
  },

  list: {
    padding: 20,
  },

  product: {
    backgroundColor: "#FFF",
    borderRadius: 18,
    padding: 16,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  productInfo: {
    flex: 1,
  },

  productName: {
    fontSize: 16,
    fontWeight: "700",
    color: "#222",
  },

  category: {
    color: "#888",
    fontSize: 12,
    marginTop: 5,
  },

  add: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#DDE5D5",
    justifyContent: "center",
    alignItems: "center",
  },

  addText: {
    fontSize: 24,
    color: "#394333",
  },

  empty: {
    textAlign: "center",
    color: "#888",
    marginTop: 40,
  },
});