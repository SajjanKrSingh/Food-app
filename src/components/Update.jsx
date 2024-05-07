const Update = () => {
    return (
        <form className="w-[70%] m-auto  ">
            <h1 className="text-7xl mt-5 font-extrabold text-green-600 mb-[5%]">
                Update <br /> Existing Recipe
            </h1>
            <input
                type="url"
                className="w-full border rounded-md px-5 py-2  text-xm font-light lg:text-lg lg:px-6 lg:py-3 text-lg mb-5 lg:placeholder:text-lg placeholder:text-sm"
                placeholder="Recipe Image URL"
            />
            <input
                type="text"
                className="w-full border rounded-md px-5 py-2 text-xm font-light lg:text-lg lg:px-6 lg:py-3 text-lg mb-5 lg:placeholder:text-lg placeholder:text-sm"
                placeholder="Recipe Name"
            />
            <textarea
                className="w-full border rounded-md px-5 py-1 lg:px-6 lg:py-3 text-xm font-light lg:text-lg mb-5 lg:placeholder:text-lg placeholder:text-sm placeholder:py-5 lg:placeholder:py-0 "
                placeholder="recipe description..."
            ></textarea>
            <textarea
                className="w-full border rounded-md px-5 py-1 lg:px-6 lg:py-3 text-xm font-light lg:text-lg text-lg mb-5 lg:placeholder:text-lg placeholder:text-xs placeholder:py-3"
                placeholder="recipe ingredients -> 'use comma to seperate ingredients'..."
            ></textarea>
            <textarea
                className="w-full border rounded-md px-5 py-1 lg:px-6 lg:py-3 text-xm font-light lg:text-lg text-lg mb-5 lg:placeholder:text-lg placeholder:text-xs placeholder:py-3"
                placeholder="recipe instructions -> 'use comma to seperate instructions'..."
            ></textarea>
            <div className="w-full text-right">
                <button className="rounded-md text-xl lg:ml-0 bg-green-600 text-white py-2 px-5 hover:bg-green-700 duration-200">
                    Re-Publish Recipe &nbsp; &#8594;
                </button>
            </div>
        </form>
    );
};

export default Update;