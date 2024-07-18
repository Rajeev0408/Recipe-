import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css'; 
import menu1Image from '../assets/images/menu-1.png'
import menu2Image from '../assets/images/menu-2.png'
import menu3Image from '../assets/images/menu-3.png'
import menu4Image from '../assets/images/menu-4.png'
import menu5Image from '../assets/images/menu-5.png'
import menu6Image from '../assets/images/menu-6.png'
import menu7Image from '../assets/images/cbackground.jpg'
import menu8Image from '../assets/images/homeslide2.png'
import menu9Image from '../assets/images/homeslide3.png'
import menu10Image from '../assets/images/homeslide4.png'
import menu11Image from '../assets/images/homeslide5.png'
import menu12Image from '../assets/images/Homeslide6.png'

const dishes = [
  {
    id: 1,
    name: 'CHILLI CON CARNE',
    description: 'Indulge in the rich and savory symphony of flavors with our Savory Herb-Infused Chicken',
    image: menu7Image,
    time: '40 MIN',
    difficulty: 'EASY PREP',
    servings: '3 SERVES'
  },
  {
    id: 2,
    name: 'PENNE WITH SALMON and Basil & Tomatoes',
    description: 'Experience the perfect blend of zesty lemon and aromatic garlic with this roasted chicken recipe',
    image: menu8Image,
    time: '1 HOUR',
    difficulty: 'HARD PREP',
    servings: '4 SERVES'
  },
  {
    id: 3,
    name: 'MATAR KHEEMA (Peas and Meat)',
    description: 'Quick, wholesome, and bursting with flavors, it’s perfect for a healthy weeknight dinner.',
    image: menu9Image,
    time: '30 MIN',
    difficulty: 'EASY PREP',
    servings: '3 SERVES'
  },
  {
    id: 4,
    name: 'WIENER SCHNITZEL',
    description: 'This berry smoothie bowl is not only visually appealing but also a powerhouse of antioxidants.',
    image: menu10Image,
    time: '10 MIN',
    difficulty: 'EASY PREP',
    servings: '2 SERVES'
  },
  {
    id: 5,
    name: 'Spaghetti Aglio e Olio',
    description: 'A minimalist yet flavorful dish with garlic, olive oil, and a hint of red pepper flakes.',
    image: menu11Image,
    time: '20 MIN',
    difficulty: 'EASY PREP',
    servings: '2 SERVES'
  },
  {
    id: 6,
    name: 'Grilled Veggies with Sauce',
    description: 'Served with a zesty chimichurri sauce it is a perfect addition to your outdoor gatherings.',
    image: menu12Image,
    time: '25 MIN',
    difficulty: 'MEDIUM PREP',
    servings: '6 SERVES'
  },
];



