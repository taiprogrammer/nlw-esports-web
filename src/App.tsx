import "./styles/main.css";
import Logo from "./components/Logo";
import Card from "./components/Card";
import Banner from "./components/Banner";
import PublishAds from "./components/PublishAds";

function App() {
  const games = [
    {
      id: 1,
      image: "/game-1.png",
      title: "League of Legends",
      ads: "4 anúncios",
    },
    {
      id: 2,
      image: "/game-2.png",
      title: "Dota 2",
      ads: "4 anúncios",
    },
    {
      id: 3,
      image: "/game-3.png",
      title: "Counter Strike",
      ads: "4 anúncios",
    },
    {
      id: 4,
      image: "/game-4.png",
      title: "Apex",
      ads: "4 anúncios",
    },
    {
      id: 5,
      image: "/game-5.png",
      title: "Fortnite",
      ads: "4 anúncios",
    },
    {
      id: 6,
      image: "/game-6.png",
      title: "World of Warcraft",
      ads: "4 anúncios",
    },
  ];

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center">
      <Logo />
      <Banner />
      <div className="grid grid-cols-6 gap-6 my-16">
        {games.map(({ image, title, ads }) => (
          <Card image={image} title={title} ads={ads} />
        ))}
      </div>
      <PublishAds />
    </div>
  );
}

export default App;
