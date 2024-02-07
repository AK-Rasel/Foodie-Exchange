const SmallCard = () => {
  return (
    <div className="font-cinzel text-white space-y-1 ">
      <div className="flex justify-between font-semibold text-xl">
        <p>ROAST DUCK BREAST ------------------</p>
        <span>$14.5</span>
      </div>
      <div>
        <div className="grid grid-cols-4">
          <p className="col-span-3 leading-5 ">
            Roasted duck breast (served pink) with gratin potato and a griottine
            cherry sauce
          </p>
          <span className="col-span-1">{""}</span>
        </div>
      </div>
    </div>
  );
};

export default SmallCard;
