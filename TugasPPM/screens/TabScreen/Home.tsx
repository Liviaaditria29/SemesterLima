import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  Button,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

type Recipe = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strInstructions?: string;
  strIngredients?: string[];
};

type HomeProps = {
  navigation: StackNavigationProp<any, any>;
  route: RouteProp<{params: {newRecipe?: Recipe}}, 'params'>;
};

const Home: React.FC<HomeProps> = ({navigation, route}) => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    loadRecipes();
  }, []);

  useEffect(() => {
    if (route.params?.newRecipe) {
      const updatedRecipes = [...recipes, route.params.newRecipe];
      setRecipes(updatedRecipes);
      saveRecipes(updatedRecipes);
    }
  }, [route.params?.newRecipe]);

  const loadRecipes = async () => {
    try {
      const savedRecipes = await AsyncStorage.getItem('recipes');
      if (savedRecipes) {
        setRecipes(JSON.parse(savedRecipes));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const saveRecipes = async (recipes: Recipe[]) => {
    try {
      await AsyncStorage.setItem('recipes', JSON.stringify(recipes));
    } catch (error) {
      console.error(error);
    }
  };

  const updateRecipe = (updatedRecipe: Recipe) => {
    const updatedRecipes = recipes.map(recipe =>
      recipe.idMeal === updatedRecipe.idMeal ? updatedRecipe : recipe,
    );
    setRecipes(updatedRecipes);
    saveRecipes(updatedRecipes);
  };

  const deleteRecipe = (id: string) => {
    const updatedRecipes = recipes.filter(recipe => recipe.idMeal !== id);
    setRecipes(updatedRecipes);
    saveRecipes(updatedRecipes);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../assets/img/logo.png')}
          style={styles.headerImage}
        />
      </View>

      <View style={styles.banner}>
        <Image
          source={require('../../assets/img/banner.png')}
          style={styles.bannerImage}
        />
        <Image
          source={require('../../assets/img/image-banner.png')}
          style={styles.judulBanner}
        />
      </View>

      <FlatList
        data={recipes}
        numColumns={2}
        keyExtractor={item => item.idMeal}
        renderItem={({item}) => (
          <View style={styles.recipeCard}>
            <Image source={{uri: item.strMealThumb}} style={styles.image} />
            <Text style={styles.recipeTitle}>{item.strMeal}</Text>
            <TouchableOpacity
              style={styles.arrowButton}
              onPress={() =>
                navigation.navigate('DetailResep', {
                  recipe: item,
                  updateRecipe: updateRecipe,
                  deleteRecipe: deleteRecipe,
                })
              }>
              <Image
                source={require('../../assets/img/panah.png')}
                style={styles.arrowImage}
              />
            </TouchableOpacity>
          </View>
        )}
        contentContainerStyle={{paddingBottom: 90}}
      />

      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('TambahResep')}>
          <Image
            source={require('../../assets/img/addButton.jpg')}
            style={styles.addImage}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('ExploreResep')}>
          <Image
            source={require('../../assets/img/explore-image.png')}
            style={styles.ExploreImage}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
  header: {
    backgroundColor: '#1E2A39',
    paddingVertical: 20,
    alignItems: 'center',
    height: 75,
    marginHorizontal: -20,
    paddingHorizontal: 20,
  },
  headerImage: {
    width: 85,
    height: 65,
    bottom: 13,
  },
  banner: {
    marginVertical: 10,
    height: 150,
    borderRadius: 5,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
  },
  bannerImage: {
    width: 100,
    height: 130,
    resizeMode: 'cover',
    position: 'absolute',
    top: 15,
    left: 20,
  },
  judulBanner: {
    width: '80%',
    height: '80%',
    resizeMode: 'contain',
    position: 'absolute',
    left: 95,
    top: 20,
  },
  recipeCard: {
    flex: 1,
    margin: 10,
    backgroundColor: '#fff',
    padding: 0,
    borderRadius: 10,
    elevation: 3,
    height: 230,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '60%',
    borderRadius: 8,
  },
  recipeTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
    left: 20,
  },
  arrowButton: {
    position: 'absolute',
    bottom: 2,
    right: -2,
    padding: 10,
  },
  arrowImage: {
    width: 40,
    height: 35,
    resizeMode: 'contain',
  },
  footer: {
    backgroundColor: '#fff',
    paddingVertical: 20,
    alignItems: 'center',
    height: 65,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopWidth: 2,
    borderTopColor: 'rgba(204, 204, 204, 0.5)',
  },
  addImage: {
    width: 50,
    height: 50,
    resizeMode: 'cover',
    top: -12,
    left: 100,
  },
  ExploreImage: {
    width: 50,
    height: 50,
    resizeMode: 'cover',
    left: -110,
    top: -62
  },
});

export default Home;
