const PostItem = ({ post }) => {
  // TODO: 부모 컴포넌트에서 넘겨주는 데이터(props) 구조 분해 할당
  // const { post } = props;
  // 위와 같이 매개변수를 바로 받아도 됨
  return (
    // TODO: 데이터 채우기
    <div className="PostItem">
      <div>
        <span className="id">No. {post.id}</span>
        <span className="title">{post.title}</span>
      </div>
      <p className="body">{post.body}</p>
    </div>
  );
};

export default PostItem;
