const Header = (): React.JSX.Element => {
  return (
    <header className="flex w-full h-64 justify-center items-center bg-gradient-to-b from-primaryPurple from-30% via-customPink to-customYellow">
      {/* Title */}
      <h1 className="text-3xl font-extrabold text-white text-center">
        Task Management Application
      </h1>
    </header>
  );
};

export default Header;
