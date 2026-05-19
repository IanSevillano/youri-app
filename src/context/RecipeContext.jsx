import {
  createContext,
  useState,
} from "react";

export const RecipeContext =
  createContext();

function RecipeProvider({
  children,
}) {

  const [recipes,
    setRecipes] =
    useState([

      {
        id: "rcp_001",

        title: "Nasi Goreng",

        image:
          "https://images.unsplash.com/photo-1512058564366-18510be2db19",

        category:
          "MAIN_COURSE",

        ingredients: [
          "RICE",
          "EGG",
          "SOY_SAUCE",
        ],

        instructions: [
          "Panaskan minyak",
          "Masukkan telur",
          "Masukkan nasi",
        ],

        duration: {
          hours: 0,
          minutes: 20,
        },
      },

      {
        id: "rcp_002",

        title: "Ayam Bakar",

        image:
          "https://images.unsplash.com/photo-1490645935967-10de6ba17061",

        category: "DINNER",

        ingredients: [
          "CHICKEN",
          "ONION",
          "SOY_SAUCE",
        ],

        instructions: [
          "Marinasi ayam",
          "Bakar ayam",
          "Sajikan hangat",
        ],

        duration: {
          hours: 1,
          minutes: 0,
        },
      },

    ]);

  return (

    <RecipeContext.Provider
      value={{
        recipes,
        setRecipes,
      }}
    >

      {children}

    </RecipeContext.Provider>

  );
}

export default RecipeProvider;