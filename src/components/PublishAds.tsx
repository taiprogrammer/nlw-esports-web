import IconSearch from "../assets/ic-search.svg";
function PublishAds() {
  return (
    <div>
      <div className="pt-1 bg-nlw-gradient rounded-lg self-stretch">
        <div
          className="bg-[#2A2634] py-6 px-8 flex align-center justify-between 
           rounded-[6px] mb-[132px] w-[1200px]"
        >
          <div>
            <h2 className="text-2xl text-white font-black">
              Não encontrou seu duo?
            </h2>
            <p className="text-base font-normal text-zinc-400">
              Publique um anúncio para encontrar novos players!
            </p>
          </div>
          <div>
            <button className="flex items-center justify-between text-white bg-violet-500 py-[14.5px] pl-[19px] pr-[16px] rounded-md hover:opacity-90">
              <img className="pr-2" src={IconSearch} alt="" />
              Publicar anúncio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PublishAds;
