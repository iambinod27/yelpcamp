function InputBox({ title, type, fab, placeholder }) {
  return (
    <div className="flex flex-col py-3">
      <label className="mb-1">{title}</label>
      <input type={type} className={fab} placeholder={placeholder} />
    </div>
  );
}

export default InputBox;
