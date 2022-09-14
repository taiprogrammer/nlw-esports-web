interface CardType {
    image: string;
    title: string;
    ads: string;
}

function Card (props: CardType) {
    return (<a href="" className="relative rounded-lg overflow-hidden">
            <img src={props.image} alt="" />
            <div className="bg-card-game-gradient w-full pt-16 px-4 absolute bottom-0 right-0">
              <strong className="text-white font-bold">{props.title}</strong>
              <p className="text-zinc-300 text-sm mt-1 pb-2">{props.ads}</p>
            </div>
          </a>)
}

export default Card;