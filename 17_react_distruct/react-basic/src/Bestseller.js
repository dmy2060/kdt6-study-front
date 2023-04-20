function Bestseller({ title, author, price, type }) {
  return (
    <>
      <div className="bestWrap">
        <h1>이번주 베스트셀러</h1>
        <img src="" alt="" />
        <div className="infoBox">
          <h2 className="bestTitle">{title}</h2>
          <ul>
            <li>저자: {author}</li>
            <li>판매가: {price}원</li>
            <li>구분: {type}</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Bestseller;
