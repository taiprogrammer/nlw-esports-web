import "./styles/main.css";
import { useState } from "react";
import Logo from "./components/Logo";
import Card from "./components/Card";
import Banner from "./components/Banner";
import IconSearch from "./assets/ic-search.svg";
import PublishAds from "./components/PublishAds";
import ModalPublishAds from "./components/ModalPublishAds";
import { XMarkIcon } from "@heroicons/react/24/outline";

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
  const [openModal, setOpenModal] = useState(false);

  function open() {
    setOpenModal(true);
    window.scrollTo(0, 0);
  }

  function close() {
    setOpenModal(false);
  }

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center relative">
      <Logo />
      <Banner />
      <div className="grid grid-cols-6 gap-6 my-16">
        {games.map(({ image, title, ads }) => (
          <Card image={image} title={title} ads={ads} />
        ))}
      </div>
      <PublishAds>
        <button
          onClick={open}
          className="flex items-center justify-between text-white bg-violet-500 
            py-[14.5px] pl-[19px] pr-[16px] rounded-md hover:bg-violet-700"
        >
          <img className="pr-2" src={IconSearch} alt="Icon Search" />
          Publicar anúncio
        </button>
      </PublishAds>
      {openModal ? (
        <ModalPublishAds>
          <XMarkIcon
            onClick={close}
            className="w-7 text-white cursor-pointer"
          />
        </ModalPublishAds>
      ) : null}
    </div>
  );
}

export default App;
