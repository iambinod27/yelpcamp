import loading from "../Assets/icons/loading.gif";

const Spinner = () => {
  return (
    <div className="flex items-center">
      <img src={loading} alt="spinner" className="w-[2rem] h-[2rem]" />
    </div>
  );
};

export default Spinner;
