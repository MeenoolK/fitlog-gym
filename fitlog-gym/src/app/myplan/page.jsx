"use client";

import { useContext } from "react";
import { GymContext } from "../contex/GymContex";
import GymCard from "../card/GymCard";

const ListedGym = () => {
  const { todayPlan, saveLater } = useContext(GymContext);

  return (
    <div>
      <div className="tabs tabs-lift">





        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label={`Today's Plan (${todayPlan.length})`}
          defaultChecked
        />

        <div className="tab-content bg-base-100 border-base-300 ">
          {todayPlan.length > 0 ? (
            todayPlan.map((card) => {
             return <GymCard key={card.id} cardGet={card} />
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

        <div className="tab-content bg-base-100 border-base-300 p-6">
          {saveLater.length > 0 ? (
            saveLater.map((card) => {
             return  <GymCard key={card.id} cardGet={card} />
            })
          ) : (
            <p className="text-center text-lg font-semibold">
              You did not save any exercise
            </p>
          )}
        </div>

      </div>
    </div>
  );
};

export default ListedGym;
