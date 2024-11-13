// EditResep.tsx

import React, {useState} from 'react';
import {View, TextInput, Text, Button, StyleSheet} from 'react-native';
import {RouteProp} from '@react-navigation/native';
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
  TambahResep: {recipe?: Recipe; updateRecipe?: Function};
  EditResep: {recipe: Recipe; updateRecipe: Function};
  DetailResep: {recipe: Recipe; updateRecipe: Function; deleteRecipe: Function};
};

type EditResepRouteProp = RouteProp<RootStackParamList, 'EditResep'>;

type EditResepProps = {
  route: EditResepRouteProp;
  navigation: StackNavigationProp<RootStackParamList, 'EditResep'>;
};

const EditResep: React.FC<EditResepProps> = ({route, navigation}) => {
  const {recipe, updateRecipe} = route.params;

  const [strMeal, setStrMeal] = useState(recipe.strMeal);
  const [strMealThumb, setStrMealThumb] = useState(recipe.strMealThumb);
  const [strInstructions, setStrInstructions] = useState(
    recipe.strInstructions || '',
  );
  const [strIngredients, setStrIngredients] = useState(
    recipe.strIngredients?.join(', ') || '',
  );

  const handleSave = () => {
    const updatedRecipe = {
      ...recipe,
      strMeal,
      strMealThumb,
      strInstructions,
      strIngredients: strIngredients
        .split(',')
        .map(ingredient => ingredient.trim()),
    };

    if (updateRecipe) {
      updateRecipe(updatedRecipe);
    }

    // Setelah menyimpan perubahan, kembali ke halaman Home
    navigation.navigate('Home', {
      newRecipe: updatedRecipe, // Pastikan memberikan parameter yang sesuai dengan tipe Home
    });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Recipe Name"
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
        placeholder="Instructions"
        value={strInstructions}
        onChangeText={setStrInstructions}
      />
      <TextInput
        style={styles.input}
        placeholder="Ingredients (separate with commas)"
        value={strIngredients}
        onChangeText={setStrIngredients}
      />
      <Button title="Save Changes" onPress={handleSave} />
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
});

export default EditResep;
