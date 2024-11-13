import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

type Recipe = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strInstructions?: string;
  strIngredients?: string[];
};

type ExploreResepProps = {
  navigation: StackNavigationProp<any, any>;
  route: RouteProp<{params: {newRecipe?: Recipe}}, 'params'>;
};

const ExploreResep: React.FC<ExploreResepProps> = ({navigation}) => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  // Fetch data from API
  const fetchRecipes = async () => {
    try {
      const response = await axios.get(
        'https://www.themealdb.com/api/json/v1/1/search.php?s=',
      );
      const meals = response.data.meals;

      if (meals) {
        const formattedMeals = meals.map((meal: any) => {
          const ingredients = [];
          for (let i = 1; i <= 20; i++) {
            const ingredient = meal[`strIngredient${i}`];
            if (ingredient) {
              ingredients.push(ingredient);
            }
          }
          return {
            idMeal: meal.idMeal,
            strMeal: meal.strMeal,
            strMealThumb: meal.strMealThumb,
            strInstructions: meal.strInstructions,
            strIngredients: ingredients,
          };
        });
        setRecipes(formattedMeals);
      } else {
        setError('No recipes found');
      }
    } catch (err) {
      setError('Failed to fetch recipes');
    } finally {
      setLoading(false); // Stop loading when the API call finishes
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  // Show loading indicator while fetching
  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text style={{marginTop: 10}}>Loading recipes...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text>{error}</Text>
      </View>
    );
  }

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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingBottom: 0,
    paddingLeft: 20,
    paddingRight: 20,
  },

  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    width: 100,
    marginVertical: 8,
    marginHorizontal: 10,
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
});

export default ExploreResep;
