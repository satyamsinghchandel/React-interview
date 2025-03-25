import { useState } from "react";
import { HeartIcon, SpinnerIcon } from "./Icons";
import "./App.css";

function App() {
  const [liked, setLiked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const onclick = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://www.greatfrontend.com/api/questions/like-button",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            action: liked ? "unlike" : "like",
          }),
        }
      );
      if(response.status>=200 && response.status<300){
        setLiked((prev) => !prev);
      }
      else{
        const res = await response.json();
        setError(res.message);
        return
      }
    } finally {
      setLoading(false);
    }
    
  };
  return (
    <>
      <div
        className={liked ? "container liked" : "container"}
        onClick={onclick}
      >
        {loading? <SpinnerIcon/>:<HeartIcon/>}
        <span>{liked ? "Liked" : "Like"}</span>
      </div>
      {error && <div>
        Error: {error}
        </div>}
    </>
  );
}

export default App;
