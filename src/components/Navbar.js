import Mine from "../assets/mine.png";

const Navbar = () => {
  return (
    <div className="flex justify-around w-full fixed bottom-2 py-3 rounded-t-3xl border-t-2 border-blue-400">
      <a href="/shop">
        <div className="flex flex-col items-center">
          <img src={Mine} alt="" width={30} />
          Shop
        </div>
      </a>
      <a href="/earncash">
        <div className="flex flex-col items-center">
          <img src={Mine} alt="" width={30} />
          Social Task
        </div>
      </a>
      <a href="/home">
        <div className="flex flex-col items-center">
          <img src={Mine} alt="" width={30} />
          Home
        </div>
      </a>
      <a href="/friends">
        <div className="flex flex-col items-center">
          <img src={Mine} alt="" width={30} />
          Friends
        </div>
      </a>
      <a href="/wallet">
        <div className="flex flex-col items-center">
          <img src={Mine} alt="" width={30} />
          Wallet
        </div>
      </a>
    </div>
  );
};

export default Navbar;
