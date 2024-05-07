import { Link } from "react-router-dom";
import { FaShareFromSquare } from "react-icons/fa6";
import { RxLapTimer } from "react-icons/rx";
import { FaThumbsUp } from "react-icons/fa";

const Card = () => {
  const dish = {
    image:
      "https://static.vecteezy.com/system/resources/previews/027/242/563/original/taco-mexican-food-illustration-ai-generative-free-png.png",
    title: "Taco Mexican food",
    ingredients: `3 1/2 c Chicken broth; homemade,1 lb Fresh spinach; wash/trim/chop,1 Egg,1 c Grated parmesan cheese; --or--,1 c Romano cheese; freshly grated,Salt and pepper; to taste`,
    description:
      "Traditional choices range from chicken, beef, slow-cooked pork, to white fish. Some adventurous souls even opt for beans, sweet potatoes, or lamb. Salsa: Salsa and sauces are the soul of your taco, tying all other ingredients together. A tangy pico de gallo complements almost everything.",
    instructions: `Cook beef in 10-inch skillet over medium heat 8 to 10 minutes, stirring occasionally, until brown; drain.
    Stir salsa into beef. Heat to boiling, stirring constantly; reduce heat to medium-low....`,
  };

  return (
    <Link
      to={`/recipes/1`}
      className="mr-[3.3%] mb-[3%] text-center lg:w-[30%]  p-5 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] hover:scale-[1.02] duration-200 rounded-lg"
    >
      <img className="w-[100%]" src={dish.image} alt={dish.title} />
      <h1 className="mt-5 mb-3 text-xl text-semibold">{dish.title}</h1>
      <p>{dish.description.slice(0, 100)}...</p>
      <div className="flex justify-between text-zinc-400 mt-5 ">
        <p className="text-center">
          <RxLapTimer className="text-2xl text-slate" />
          <br />
          <span className="text-sm">20min</span>
        </p>
        <p className="text-center">
          <FaThumbsUp className="text-2xl text-slate" />
          <br />
          <span className="text-sm">Easy</span>
        </p>
        <p className="text-center">
          <FaShareFromSquare className="text-2xl text-slate" />
          <br />
          <span className="text-sm">Share</span>
        </p>
      </div>
    </Link>
  );
};

export default Card;
