import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <View>
            <Text style={styles.location}>Location Livia</Text>
            <Text style={styles.namaLokasi}>Sukabumi, Jawa Barat</Text>
          </View>
          <Image
            source={require('./src/assets/avatar.jpg')}
            style={styles.avatar}
          />
          <TextInput style={styles.search} placeholder="Search Coffee" />
          <Image
            source={require('./src/assets/banner.jpg')}
            style={styles.banner}
          />
        </View>

        <ScrollView horizontal={true}>
          <View style={styles.containerButton}>
            <TouchableOpacity style={styles.buttonCategory}>
              <Text>Cappuccino</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonCategory}>
              <Text>Machiato</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonCategory}>
              <Text>Latte</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonCategory}>
              <Text>Americano</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonCategory}>
              <Text>Kopi Susu</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        <View style={styles.containerCard}>
          <View style={styles.card}>
            <Image
              source={require('./src/assets/coffe1.jpg')}
              style={styles.menu}
            />
            <View style={styles.cardRating}>
              <Image
                source={require('./src/assets/rating.png')}
                style={styles.iconRating}
              />
              <Text style={styles.rating}>4.8</Text>
            </View>
            <Text style={styles.namaProduk}>Cappuccino</Text>
            <Text style={styles.deskripsiProduk}>with Chocolate</Text>
            <Text style={styles.harga}>$4.53</Text>
            <Image
              source={require('./src/assets/add.png')}
              style={styles.buttonAdd}
            />
          </View>
          <View style={styles.card}>
            <Image
              source={require('./src/assets/coffe2.jpg')}
              style={styles.menu}
            />
            <View style={styles.cardRating}>
              <Image
                source={require('./src/assets/rating.png')}
                style={styles.iconRating}
              />
              <Text style={styles.rating}>4.8</Text>
            </View>
            <Text style={styles.namaProduk}>Cappuccino</Text>
            <Text style={styles.deskripsiProduk}>with Chocolate</Text>
            <Text style={styles.harga}>$4.53</Text>
            <Image
              source={require('./src/assets/add.png')}
              style={styles.buttonAdd}
            />
          </View>
          <View style={styles.card}>
            <Image
              source={require('./src/assets/coffe3.jpg')}
              style={styles.menu}
            />
            <View style={styles.cardRating}>
              <Image
                source={require('./src/assets/rating.png')}
                style={styles.iconRating}
              />
              <Text style={styles.rating}>4.8</Text>
            </View>
            <Text style={styles.namaProduk}>Cappuccino</Text>
            <Text style={styles.deskripsiProduk}>with Chocolate</Text>
            <Text style={styles.harga}>$4.53</Text>
            <Image
              source={require('./src/assets/add.png')}
              style={styles.buttonAdd}
            />
          </View>
          <View style={styles.card}>
            <Image
              source={require('./src/assets/coffe4.jpg')}
              style={styles.menu}
            />
            <View style={styles.cardRating}>
              <Image
                source={require('./src/assets/rating.png')}
                style={styles.iconRating}
              />
              <Text style={styles.rating}>4.8</Text>
            </View>
            <Text style={styles.namaProduk}>Cappuccino</Text>
            <Text style={styles.deskripsiProduk}>with Chocolate</Text>
            <Text style={styles.harga}>$4.53</Text>
            <Image
              source={require('./src/assets/add.png')}
              style={styles.buttonAdd}
            />
          </View>
          <View style={styles.card}>
            <Image
              source={require('./src/assets/coffe1.jpg')}
              style={styles.menu}
            />
            <View style={styles.cardRating}>
              <Image
                source={require('./src/assets/rating.png')}
                style={styles.iconRating}
              />
              <Text style={styles.rating}>4.8</Text>
            </View>
            <Text style={styles.namaProduk}>Cappuccino</Text>
            <Text style={styles.deskripsiProduk}>with Chocolate</Text>
            <Text style={styles.harga}>$4.53</Text>
            <Image
              source={require('./src/assets/add.png')}
              style={styles.buttonAdd}
            />
          </View>
          <View style={styles.card}>
            <Image
              source={require('./src/assets/coffe2.jpg')}
              style={styles.menu}
            />
            <View style={styles.cardRating}>
              <Image
                source={require('./src/assets/rating.png')}
                style={styles.iconRating}
              />
              <Text style={styles.rating}>4.8</Text>
            </View>
            <Text style={styles.namaProduk}>Cappuccino</Text>
            <Text style={styles.deskripsiProduk}>with Chocolate</Text>
            <Text style={styles.harga}>$4.53</Text>
            <Image
              source={require('./src/assets/add.png')}
              style={styles.buttonAdd}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  scrollView: {
    padding: 16,
  },
  header: {
    alignItems: 'flex-start',
  },
  location: {
    fontSize: 16,
    fontWeight: 'bold',
    top: 30,
    left: 5,
  },
  namaLokasi: {
    fontSize: 16,
    top: 30,
    left: 5,
  },
  avatar: {
    width: 44,
    height: 44,
    bottom: 20,
    left: 370,
    borderRadius: 14,
  },
  search: {
    width: '100%',
    height: 52,
    marginVertical: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  banner: {
    width: '100%',
    height: 140,
    borderRadius: 16,
  },
  containerButton: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  buttonCategory: {
    padding: 10,
    borderRadius: 12,
    backgroundColor: '#e0e0e0',
    marginHorizontal: 5,
  },
  containerCard: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    width: '47%',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  menu: {
    width: 175,
    height: 165,
    borderRadius: 10,
    marginBottom: 10,
  },
  namaProduk: {
    fontWeight: 'bold',
    fontSize: 20,
    left: 6,
  },
  deskripsiProduk: {
    fontSize: 15,
    left: 6,
    top: 8
  },
  harga: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '000',
    top: 28,
    left: 6,
  },

  buttonAdd: {
    height: 32,
    width: 32,
    left: 140,
  },

  cardRating: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 10,
    width: 70,
    height: 30,
    position: 'absolute',
    top: 10,
    left: 10,
  },

  iconRating: {
    width: 15,
    height: 15,
    top: 7,
    left: 10,
  },

  rating: {
    fontSize: 15,
    color: '#ff9900',
    left: 36,
    bottom: 10,
  },
});

export default App;
