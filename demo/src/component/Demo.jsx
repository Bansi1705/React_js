import { useEffect, useState } from "react";

function Demo() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((responce) => {
        // if (!responce.ok) {
        //   throw new Error("Fail");
        // }
        return responce.json();
      })
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);
  useEffect(()=>{
    console.log(posts);
  },[posts])
  
  if (loading) return <h2>Loading</h2>;
  if (error) return <h2>Error:</h2>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Post Data</h1>
      <table border="1" cellPadding="10" style={{ borderCollapse: "collapse" }}>
        <thead style={{ backgroundColor: "#f2f2f2" }}>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>hello</td>
          </tr>
          {posts.map((post) => {
           return  <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  );
}
export default Demo;