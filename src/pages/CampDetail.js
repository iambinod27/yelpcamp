import { useState } from "react";
import { useLocation } from "react-router-dom";
import map from "../Assets/Map.png";
import Button from "../components/Button";

function CampDetail() {
  const location = useLocation();
  const { campgrounds } = location.state;
  const commented = campgrounds.comments;

  const [comment, setComment] = useState("");
  const onChange = (e) => setComment(e.target.value);

  const onComment = (e) => {
    e.preventDefault();

    setComment("");
  };

  return (
    <>
      <div className="w-[85%] mx-auto py-6 font-Archivo">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 gap-6">
          <div className="lg:col-start-1 lg:col-end-5">
            <div className="border border-slate-300 p-10 rounded-md">
              <img
                src={map}
                alt="map"
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          </div>
          <div className="lg:col-start-5 lg:col-end-13">
            <div className="border border-slate-300 p-5 lg:p-10 rounded-md">
              <div>
                <img
                  src={campgrounds.image}
                  alt={campgrounds.title}
                  className="object-cover rounded-md w-full h-[10rem] lg:h-[20rem] mb-5"
                />
                <div>
                  <div className="flex justify-between">
                    <h1 className="font-bold">{campgrounds.title}</h1>
                    <p>${campgrounds.price}/Night</p>
                  </div>
                  <p className="text-[#5f5f5f] py-2">
                    {campgrounds.description}
                  </p>
                  <div className="italic text-[#5f5f5f]">
                    Submitted by {campgrounds.user}
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-slate-300 p-5 lg:p-10 mt-5 rounded-md ">
              {/* Comments */}
              {commented.map((item) => {
                return (
                  <div className="border-b py-4" key={item.id}>
                    <div className="flex justify-between">
                      <h1 className="font-bold">{item.user}</h1>
                      <p>13h ago</p>
                    </div>
                    <p className="py-2 text-[#5f5f5f]">{item.comment}</p>
                  </div>
                );
              })}

              <form className="pt-6" onSubmit={onComment}>
                <textarea
                  value={comment}
                  onChange={onChange}
                  placeholder="Add Comment..."
                  className="resize-none w-full h-[5rem] p-2 border border-slate-300 focus:outline-none rounded-md drop-shadow-sm bg-[#f7f7f7]"
                ></textarea>
                <div className="mt-4 flex justify-end">
                  <Button text="Leave a Review" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CampDetail;
