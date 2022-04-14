import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import {
  Form,
  FormField,
  FormPicker as Picker,
  SubmitButton,
} from "../components/forms";
import CategoryPickerItem from "../components/CategoryPickerItem";
import Screen from "../components/Screen";
import FormImagePicker from "../components/forms/FormImagePicker";
import useLocation from "../hooks/useLocation";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please select at least one image."),
});

const categories = [
  {
    backgroundColor: "#fc5c65",
    icon: "floor-lamp",
    label: "Maison",
    value: 1,
  },
  {
    backgroundColor: "#fd9644",
    icon: "car",
    label: "Voiture",
    value: 2,
  },
  {
    backgroundColor: "#fed330",
    icon: "camera",
    label: "Photo & Vidéo",
    value: 3,
  },
  {
    backgroundColor: "#26de81",
    icon: "cards",
    label: "Jeux",
    value: 4,
  },
  {
    backgroundColor: "#2bcbba",
    icon: "shoe-heel",
    label: "Vêtement",
    value: 5,
  },
  {
    backgroundColor: "#45aaf2",
    icon: "basketball",
    label: "Sports",
    value: 6,
  },
  {
    backgroundColor: "#4b7bec",
    icon: "headphones",
    label: "Musique & Film",
    value: 7,
  },
  {
    backgroundColor: "#a55eea",
    icon: "book-open-variant",
    label: "Livre",
    value: 8,
  },
  {
    backgroundColor: "#778ca3",
    icon: "application",
    label: "Autres",
    value: 9,
  },
];

function ListingEditScreen() {
  const location = useLocation();

  return (
    <Screen style={styles.container}>
      <Form
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          condition: "",
          images: [],
        }}
        onSubmit={(values) => console.log(location)}
        validationSchema={validationSchema}
      >
        <FormImagePicker title="Jusqu'à 10 photos" name="images" />
        <FormField
          title="Titre"
          maxLength={255}
          name="title"
          placeholder="ex : Chemise en jean bleue"
        />
        <FormField
          keyboardType="numeric"
          title="Prix"
          maxLength={8}
          name="price"
          placeholder="€"
          width={120}
        />
        <Picker
          items={categories}
          name="category"
          title="Catégorie"
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
          placeholder="Choisir"
          width="50%"
        />
        <FormField
          maxLength={255}
          multiline
          title="Décris ton article"
          name="description"
          numberOfLines={3}
          placeholder="ex : porté quelques fois, taille correctement, reversible"
        />
        <SubmitButton title="Ajouter" />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
export default ListingEditScreen;
