import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleCreateRoom = () => {
    navigate(`/room/${Date.now()}`);
  };
  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleCreateRoom}>Create Room</button>
    </div>
  );
};

export default Home;
