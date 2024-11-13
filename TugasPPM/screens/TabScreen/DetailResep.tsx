// DetailResep.tsx

import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, Button, Alert, ScrollView, TouchableOpacity} from 'react-native';
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

type DetailResepRouteProp = RouteProp<RootStackParamList, 'DetailResep'>;

type DetailResepProps = {
  route: DetailResepRouteProp;
  navigation: StackNavigationProp<RootStackParamList, 'DetailResep'>;
};

const DetailResep: React.FC<DetailResepProps> = ({route, navigation}) => {
  const {recipe, updateRecipe, deleteRecipe} = route.params;

  const handleEdit = () => {
    navigation.navigate('EditResep', {recipe, updateRecipe});
  };

  const handleDelete = () => {
    Alert.alert('Delete Recipe', 'Are you sure?', [
      {text: 'Cancel'},
      {
        text: 'Delete',
        onPress: () => {
          deleteRecipe(recipe.idMeal);
          navigation.goBack();
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../assets/img/logo.png')}
          style={styles.headerImage}
        />
      </View>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.imageContainer}>
          <Image source={{uri: recipe.strMealThumb}} style={styles.image} />
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>{recipe.strMeal}</Text>
          <Text style={styles.ingredients}>
            Ingredients: {recipe.strIngredients?.join(', ')}
          </Text>
          <Text style={styles.instructions}>{recipe.strInstructions}</Text>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity onPress={handleEdit}>
          <Image
            source={require('../../assets/img/Edit.png')}
            style={styles.editImage}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={handleDelete}>
          <Image
            source={require('../../assets/img/Delete.png')}
            style={styles.deleteImage}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
  scrollContent: {padding: 20, paddingBottom: 100},
  header: {
    backgroundColor: '#1E2A39',
    paddingVertical: 20,
    alignItems: 'center',
    height: 75,
  },
  headerImage: {
    width: 85,
    height: 65,
    bottom: 13,
  },
  imageContainer: {alignItems: 'center', marginBottom: 20},
  content: {paddingHorizontal: 10},
  title: {fontSize: 24, fontWeight: 'bold', textAlign: 'center'},
  image: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  instructions: {
    fontSize: 16,
    marginBottom: 10,
  },
  ingredients: {
    fontSize: 16,
    marginBottom: 20,
  },
  footer: {
    backgroundColor: '#fff',
    paddingVertical: 20,
    height: 65,
    borderTopWidth: 2,
    borderTopColor: 'rgba(204, 204, 204, 0.5)',
    marginBottom: 20, // Ensuring space for footer
  },
  editImage: {
    width: 40,
    height: 40,
    resizeMode: 'cover',
    top: 5,
    left: 80,
  },
  deleteImage: {
    width: 45,
    height: 45,
    resizeMode: 'cover',
    bottom: 37,
    left: 310,
  },
});

export default DetailResep;
