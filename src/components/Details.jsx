import { useContext, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { recipecontext } from "../contexts/RecipeContext";
import { useDispatch, useSelector } from "react-redux";
import { deleteRecipe } from "../../store/Reducers/RecipeReducer";

const Details = () => {
  // const [recipe, setrecipe] = useContext(recipecontext);
  const { recipe } = useSelector((state) => state.RecipeReducer);
  console.log(recipe);
  const params = useParams();
  const navigate = useNavigate();
  const recipes = recipe.find((r) => r.id == params.id);
  const dispatch = useDispatch();
  // console.log(recipes);

  console.log(params.id)
  const Deletehandler = () => {
    dispatch(deleteRecipe(params.id));

    // const copyrecipe=[...recipe];
    // const recipeindex=recipe.findIndex((r)=> r.id == params.id);
    // copyrecipe.splice(recipeindex,1);
    // setrecipe(copyrecipe);
    // localStorage.setItem("recipe", JSON.stringify(copyrecipe));
  };

  //   useEffect(() => {
  //       setrecipe(JSON.parse(localStorage.getItem("recipe")));
  //   }, []);
  return (
    <div className="lg:w-[80%] w-full lg:m-auto p-5 ">
      <Link to="/recipes" className="text-3xl ri-arrow-left-line"></Link>
      <div className="details w-full flex flex-col lg:flex-row lg:h-[75vh] mt-3">
        <div className="dets w-full lg:w-[50%] p-[3%] shadow">
          <img className="" src={recipes && recipes.image} alt="" />
          <h1 className="text-xl mb-5 mt-[10%] text-center">
            {recipes && recipes.title}
          </h1>
          <p className="text-zinc-400">{recipes && recipes.description}</p>
          <div className="flex justify-between py-10 px-5">
            <Link
              to={"/update-recipe/" + params.id}
              className="text-blue-400 border-blue-400 border py-2 px-5"
            >
              Update
            </Link>
            <Link to={"/recipes"}
              onClick={Deletehandler}
              className="text-red-400 border-red-400 border py-2 px-5"
            >
              Delete
            </Link>
          </div>
        </div>
        <div className="desc w-full mt-10 lg:mt-0 lg:w-[50%] px-[5%] py-[3%] overflow-auto">
          <h1 className="text-3xl border-b border-green-600 text-green-600">
            Ingredient
          </h1>
          <ul className="text-zinc-600 list-disc  p-3 ">
            { recipes &&
              recipes.ingredient.split(",").map((d, i) => (
                <li className="list-item text-sm  mb-2" key={i}>
                  {d}
                </li>
              ))}
          </ul>
          <h1 className="text-3xl border-b border-green-600 text-green-600">
            Instructions
          </h1>
          <ul className="text-zinc-600 list-decimal  p-3 ">
            {recipes && recipes.instruction.split(".").map((d, i) => (
              <li className="list-item text-sm  mb-2" key={i}>
                {d}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Details;
