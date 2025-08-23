import Lottie from "lottie-react";
import animationData from "@/assets/lottie/loading.json";

export default function LoadingPage() {
  return (
    <div className="fixed w-screen h-screen bg-[var(--color-secondary)] z-50 flex flex-col justify-center items-center">
      <Lottie
        className="w-[50px] h-[50px]"
        width={50}
        height={50}
        animationData={animationData}
        loop={true}
      />
      <p className="mt-[20px] text-center text-[18px] leading-[160%] text-[var(--gray-800)] font-regular">
        AI is generating a safety
        <br />
        checklist for the site...
      </p>
    </div>
  );
}
