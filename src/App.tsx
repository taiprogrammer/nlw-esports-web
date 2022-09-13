import './styles/main.css';
import Logo from './components/Logo'
import Card from './components/Card'
import Banner from './components/Banner'


function App() {

  const games = [
    {
      id: 1,
      image: '/game-1.png',
      title: 'League of Legends',
      ads: '4 anúncios'
    },
    {
      id: 2,
      image: '/game-2.png',
      title: 'Dota 2',
      ads: '4 anúncios'
    },
    {
      id: 3,
      image: '/game-3.png',
      title: 'Counter Strike',
      ads: '4 anúncios'
    },
    {
      id: 4,
      image: '/game-4.png',
      title: 'Apex',
      ads: '4 anúncios'
    },
    {
      id: 5,
      image: '/game-5.png',
      title: 'Fortnite',
      ads: '4 anúncios'
    },
    {
      id: 6,
      image: '/game-6.png',
      title: 'World of Warcraft',
      ads: '4 anúncios'
    },
  ]

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center">
      <Logo />
      <Banner />
        <div className="grid grid-cols-6 gap-6 my-16">
         {games.map((game) => 
         <Card 
          image={game.image} 
          title={game.title} 
          ads={game.ads}/>)}
        </div>
        <div>
          
          <div className="flex items-center justify-between max-w-[1200px] w-[1200px] bg-[#2A2634] py-6 px-8 rounded-lg mb-[132px]">
            <div>
              <h2>
              Não encontrou seu duo?
            </h2>
            <p>Publique um anúncio para encontrar novos players!</p>
            </div>
            <div>
              <button>Publicar anúncio</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default App
