'use client'

import RemainingDays from "@/app/components/RemainingDays";
import ProgressBar from "@/components/ProgressBar";
import { StringUtils } from "@/utils/stringUtil";
import { Icon } from "@iconify/react/dist/iconify.js";

type ActionCardProps = {
  action: Action;
};

const SolutionVoted = ({ action }: ActionCardProps) => {
  const { author, amountCollected, totalGoal, finalDate } = action;

  return (
    <div className="flex flex-col gap-8 rounded-[10px] overflow-hidden shadow-md w-full max-w-[420px] min-w-[320px] py-8 px-6">
      <div className="flex flex-col">
        <h1 className="text-6xl font-bold">
          R$ <span>{totalGoal}</span>
        </h1>
        <p className="text-base">
          Apoiados por <strong>3</strong> pessoas
        </p>
      </div>
      <ProgressBar
        percent={(amountCollected ?? 0) / (totalGoal ?? 0)}
        secondElement={
          <RemainingDays finalDate={`${finalDate}`} label="Restantes" />
        }
      />
      {/*Respect the code, don't just copy-paste. Understand and contribute! ass: lrauane*/}
      <div className="flex flex-col justify-center items-center gap-2">
        <div className="flex gap-6">
          <p className="text-xl font-bold">
            Meta R$ <span>{totalGoal}</span>
          </p>
          <Icon icon="uil:money-bill" />
        </div>
        <div className="text-sm text-sub">
          Por: {StringUtils.capitalizeFirstCharacterInName(author ?? "")}
        </div>
      </div>
    </div>
  );
};

export default SolutionVoted;
