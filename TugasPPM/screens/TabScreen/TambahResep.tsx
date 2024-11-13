import React, {useState} from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

type Recipe = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strInstructions?: string;
  strIngredients?: string[];
};

type RootStackParamList = {
  Home: {newRecipe?: Recipe};
  TambahResep: undefined;
  DetailResep: {recipe: Recipe; updateRecipe: Function; deleteRecipe: Function};
};

type TambahResepNavigationProp = StackNavigationProp<
  RootStackParamList,
  'TambahResep'
>;

const TambahResep: React.FC = () => {
  const [strMeal, setStrMeal] = useState('');
  const [strMealThumb, setStrMealThumb] = useState('');
  const [strInstructions, setStrInstructions] = useState('');
  const [strIngredients, setStrIngredients] = useState('');
  const navigation = useNavigation<TambahResepNavigationProp>();

  const handleAddRecipe = async () => {
    if (strMeal && strMealThumb && strInstructions) {
      const newRecipe = {
        idMeal: Date.now().toString(),
        strMeal,
        strMealThumb,
        strInstructions,
        strIngredients: strIngredients
          .split(',')
          .map(ingredient => ingredient.trim()),
      };

      try {
        const savedRecipes = await AsyncStorage.getItem('recipes');
        const recipes = savedRecipes ? JSON.parse(savedRecipes) : [];

        const updatedRecipes = [...recipes, newRecipe];
        await AsyncStorage.setItem('recipes', JSON.stringify(updatedRecipes));

        // Navigate to Home screen after adding the recipe
        navigation.navigate('Home', {newRecipe});
      } catch (error) {
        console.error('Error saving recipe', error);
      }
    } else {
      Alert.alert('Error', 'Please fill all fields');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nama Resep"
        value={strMeal}
        onChangeText={setStrMeal}
      />
      <TextInput
        style={styles.input}
        placeholder="Image URL"
        value={strMealThumb}
        onChangeText={setStrMealThumb}
      />
      <TextInput
        style={styles.input}
        placeholder="Bahan-bahan (pisahkan dengan koma)"
        value={strIngredients}
        onChangeText={setStrIngredients}
      />
      <TextInput
        style={styles.input}
        placeholder="langkah- langkah"
        value={strInstructions}
        onChangeText={setStrInstructions}
      />

      <TouchableOpacity style={styles.addButton} onPress={handleAddRecipe}>
        <Text style={styles.buttonText}>Add Recipe</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
  },
  addButton: {
    backgroundColor: '#1E2A39',
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default TambahResep;
