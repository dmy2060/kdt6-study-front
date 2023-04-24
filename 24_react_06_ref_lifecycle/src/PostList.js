import { useEffect, useState } from "react";
import PostItem from "./PostItem";
import "./App.css";
// 자바스크립트일땐 cdn, react에서 아래처럼 씀
import axios from "axios";

// 임시 데이터 (backend 서버에서 받아왔다고 가정하는 데이터)
const fakePosts = [
  {
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto",
  },
  {
    id: 2,
    title: "qui est esse",
    body: "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla",
  },
  {
    id: 3,
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body: "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut",
  },
  {
    id: 4,
    title: "eum et est occaecati",
    body: "ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit",
  },
  {
    id: 5,
    title: "nesciunt quas odio",
    body: "repudiandae veniam quaerat sunt sed alias aut fugiat sit autem sed est voluptatem omnis possimus esse voluptatibus quisest aut tenetur dolor neque",
  },
  {
    id: 6,
    title: "dolorem eum magni eos aperiam quia",
    body: "ut aspernatur corporis harum nihil quis provident sequi mollitia nobis aliquid molestiae perspiciatis et ea nemo ab reprehenderit accusantium quas voluptate dolores velit et doloremque molestiae",
  },
  {
    id: 7,
    title: "magnam facilis autem",
    body: "dolore placeat quibusdam ea quo vitae magni quis enim qui quis quo nemo aut saepe quidem repellat excepturi ut quia sunt ut sequi eos ea sed quas",
  },
  {
    id: 8,
    title: "dolorem dolore est ipsam",
    body: "dignissimos aperiam dolorem qui eum facilis quibusdam animi sint suscipit qui sint possimus cum quaerat magni maiores excepturi ipsam ut commodi dolor voluptatum modi aut vitae",
  },
  {
    id: 9,
    title: "nesciunt iure omnis dolorem tempora et accusantium",
    body: "consectetur animi nesciunt iure dolore enim quia ad veniam autem ut quam aut nobis et est aut quod aut provident voluptas autem voluptas",
  },
  {
    id: 10,
    title: "optio molestias id quia eum",
    body: "quo et expedita modi cum officia vel magni doloribus qui repudiandae vero nisi sit quos veniam quod sed accusamus veritatis error",
  },
];

// const PostList = () => {
//   // TODO: 임시 데이터 (fakePosts)를 저장할 배열 posts state
//   // 초기 값은 빈 배열
//   const [posts, setPosts] = useState([]);

//   // TODO: 해당 컴포넌트가 "mount" 되었을 때
//   // posts state에 fakePosts 데이터를 설정하기
//   // 단, setTimeout()을 이용해 2초 후 posts state에 저장한다.
//   useEffect(() => {
//     setTimeout(() => {
//       setPosts(fakePosts);
//       console.log(posts);
//     }, 2000);
//   }, []);

//   return (
//     <div className="PostList">
//       <header>📨 Post List</header>
//       {posts.length === 0 ? (
//         <p>loading..</p>
//       ) : (
//         posts.map((obj) => {
//           return <PostItem obj={obj} />;
//         })
//       )}
//     </div>
//   );

// [실습 풀이]
const PostList = () => {
  const [posts, setPosts] = useState([]);
  // [before]
  // const getPosts = () => {
  //   setPosts(fakePosts);
  // };

  // [after] axios
  const getPosts = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    console.log(res.data.slice(0, 10));
    setPosts(res.data.slice(0, 10));
  };
  useEffect(() => {
    // [before]
    // setTimeout(() => {
    //   getPosts(); // posts state 변경 함수
    // }, 2000);

    getPosts();
  }, []); // 업데이트 안되고 mount 할때만 불러올거라 [] 빈배열 넣어주면 됨

  const dataLoading = () => {
    return <h2>Loading...</h2>;
  };

  // 배열
  // 함수는 map 메서드의 콜백함수
  const dataLoaded = posts.map((post) => {
    return <PostItem post={post} key={post.id} />;
  });

  return (
    <div className="PostList">
      <header>📨 Post List</header>
      {/* before */}
      {/* {posts.length > 0 ? (
        posts.map((post) => {
          // key 값은 자식이 아닌 부모 컴포넌트에서 넣어줘야함
          return <PostItem post={post} key={post.id} />;
        })
      ) : (
        <h2>Loading...</h2>
      )} */}

      {/* after */}
      {posts.length > 0 ? dataLoaded : dataLoading()}
    </div>
  );
};

export default PostList;
