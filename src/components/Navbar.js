const Navbar = () => {
  return (
    <div className="flex justify-around w-full fixed bottom-2 py-3 rounded-t-3xl border-t-2 border-blue-400 max-w-3xl">
      <a href="/shop">
        <div className="flex flex-col items-center">
          <div className="scale-150">
            <i className="bi bi-cart-fill"></i>
          </div>
          Shop
        </div>
      </a>
      <a href="/earncash">
        <div className="flex flex-col items-center">
          <div className="scale-150">
            <i className="bi bi-cash"></i>
          </div>
          Tasks
        </div>
      </a>
      <a href="/home">
        <div className="flex flex-col items-center">
          <div className="scale-150">
            <i className="bi bi-house-door-fill"></i>
          </div>
          Home
        </div>
      </a>
      <a href="/friends">
        <div className="flex flex-col items-center">
          <div className="scale-150">
            <i className="bi bi-people-fill"></i>
          </div>
          Friends
        </div>
      </a>
      <a href="/wallet">
        <div className="flex flex-col items-center">
          <div className="scale-150">
            <i className="bi bi-wallet-fill"></i>
          </div>
          Wallet
        </div>
      </a>
    </div>
  );
};

export default Navbar;
