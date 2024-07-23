import Navbar from "../components/Navbar";

const Mine = () => {
  return (
    <div>
      <div className="h-[90vh] w-[100vw]">
        <div className="w-full text-white text-center">
          <div className="flex justify-around mt-3">
            <div className="bg-blue-600 rounded-xl px-5 py-3 hover:translate-y-1 duration-150">
              <p>Earn per Tap</p>
              <p>+8</p>
            </div>
            <div className="bg-blue-600 rounded-xl px-5 py-3 hover:translate-y-1 duration-150">
              <p>Earn per Tap</p>
              <p>1M</p>
            </div>
            <div className="bg-blue-600 rounded-xl px-5 py-3 hover:translate-y-1 duration-150">
              <p>Earn per Tap</p>
              <p>+612.5K</p>
            </div>
          </div>
        </div>
        <div>This is the Mine Page.</div>
      </div>
      <Navbar />
    </div>
  );
};
export default Mine;
