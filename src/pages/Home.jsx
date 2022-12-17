import Recipes from "../components/Recipes";

const Home = () => {
  return (
    <div>
      <Recipes title="Use Your Noodle" type="noodle" />
      <div className="w-full max-w-full p-[2rem]" />
      <Recipes title="What's New" type="cake" />
    </div>
  );
};

export default Home;
