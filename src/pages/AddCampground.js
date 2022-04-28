import Button from "../components/Button";
import InputBox from "../components/InputBox";

function AddCampground() {
  return (
    <>
      <div className="w-[50%] mx-auto font-Archivo py-5">
        <h1 className="text-4xl font-bold pb-4">Add New Campground</h1>

        <form>
          <InputBox
            title="Campground Name"
            type="text"
            placeholder="Mt Everest"
            fab="border rounded-md p-3  focus:outline-none"
          />

          <InputBox
            title="Price"
            type="number"
            placeholder="$149"
            fab="border rounded-md p-3  focus:outline-none"
          />

          <InputBox
            title="Image"
            type="image"
            placeholder="https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.rollingstone."
            fab="border rounded-md p-3  focus:outline-none"
          />

          <div className="flex flex-col">
            <label>Description</label>
            <textarea
              id="description"
              cols="33"
              rows="10"
              className="resize-none p-3 border rounded-md focus:outline-none"
              placeholder="Mount Everest is the highest of the Himalayan mountains, and—at 8,849 meters (29,032 feet)—is considered the highest point on Earth. illness caused by reduced oxygen levels at high elevations. large mass of snow and other material suddenly and quickly tumbling down a mountain. art and science of making maps"
            ></textarea>
          </div>

          <Button text="Add Campground" fad="w-full my-5" />
        </form>
      </div>
    </>
  );
}

export default AddCampground;
