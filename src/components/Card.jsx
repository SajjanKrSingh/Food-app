import { Link } from "react-router-dom";
import { FaShareFromSquare } from "react-icons/fa6";
import { RxLapTimer } from "react-icons/rx";
import { FaThumbsUp } from "react-icons/fa";

const Card = (props) => {
const {id,title,image,discription,instructions, ingredients}=props.recipe;
console.log()
  return (
    <Link
      to={`/recipes/${id}`}
      className="mr-[3.3%] mb-[3%] text-center lg:w-[30%]  p-5 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] hover:scale-[1.02] duration-200 rounded-lg"
    >
      <img className="w-[100%]" src={image} alt={title} />
      <h1 className="mt-5 mb-3 text-xl text-semibold">{title}</h1>
      <p className="text-3xl">{discription}...</p>
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
