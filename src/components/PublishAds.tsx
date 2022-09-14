import { ReactNode } from "react";
interface PublishAdsType {
  children?: ReactNode;
}

function PublishAds(props: PublishAdsType) {
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
          <div>{props.children}</div>
        </div>
      </div>
    </div>
  );
}

export default PublishAds;
