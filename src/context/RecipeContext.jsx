import {
  createContext,
  useState,
} from "react";

export const RecipeContext =
  createContext();

function RecipeProvider({
  children,
}) {

  /* RECIPES */

  const [recipes,
    setRecipes] =
    useState([

      {
        id: "rcp_001",

        title: "Nasi Goreng",

        image:
          "https://images.unsplash.com/photo-1512058564366-18510be2db19",

        category:
          "INDONESIAN",

        ingredients: [

          "NASI",
          "TELUR",
          "KECAP ASIN",

        ],

        instructions: [

          "Panaskan minyak",

          "Masukkan telur",

          "Masukkan nasi",

          "Tambahkan kecap",

          "Aduk hingga matang",

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
          "https://images.unsplash.com/photo-1547592180-85f173990554",

        category:
          "DINNER",

        ingredients: [

          "AYAM",
          "BAWANG PUTIH",
          "KECAP ASIN",

        ],

        instructions: [

          "Marinasi ayam",

          "Panaskan grill",

          "Bakar ayam",

          "Balik ayam",

          "Sajikan hangat",

        ],

        duration: {

          hours: 1,
          minutes: 0,

        },

      },

    ]);

  /* GAMIFICATION */

  const [userLevel,
    setUserLevel] =
    useState(7);

  const [userExp,
    setUserExp] =
    useState(70);

  /* SAVED INGREDIENT */

  const [savedIngredients,
    setSavedIngredients] =
    useState([

      "NASI",
      "TELUR",
      "AYAM",
      "BAWANG MERAH",

    ]);

  /* SAVE LEFTOVER */

  const saveIngredients =
    (ingredients) => {

      setSavedIngredients(
        (prev) => [

          ...new Set([

            ...prev,
            ...ingredients,

          ])

        ]
      );
    };

  /* GAIN EXP */

  const gainExp =
    (amount) => {

      const totalExp =
        userExp + amount;

      if (
        totalExp >= 100
      ) {

        setUserLevel(
          (prev) =>
            prev + 1
        );

        setUserExp(
          totalExp - 100
        );

      } else {

        setUserExp(
          totalExp
        );
      }
    };

  return (

    <RecipeContext.Provider
      value={{

        recipes,
        setRecipes,

        gainExp,

        userExp,
        userLevel,

        savedIngredients,
        saveIngredients,

      }}
    >

      {children}

    </RecipeContext.Provider>

  );
}

export default
  RecipeProvider;