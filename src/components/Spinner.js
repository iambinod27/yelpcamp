import loading from "../Assets/icons/loading.gif";

const Spinner = ({ fab }) => {
  return (
    <div className={`flex items-center ${fab}`}>
      <img src={loading} alt="spinner" className="w-[2rem] h-[2rem]" />
    </div>
  );
};

export default Spinner;
