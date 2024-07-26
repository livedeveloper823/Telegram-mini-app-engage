import Navbar from "../components/Navbar";

const EarnCash = () => {
  return (
    <div>
      <div className="h-[90vh] w-[100vw]">
        <div className="flex justify-between px-10 mt-5">
          <p>AWOOF TASK</p>
          <p>00:00:00</p>
        </div>
        <div className="w-full text-white text-center">
          <div className="flex justify-around mt-2">
            <a href="https://discord.com" target="blank">
              <div className="bg-blue-600 rounded-xl px-5 py-3 hover:translate-y-1 duration-150">
                Discord
              </div>
            </a>
            <a href="https://web.telegram.org" target="blank">
              <div className="bg-blue-600 rounded-xl px-5 py-3 hover:translate-y-1 duration-150">
                Telegram
              </div>
            </a>
            <a href="https://web.whatsapp.com" target="blank">
              <div className="bg-blue-600 rounded-xl px-5 py-3 hover:translate-y-1 duration-150">
                Whatsapp
              </div>
            </a>
            <a href="https://web.skype.com" target="blank">
              <div className="bg-blue-600 rounded-xl px-5 py-3 hover:translate-y-1 duration-150">
                Skype
              </div>
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-3 mt-5 items-center">
          <p>SOCIAL MEADIA TASK IN LIST VIEW & ORDER ID</p>
        </div>
      </div>
      <Navbar />
    </div>
  );
};
export default EarnCash;
