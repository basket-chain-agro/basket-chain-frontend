const WelcomeHeader = ({ name = "Richie!" }) => {
  return (
    <section>
      <h2 className="text-2xl font-bold, text-gray-900 md:text-3xl">
        Welcome Back, {name}
      </h2>

      <p className="mt-1 text-sm text-gray-600 md:text-base">
        Here's what happening with your marketplace activity
      </p>
    </section>
  );
};

export default WelcomeHeader;
