import map from "../Assets/Map.png";
import Button from "../components/Button";

function CampDetail() {
  return (
    <>
      <div className="w-[82%] mx-auto py-6 font-Archivo">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-start-1 col-end-5">
            <div className="border border-slate-300 p-10 rounded-md">
              <img
                src={map}
                alt="map"
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          </div>
          <div className="col-start-5 col-end-13">
            <div className="border border-slate-300 p-10 rounded-md">
              <div>
                <img src="" alt="" />
                <div>
                  <div className="flex justify-between">
                    <h1 className="font-bold">Mount Ulap</h1>
                    <p>$104.99/Night</p>
                  </div>
                  <p className="text-[#5f5f5f] py-2"></p>
                  <div className="italic text-[#5f5f5f]">
                    Submitted by Andrew Mike
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-slate-300 p-10 mt-5 rounded-md">
              {/* Comments */}
              <div className="border-b py-4">
                <div className="flex justify-between">
                  <h1 className="font-bold">Adam Jones</h1>
                  <p>13h ago</p>
                </div>
                <p></p>
              </div>

              {/* add comment Button */}
              <div className="mt-4 flex justify-end">
                <Button text="Leave a Review" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CampDetail;
