// import { useState } from "react";

// import { useEffect, useState } from "react";

// const App = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((data) => setUsers(data));
//     console.log("componentUpdated");
//   }, []);
//   return (
//     <div>
//       {users.map((user) => (
//         <div key={user.id}>
//           <h2>Name: {user.name}</h2>
//           <p>{user.email}</p>
//           <p>{user.phone}</p>
//           <p>{user.website}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default App;

// const App = () => {
//   const [user, setUser] = useState([{ name: "John", email: "John@gmail.com" }]);
//   const [userName, setUserName] = useState("");
//   const [email, setEmail] = useState("");
//   const [like, setLike] = useState(false);

//   const hendleSubmit = (event) => {
//     event.preventDefault();

//     const newUser = {
//       name: userName,
//       email,
//     };
//     setUser([...user, newUser]);
//   };
//   return (
//     <div>
//       <form onSubmit={hendleSubmit}>
//         <input
//           type="text"
//           onChange={(event) => setUserName(event.target.value)}
//           placeholder="Name"
//         />

//         <input
//           type="email"
//           onChange={(event) => setEmail(event.target.value)}
//           placeholder="Email"
//         />
//         <button>отправить</button>
//       </form>

//       <input
//         type="checkbox"
//         checked={like}
//         onChange={(event) => setLike(event.target.checked)}
//       />
//       <p>{like === true ? "понравилось" : ""}</p>
//       <div>
//         {user.map((item) => (
//           <div key={item.name}>
//             <p>{item.name}</p>
//             <p>{item.email}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App;
// const [posts, setPosts] = useState([]);
// const fetchPosts = async () => {
//   try {
//     await axios
//       .get("https://jsonplaceholder.typicode.com/posts?&_limit=5")
//       .then((res) => console.log(res.data));
//   } catch (error) {
//     console.error("error fetching posts" + error);
//   }
// };
// const [photos, setPhotos] = useState([]);
// const [url, setUrl] = useState([]);
// const fetchPhotos = async () => {
//   try {
//     await axios
//       .get("https://pokeapi.co/api/v2/pokemon?_limit=10")
//       // .then((url) => console.log(url.data));
//       .then((url) => setPhotos(url.data.results));
//   } catch (error) {
//     console.error("error fetching photos" + error);
//   }
// };

// const fetchPockemon = async ({ url }) => {
//   try {
//     await axios
//       .get(photos.url)
//       .then((url) => console.log(url.data.results.url));
//   } catch ({ error }) {
//     console.error("error fetching photos" + error);
//   }
// };
// useEffect(() => {
//   fetchPhotos();
// }, []);
// useEffect(() => {
//   if (photos.length > 0) {
//     photos.forEach(({ url }) => {
//       url(...url.url);
//       fetchPockemon();
//     });
//   }
// }, []);
// <div>
//   <div>
//     {url.map(({ name, url }) => {
//       return (
//         <div key={name}>
//           <img src={url} alt="" />
//         </div>
//       );
//     })}
//     {photos.map(({ name, url }) => {
//       return (
//         <div key={name}>
//           <span>{name}</span>
//           <img src={url} alt="" />
//         </div>
//       );
//     })}
//   </div>
// </div>
//   <div>
//     <div>
//       {posts.map((post) => {
//         return (
//           <div key={post.id}>
//             <p>{post.title}</p>
//             <p>{post.body}</p>
//           </div>
//         );
//       })}
//     </div>

//     <div>
//       <DNA
//         visible={true}
//         height="80"
//         width="80"
//         ariaLabel="dna-loading"
//         wrapperStyle={{}}
//         wrapperClass="dna-wrapper"
//       />
//     </div>
//   </div>
import axios from "axios";
import { DNA } from "react-loader-spinner";
import { useEffect, useState } from "react";
import ImageGallery from "./components/ImageGallery";
import ImageGalleryItem from "./components/ImageGalleryItem";
import "./App.css";
import "./index.css";
import Searchbar from "./components/Searchbar";
import Pogination from "./components/Pogination/Pogination";
import Loader from "./components/Loader/Loader";
import { Audio } from "react-loader-spinner";
import Modal from "./components/Modal/Modal";

function App() {
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState("flowers");
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalHits, setTotalHits] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [img, setImg] = useState(null);
  const fetchPhotos = async () => {
    try {
      await axios
        .get(
          `https://pixabay.com/api/?key=42466984-f86fae8c6fce15af1392cc52f&q=${query}&image_type=photo?_per_page=10&page=${page}`
        )
        .then((res) => {
          setPhotos(res.data.hits);
          setTotalHits(res.data.total);
          res && setIsLoading(false);
          console.log(res);
        });
      setIsLoading(false);
    } catch (error) {
      console.error("error fetching photos" + error);
    }
  };
  useEffect(() => {
    fetchPhotos();
  }, [query, page]);
  const handleSubmit = (value) => {
    setQuery(value);
  };
  const handleShowModal = (largeImageURL) => {
    setShowModal(true);
    setImg(largeImageURL);
  };
  const closeShowModal = () => {
    setShowModal(false);
  };
  const count = totalHits / 20;
  const changePage = (value) => {
    if (value === "plus" && page < count) {
      setPage(page + 1);
    }
    if (value === "minus" && page > 1) {
      setPage(page - 1);
    }
  };
  return (
    <div className="App">
      <Searchbar handleSubmit={handleSubmit} />
      {photos.length ? (
        <ImageGallery
          handleShowModal={handleShowModal}
          className="ImageGallery"
          image={photos}
          isLoading={isLoading}
        />
      ) : (
        <p className="NotSearched">{`Ваш запрос  ${query} не найден.`}</p>
      )}
      <Pogination changePage={changePage} value={page} />
      {showModal && (
        <Modal closeShowModal={closeShowModal} largeImageURL={img} />
      )}
    </div>
  );
}

export default App;
