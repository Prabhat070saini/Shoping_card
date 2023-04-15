import React, { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";
const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setloading] = useState(false);
  const [posts, setposts] = useState([]);
  async function FetchProductdata() {
    setloading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setposts(data);
      console.log(data);
    } catch (err) {
      console.error(err);
      setposts([]);
    }
    setloading(false);
  }
  useEffect(() => {
    FetchProductdata();
  }, []);
  return (
    <React.Fragment>
      {loading ? (
        <Spinner />
      ) : posts.length > 0 ? (
        <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 max-w-[60rem]  p-2 mx-auto space-y-10 space-x-10 min-h-[80vh] justify-center m-0 pt-8">
          {posts.map((post) => (
            <Product key={post.id} post={post}></Product>
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center capitalize  ">
          <p>no data fount</p>
        </div>
      )}
    </React.Fragment>
  );
};

export default Home;
