import "./styles/Practice1.scss";

function Practice1() {
  return (
    <div className="imageBox">
      <div>
        {/* env 환경변수 */}
        <img src={process.env.PUBLIC_URL + "/images/1.png"} alt="이미지1" />
      </div>
      <div>
        <img src={process.env.PUBLIC_URL + "/images/2.png"} alt="이미지4" />
      </div>
      <div>
        <img src={process.env.PUBLIC_URL + "/images/3.png"} alt="이미지2" />
      </div>
      <div>
        <img src={process.env.PUBLIC_URL + "/images/4.png"} alt="이미지3" />
      </div>
      <div>
        <img src={process.env.PUBLIC_URL + "/images/5.png"} alt="이미지5" />
      </div>
    </div>
  );
}

export default Practice1;
