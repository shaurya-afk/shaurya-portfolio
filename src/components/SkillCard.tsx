import React from "react";
import { EvervaultCard, Icon } from "./ui/evervault-card";

export function SkillCard({
  skillName,
  icon,
  category,
}: {
  skillName: string;
  icon: React.ReactNode;
  category?: string;
}) {
  return (
    <article className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]">
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <EvervaultCard text={skillName} icon={icon}/>
      
      {category && (
        <div className="mt-2 text-xs text-neutral-500 dark:text-neutral-400">
          <span className="sr-only">Category: </span>
          {category}
        </div>
      )}
    </article>
  );
}
