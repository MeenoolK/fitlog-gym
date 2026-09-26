"use client";

import { useContext } from "react";
import { GymContext } from "../contex/GymContex";
import GymCard from "../card/GymCard";
import Image from "next/image";
import Link from "next/link";







const ListedGym = () => {
  const { todayPlan, saveLater } = useContext(GymContext);

  return (
    <div>

        <div>
            <div className="tabs tabs-lift mt-10">





        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label={`Today's Plan (${todayPlan.length})`}
          defaultChecked
        />

        <div className="tab-content bg-base-100 border-base-300 mt-10">
          {todayPlan.length > 0 ? (
            todayPlan.map((card) => {
             return <div key={card.id} className="w-full max-w rounded-[18px] border border-[#292e38] bg-[#15181e] p-4 text-white shadow-lg">
      <div className="flex items-center gap-4">
        
        <div className="h-20 w-36.25 shrink-0 rounded-xl bg-[#22262e]">
          <Image
            src={card.image}
            alt={card.name}
            width={66}
            height={50}
            className="h-full w-full object-cover"
          />
        </div>

        
        <div className="min-w-0 flex-1">
          <h3 className="text-[16px] font-bold uppercase tracking-[0.02em]">
            {card.name}
          </h3>

          <p className="mt-1 text-[13px] text-[#8d929c]">{card.equipment}</p>

          <div className="mt-2 flex items-center gap-4 text-[12px] text-[#d2d5da]">
            <span className="flex items-center gap-1.5">
              <span className="text-[#baff00]">🕜</span>
              {card.duration}
            </span>

            <span className="flex items-center gap-1.5">
              <span className="text-[#baff00]">❤️‍🔥</span>
              {card.caloriesBurned}kcal
            </span>

            <span className="flex items-center gap-1.5">
              <span className="text-[#baff00]">⭐</span>
              {card.rating}
            </span>
          </div>
        </div>

    

    
        <div className="flex shrink-0 items-center gap-5">
          <button
            type="button"
            className="rounded-full border border-[#39404c] px-5 py-2.5 text-[12px] font-medium text-white transition hover:bg-[#20242c]"
          >
           <Link href={`../card/${card.id}`}> View Details</Link>
          </button>

          <button
            type="button"
            className="flex items-center gap-2 rounded-full bg-[#baff00] px-5 py-2.5 text-[12px] font-bold text-black transition hover:bg-[#c7ff3d]"
          >
            <span>✓</span>
            Mark as Done
          </button>

          <button
            type="button"
            aria-label="Close"
            className="ml-1 text-[22px] leading-none text-[#5d6470] transition hover:text-white"
          >
            ×
          </button>
        </div>
      </div>
    </div>

            })
          ) : (
            <p className="text-center text-lg font-semibold">
              There is no exercise for today
            </p>
          )}
        </div>





        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label= {`Saved (${saveLater.length})`}
        />

         <div className="tab-content bg-base-100 border-base-300 mt-10">
          {saveLater.length > 0 ? (
            saveLater.map((card) => {
             return <div key={card.id} className="w-full max-w rounded-[18px] border border-[#292e38] bg-[#15181e] p-4 text-white shadow-lg">
      <div className="flex items-center gap-4">
        
        <div className="h-20 w-36.25 shrink-0 rounded-xl bg-[#22262e]">
          <Image
            src={card.image}
            alt={card.name}
            width={66}
            height={50}
            className="h-full w-full object-cover"
          />
        </div>

        
        <div className="min-w-0 flex-1">
          <h3 className="text-[16px] font-bold uppercase tracking-[0.02em]">
            {card.name}
          </h3>

          <p className="mt-1 text-[13px] text-[#8d929c]">{card.equipment}</p>

          <div className="mt-2 flex items-center gap-4 text-[12px] text-[#d2d5da]">
            <span className="flex items-center gap-1.5">
              <span className="text-[#baff00]">🕜</span>
              {card.duration}
            </span>

            <span className="flex items-center gap-1.5">
              <span className="text-[#baff00]">❤️‍🔥</span>
              {card.caloriesBurned}kcal
            </span>

            <span className="flex items-center gap-1.5">
              <span className="text-[#baff00]">⭐</span>
              {card.rating}
            </span>
          </div>
        </div>

    

    
        <div className="flex shrink-0 items-center gap-5">
          <button
            type="button"
            className="rounded-full border border-[#39404c] px-5 py-2.5 text-[12px] font-medium text-white transition hover:bg-[#20242c]"
          >
           <Link href={`../card/${card.id}`}> View Details</Link>
          </button>

          <button
            type="button"
            className="flex items-center gap-2 rounded-full bg-[#baff00] px-5 py-2.5 text-[12px] font-bold text-black transition hover:bg-[#c7ff3d]"
          >
            <span>✓</span>
            Mark as Done
          </button>

          <button
            type="button"
            aria-label="Close"
            className="ml-1 text-[22px] leading-none text-[#5d6470] transition hover:text-white"
          >
            ×
          </button>
        </div>
      </div>
    </div>

            })
          ) : (
            <p className="text-center text-lg font-semibold">
               You did not save any exercise

            </p>
          )}
        </div>

        

      </div>
        </div>
      



    </div>
  );
};

export default ListedGym;
