import Title from "../components/Title";
import Scope from "../components/Scope";
import Solution from "../components/Solution";
import Highlights from "../components/Highlights";
import Prototypes from "../components/Prototypes";
import Timeline from "../components/Timeline";
import Header from "../components/Header";
import Background from "../components/Background";

const Home = () => {
  return (
    <div style={{ display: "grid" }}>
      <Header />
      <div style={{ display: "grid", padding: "10px" }}>
        <Title />
        <Background />
        <Scope />
        <Solution />
        <Highlights />
        <Prototypes />
        <Timeline />
        <div>URL of WebSite is Coming.</div>
      </div>
    </div>
  );
};

export default Home;
