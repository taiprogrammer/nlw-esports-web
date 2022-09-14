import FormAds from "./FormAds";
import { ReactNode } from "react";

interface ModalPublishAdsType {
  children?: ReactNode;
}

function ModalPublishAds(props: ModalPublishAdsType) {
  return (
    <>
      <div className="absolute top-0 bg-background-overlay w-full h-full flex justify-center">
        <div className="my-16 bg-[#2A2634] h-fit rounded-lg">
          <div className="py-[32px] px-[40px]">
            <div className="flex items-start justify-between">
              <h1 className="text-white text-[32px] font-black">
                Publique um anúncio
              </h1>
              {props.children}
            </div>
            <div>
              <FormAds />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalPublishAds;
