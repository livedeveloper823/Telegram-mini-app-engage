import Mine from "../assets/mine.png";

const Navbar = () => {
  return (
    <div className="flex justify-around w-full fixed bottom-2 py-3 rounded-t-3xl border-t-2 border-blue-400">
      <a href="/exchange">
        <div className="flex flex-col items-center">
          <img src={Mine} alt="" width={30} />
          Home
        </div>
      </a>
      <a href="/mine">
        <div className="flex flex-col items-center">
          <img src={Mine} alt="" width={30} />
          Earn Cash
        </div>
      </a>
      <a href="/friends">
        <div className="flex flex-col items-center">
          <img src={Mine} alt="" width={30} />
          Shop
        </div>
      </a>
      <a href="/earn">
        <div className="flex flex-col items-center">
          <img src={Mine} alt="" width={30} />
          Friends
        </div>
      </a>
      <a href="/airdrop">
        <div className="flex flex-col items-center">
          <img src={Mine} alt="" width={30} />
          Wallet
        </div>
      </a>
      <a href="/airdrop">
        <div className="flex flex-col items-center">
          <img src={Mine} alt="" width={30} />
          Profile
        </div>
      </a>
      <a href="/airdrop">
        <div className="flex flex-col items-center">
          <img src={Mine} alt="" width={30} />
          FAQ
        </div>
      </a>
      <a href="/airdrop">
        <div className="flex flex-col items-center">
          <img src={Mine} alt="" width={30} />
          Get Supports
        </div>
      </a>
    </div>
  );
};

export default Navbar;