function Menu() {

  return (
    <div className="bg-[#e8f5e9] py-10 flex flex-col items-center w-screen min-h-screen overflow-x-hidden">
      <div className="text-center mb-8">
        <div className="bg-[#EE6352] text-[#e8f5e9] text-sm rounded-full inline-block px-4 py-1">
          RECIPES
        </div>
        <h1 className=" text-[#262522] text-6xl font-extrabold my-2">
          EMBARK ON A <br />
          JOURNEY
        </h1>
        <p className="text-[#262522] mb-5">
          With our diverse collection of recipes we have something to
          <br />
          satisfy every palate.
        </p>
        <div className="flex justify-center gap-2">
          <button className="bg-[#e7ece8] text-gray-400 border border-gray-200 rounded-full px-4 py-2 text-xs cursor-pointer hover:text-black hover:border-black hover:bg-[#d7efdb]">
            ALL
          </button>
          <button className="bg-[#e7ece8] text-gray-400 border border-gray-200 rounded-full px-4 py-2 text-xs cursor-pointer hover:text-black hover:border-black hover:bg-[#d7efdb]">
            SEASON
          </button>
          <button className="bg-[#e7ece8] text-gray-400 border border-gray-200 rounded-full px-4 py-2 text-xs cursor-pointer hover:text-black hover:border-black hover:bg-[#d7efdb]">
            LUNCH
          </button>
          <button className="bg-[#e7ece8] text-gray-400 border border-gray-200 rounded-full px-4 py-2 text-xs cursor-pointer hover:text-black hover:border-black hover:bg-[#d7efdb]">
            DESSERT
          </button>
          <button className="bg-[#e7ece8] text-gray-400 border border-gray-200 rounded-full px-4 py-2 text-xs cursor-pointer hover:text-black hover:border-black hover:bg-[#d7efdb]">
            QUICK BITE
          </button>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4 justify-center">
          {dishes.map((dish) => (
            <div key={dish.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 px-4 mb-8">
              <div className="bg-[#f7f2ec] rounded-lg overflow-hidden shadow-sm h-full flex flex-col">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 flex flex-col justify-between flex-grow">
                  <div>
                    <h2 className=" text-[#262522] text-lg font-extrabold mb-2">{dish.name}</h2>
                    <p className="  text-[#262522] text-sm mb-2">{dish.description}</p>
                  </div>
                  <div className="flex justify-between items-center text-xs font-semibold text-[#26252280] mt-4">
                    <ul className="list-disc p-0 ml-2 mr-2 flex space-x-2">
                      <li>{dish.time}</li>
                      <li>{dish.difficulty}</li>
                      <li>{dish.servings}</li>
                    </ul>
                    <Link
                      to={`/recipe/${dish.id}`}
                      className="text-xs font-semibold bg-[#f7f2ec] text-[#262522] border border-[#262522] rounded-full px-3 py-1 transition-all hover:bg-[#ac967a]
                      hover:text-[#262522]"
                    >
                      VIEW RECIPE
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;













//   return (
//     <div className="bg-[#e8f5e9] py-10 flex flex-col items-center w-screen min-h-screen overflow-x-hidden">
//       <div className="text-center mb-8">
//         <div className="bg-[#f85c5c] text-[#e8f5e9] text-sm rounded-full inline-block px-4 py-1">
//           RECIPES
//         </div>
//         <h1 className="text-6xl font-extrabold my-2">EMBARK ON A <br />JOURNEY</h1>
//         <p className="text-gray-600 mb-5">
//           With our diverse collection of recipes we have something to
//           <br />satisfy every palate.
//         </p>
//         <div className="flex justify-center gap-2">
//           <button className="bg-[#e7ece8] text-gray-400 border border-gray-200 rounded-full px-4 py-2 text-xs cursor-pointer hover:text-black hover:border-black hover:bg-[#d7efdb]">
//             ALL
//           </button>
//           <button className="bg-[#e7ece8] text-gray-400 border border-gray-200 rounded-full px-4 py-2 text-xs cursor-pointer hover:text-black hover:border-black hover:bg-[#d7efdb]">
//             SEASON
//           </button>
//           <button className="bg-[#e7ece8] text-gray-400 border border-gray-200 rounded-full px-4 py-2 text-xs cursor-pointer hover:text-black hover:border-black hover:bg-[#d7efdb]">
//             LUNCH
//           </button>
//           <button className="bg-[#e7ece8] text-gray-400 border border-gray-200 rounded-full px-4 py-2 text-xs cursor-pointer hover:text-black hover:border-black hover:bg-[#d7efdb]">
//             DESSERT
//           </button>
//           <button className="bg-[#e7ece8] text-gray-400 border border-gray-200 rounded-full px-4 py-2 text-xs cursor-pointer hover:text-black hover:border-black hover:bg-[#d7efdb]">
//             QUICK BITE
//           </button>
//         </div>
//       </div>
//       <Container>
//         <Row className="justify-content-center w-full">
//           {dishes.map((dish) => (
//             <Col key={dish.id} sm={12} md={4} lg={4} className=" mb-4  flex justify-center">
//               <Card className="text-center rounded-lg bg-[#f7f2ec] h-full w-full max-w-sm shadow-sm ">
//                 <Card.Img variant="top" src={dish.image} alt={dish.name} className="h-full rounded-t-lg object-cover" />
//                 <Card.Body className="text-left flex flex-col h-full justify-between">
//                   <div>
//                     <Card.Title className="text-lg font-extrabold mb-2">{dish.name}</Card.Title>
//                     <Card.Text className="text-sm mb-2">{dish.description}</Card.Text>
//                   </div>
//                   <div className="flex justify-between items-center text-xs font-semibold text-black">
//                     <ul className="list-disc p-0 ml-2 mr-2 flex space-x-2">
//                       <li>{dish.time}</li>
//                       <li>{dish.difficulty}</li>
//                       <li>{dish.servings}</li>
//                     </ul>
//                     <Button
//                       as={Link}
//                       to={`/recipe/${dish.id}`}
//                       className="text-xs font-semibold bg-[#f7f2ec] text-black border border-black rounded-full px-3 py-1 transition-all hover:bg-[#ac967a]"
//                     >
//                       VIEW RECIPE
//                     </Button>
//                   </div>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </Container>
//     </div>
//   );
// }

// export default Menu;
