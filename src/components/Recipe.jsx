import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './Recipe.css';

// Import dish images
import menu7Image from '../assets/images/cbackground.jpg';
import menu8Image from '../assets/images/homeslide2.png';
import menu9Image from '../assets/images/homeslide3.png';
import menu10Image from '../assets/images/homeslide4.png';
import menu11Image from '../assets/images/homeslide5.png';
import menu12Image from '../assets/images/Homeslide6.png';

const dishes = [
  {
    id: 1,
    name: 'CHILLI CON CARNE',
    description: 'Indulge in the rich and savory symphony of flavors with our Savory Herb-Infused Chicken',
    image: menu7Image,
    time: '40 MIN',
    difficulty: 'EASY PREP',
    servings: '3 SERVES',
    ingredients: [
      '2 tbsp olive oil',
      '1 large onion, diced',
      '4 cloves garlic, chopped',
      '2 lbs ground beef',
      '2 tbsp ground cumin',
      '2 tbsp dried oregano',
      '2 tbsp paprika',
      '1/2 tsp cayenne pepper (optional)',
      '2 tbsp tomato paste',
      '1 can (28oz) crushed or diced tomatoes',
      '1/2 cup beef stock',
      '1 can kidney beans, drained and rinsed',
      'Optional: 1/2 cup corn kernels',
      'Optional: 2 carrots, chopped'
    ],
    prepHacks: [
      'Cook Steps 1 and 2 in advance.',
      'Simulate steps with no heat and simmer at the end.',
    ],
    NoorTips:[
       'For a bit of a spicy kick, add tabasco sauce or cayenne pepper along with the other spices. Top with lots of sour cream, chopped green onions and grated cheese.',
       'Adventurer Tip:',
       'Make bread bowls to serve in! Buy an uncut loaf and hollow it out, or use smaller individual ones.',
    ],
    instructions: [
      '1. Heat olive oil in a large pot over medium heat. Add diced onions and sauté until translucent.',
      '2. Add chopped garlic and cook for another minute.',
       '3. Add ground beef to the pot and cook, stirring occasionally, until browned.',
      '4. Stir in ground cumin, oregano, paprika, cayenne pepper (if using), and tomato paste. Cook for 2 minutes.',
      '5. Add crushed tomatoes, beef stock, kidney beans, and optional ingredients (corn kernels and carrots). Season with salt and pepper.',
      '6. Bring to a simmer over low heat. Cover and cook for about 1 hour, stirring occasionally.',
      '7. Adjust seasoning if needed. Serve hot.'
    ],
    prepTime: '20 minutes',
    cookTime: '90 minutes',
    totalTime: '110 minutes',
  },
  {
    id: 2,
    name: 'PENNE WITH SALMON and Basil & Tomatoes',
    description: 'Experience the perfect blend of zesty lemon and aromatic garlic with this roasted chicken recipe',
    image: menu8Image,
    time: '1 HOUR',
    difficulty: 'HARD PREP',
    servings: '4 SERVES',
    ingredients: [
      '1 lb salmon filet',
      '2 tbsp Italian seasoning',
      'Salt and pepper',
      '1 tbsp lemon juice',
      '500g tomatoes',
      '1 cup chopped basil leaves',
      '2 garlic cloves, chopped',
      'Olive oil',
      '1 tbsp butter',
      'Optional: 1/2 cup heavy cream',
      'Optional: Grated parmesan'
    ],
    prepHacks: [
      'Cook half of the salmon and penne in advance.',
      'Swap in cooked items at end of recipe.',
    ],
    NoorTips:[
     ' No one likes mushy pasta – it is better to under cook it a bit. Then you can add water in step 5 if needed and simmer it all together for a little longer.',
      'My favorite seasonal tomato is ‘early girl’ tomatoes, but you can also use cherry or roma tomatoes.',
     ' Throwing pasta at a wall to see if it sticks to see if it’s done is a myth, but it is still fun to do!',
      'See who can get it to stick the highest!',
      'Watch out for the bones when flaking the salmon.',
      'Adventurer Tip: Add different spices to the salmon when seasoning it. You can try dill, chilli flakes, honey, maple syrup, or even tandoori spice!',
      

    ],
    instructions: [
      `1. Season salmon filet with olive oil, salt, pepper, Italian seasoning, and lemon juice. Bake in a pre-heated oven at 425°F for 25 minutes.`,
      `2. Cook penne pasta until desired tenderness and set aside.`,
      `3. In a large saucepan, heat olive oil and sauté chopped garlic for 1 minute.`,
      `4. Add tomatoes (chopped to desired size) and heat gently, avoiding over-liquefying.`,
      `5. Flake cooked salmon into small pieces and add to tomatoes along with penne, butter, and basil.`,
      `6. Optional: Stir in heavy cream before adding basil and simmer for 1 minute. Top with grated parmesan.`,
    ],
    prepTime: '10 minutes',
    cookTime: '30 minutes',
    totalTime: '40 minutes',
  },
  {
    id: 3,
    name: 'MATAR KHEEMA (Peas and Meat)',
    description: 'Aromatic and flavorful beef curry with a blend of spices and vegetables',
    image: menu9Image,
    time: '40 MIN',
    difficulty: 'MEDIUM PREP',
    servings: '4 SERVES',
    ingredients: [
      '1 lb ground beef',
      '1 tbsp white vinegar',
      'Salt',
      '3-4 tbsp oil',
      '2 whole cloves',
      '2 whole black peppercorns',
      '3-4 whole cardamom pods',
      '2 small cinnamon sticks',
      '1 tsp cumin seeds',
      'Optional: 2 curry leaves',
      '1 diced medium onion',
      '1/2 can chopped tomatoes',
      '1.5 tsp tomato sauce',
      '1/2 tsp crushed garlic',
      '1 tsp crushed ginger',
      '2 tbsp yogurt',
      '1/4 tsp turmeric',
      '1/2 tsp cumin powder',
      '2 cups peas (frozen is okay)',
      '2 medium potatoes (1” cubes)',
      '1/2 tsp garam masala',
      '2 tbsp lemon juice'
    ],
    prepHacks: [
      'Cook beef and onions in advance.',
    ],
    NoorTips:[

     ' Dont forget ‘Mise en place’! Mix the ingredients for each step together beforehand.',
      'Did you know: Keema Matar is a dish made popular during Mugal India times! It is a royal treat!',
      'Don’t forget to wear your crown when eating it! Over the years, it has had many regional variaties in Pakistan, Gujarat, Bangladesh, and this East African influenced variety (where the order of words in the name are swapped too!).',
     ' Dada’s joke: What did the pea say to the other pea? Don’t mutter. :)',

    ],
    instructions: [
      ' 1. Cook ground beef with salt and white vinegar until no longer pink. Break up clumps as it cooks.',
      ' 2. Remove beef from the pot and set aside. Heat oil in the same pot and add whole spices (cloves, peppercorns, cardamom, cinnamon sticks, cumin seeds). Heat for 2 minutes until aromatic.',
      ' 3. Add diced onions to the pot and sauté until golden brown.',
      ' 4. Stir in potatoes, peas, and 1 cup of water. Simmer until potatoes and peas are tender.',
      '5.  Add garam masala, lemon juice, and optionally heavy cream. Simmer for another minute.',
      ' 6. Serve hot with rice or bread.',
    ],
    prepTime: '15 minutes',
    cookTime: '25 minutes',
    totalTime: '40 minutes',
  },
  {
    id: 4,
    name: 'WIENER SCHNITZEL',
    description: 'Crispy and tender veal cutlets coated with breadcrumbs, perfect with lemon wedges.',
    image: menu10Image,
    time: '30 MIN',
    difficulty: 'EASY PREP',
    servings: '4 SERVES',
    ingredients: [
      '1 lb veal (cut into 4 pieces)',
      '2 eggs',
      '1/2 cup all-purpose flour',
      '1/2 cup breadcrumbs',
      'Lemon wedges',
      '1/2 tsp salt',
      'Oil, butter, or ghee for frying'
    ],
    prepHacks: [
      '',
      '',
    ], 
    NoorTips:[

      'Like always - have fun with breaking the eggs!',
     ' Practice ‘dredging’. This is the technique of coating the cutlets. Use one hand for when the veal is dry, and the other for when it is wet with the egg.',
      'Don’t press the breadcrumbs into the veal too hard - you don’t want them soggy before cooking. Think of it as getting the breadcrumbs to coat the eggs, not the veal directly.',
      'You can add more seasoning to the flour or eggs – herbs, paprika, parsley.',
     ' Fun Tip: Cut the veal into different shapes like the moon, a star, or even a heart!',
     ' Did you know: ‘Wiener’ means ‘of Vienna’ in German, and must use veal in Austria, but you can use other meats too. Chicken is also yummy!',

    ],
    instructions: [
      ' 1. Place veal pieces into a ziplock bag or between plastic wrap and gently pound with a mallet or pestle until 1/4” thick or less.',
      ' 2. Prepare three shallow bowls for coating: one with flour and salt, one with beaten eggs, and one with breadcrumbs.',
      '3.  Coat each veal piece first in the flour mixture, shaking off excess.',
      '4.  Dip into the beaten eggs, allowing excess to drip off.',
      '5.  Roll the veal in breadcrumbs, ensuring an even coating without pressing too hard.',
      '6.  Heat oil, butter, or ghee in a skillet over medium- high heat.Fry veal cutlets for 2 - 3 minutes on each side until golden brown and cooked through.',
      '7.  Serve hot with lemon wedges.',
    ],
    prepTime: '15 minutes',
    cookTime: '15 minutes',
    totalTime: '30 minutes',
  },
];

