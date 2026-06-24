import { useState } from "react";

function Home() {

  const [likes, setLikes] = useState(0);

  return (
    <div>
      <h2>Home Page</h2>

      <p>Welcome to my React Project.</p>

      <button onClick={() => setLikes(likes + 1)}>
        ❤️ Like ({likes})
      </button>

    </div>
  );
}

export default Home;