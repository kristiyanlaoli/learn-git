let ButtonPlusMinus = () => {
  return (
    <>
      <div className="border-2 border-color-secondary w-[150px] bg-color-primary flex items-center justify-between">
        <button className="font-bold text-lg hover:bg-color-secondary text-color-light p-2 w-12 border-r-2 border-color-secondary">
          +
        </button>
        <span className="font-bold text-lg text-color-light">0</span>
        <button className="font-bold text-lg hover:bg-color-secondary text-color-light p-2 w-12 border-l-2 border-color-secondary">
          -
        </button>
      </div>
    </>
  );
};

export default ButtonPlusMinus;