const Recipe = () => {
  let { recipeId } = useParams();
  const dish = dishes.find(dish => dish.id === parseInt(recipeId));

  if (!dish) {
    return <div>Recipe not found</div>;
  }

  const heroImageStyle = {
    backgroundImage: `url(${ dish.image })`,
    borderRadius: '30px',
    width: '90%',
    margin: '0 auto',
    display: 'block'
  };

  const instructionsImageStyle = {
    backgroundImage: `url(${ dish.image })`,
    borderRadius: '30px',
    margin: '20px auto',
    display: 'block',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

    return (
      <div className="recipe-container p-10 border border-[#262522] rounded-2xl bg-[#FEF9F5] w-[96%] min-h-screen mx-auto flex flex-col justify-center">

        <div className="recipe-header text-center mb-2.5">

          <div className="recipe text-[0.8rem] bg-[#EE6352] border-none rounded-2xl inline-block text-[#f2f2f2] px-2.5 py-1.25">RECIPES</div>

          <h1 className="recipe-title text-4xl font-extrabold text-[#262522]">{dish.name}</h1>
        </div>

        <div className="recipe-description text-center mb-5 p-5">
          <p className="  text-[#26252283] text-lg">{dish.description}</p>
        </div>

        <div className="  text-[#262522b5] recipe-details flex justify-between px-12 py-2.5 w-fit mx-auto mb-2.5">
          <p className="m-2.5 font-semibold"><strong><i className="fa-solid fa-stopwatch"></i></strong> {dish.time}</p>

          <p className="m-2.5 font-semibold"><strong><i className="fa-solid fa-bag-shopping"></i></strong> {dish.difficulty}</p>
          <p className="m-2.5 font-semibold"><strong><i className="fa-solid fa-bell-concierge"></i></strong> {dish.servings}</p>

        </div>

        <div style={heroImageStyle} className="recipe-image h-125 object-cover rounded-2xl mx-auto block w-[80%] bg-cover bg-center mb-5" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">

          <div className="ingredients-card bg-[#F0EBE1] p-6 rounded-lg shadow-md">

            <div className="ingredients-card-inner bg-[#FFFBF2] rounded-2xl m-3 p-4">

              <h2 className=" ingredients-title text-[#EE6352] text-2xl font-bold">Ingredients</h2>
              <ul className=" text-black ingredients-list list-disc list-inside text-lg ">
                {dish.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>

            </div>

            <div className="ingredients-card-inner bg-[#FFFBF2] rounded-xl m-3 p-4">
              <h2 className="ingredients-title text-[#EE6352] text-2xl font-bold">Prep Hacks</h2>
              <ul className=" text-[#262522] text-lg ingredients-list list-disc list-inside">
                {dish.prepHacks.map((hack, index) => (
                  <li key={index}>{hack}</li>
                ))}
              </ul>
            </div>

            {/* Yaha Pe krne h changes */} 

            <div className="ingredients-card-inner bg-[#FFFBF2] rounded-xl m-3 p-4">
              <h2 className="ingredients-title text-[#EE6352] text-3xl font-bold">Noor’s Tips for Junior Chefs!</h2>
              <ul className=" text-[#262522] text-lg ingredients-list list-disc list-inside">
                {dish.NoorTips.map((hack, index) => (
                  <li key={index}>{hack}</li>
                ))}
              </ul>
            </div>
            <div className="note-text text-[#333333a8] text-[0.8rem] m-3.5">Note: Nutritional values are approximate and may vary based on specific ingredients and portion sizes.</div>
          </div>
          <div className="instructions-card bg-[#ffe2d2] p-5 rounded-lg shadow-md col-span-2">
            <div className="instructions-card-inner mb-4">
              <h2 className="instructions-title text-[#333333] text-4xl font-bold ml-2.5">Instructions</h2>
               <ul className=" text-black recipe-instructions">
                {dish.instructions.map((ingredient, index) => (
                  <li key={index}>{ingredient}
                  <div style={instructionsImageStyle} className="instructions-image"></div>
                  </li>
                ))}
              </ul> 
            </div>
          </div>
        </div>
        <div className="back-button text-center mt-5">
          <Link to="/">
            <button className="custom-button bg-[#f8b400] border-[#f8b400] text-black py-2.5 px-5 text-lg hover:text-[#262522] hover:border-black hover:bg-[#d7efd3]">Back to Menu</button>
          </Link>
        </div>
      </div>
    );
  };
  
  export default Recipe;