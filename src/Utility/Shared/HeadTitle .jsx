const HeadTitle = () => {
  const titleHead = "---From 11:00am to 10:00pm---";
  const titleMain = "ORDER ONLINE";
  return (
    <div className="text-center">
      <p>--{titleHead}--</p>
      <div className="divider w-96 mx-auto"></div>
      <h2>{titleMain}</h2>
      <div className="divider w-96 mx-auto"></div>
    </div>
  );
};

export default HeadTitle;
