"use client";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface CustomScrollbarProps {
  children: ReactNode;
  className?: string;
  size?: "default" | "thin";
  showOnHover?: boolean;
}

export const CustomScrollbar = ({
  children,
  className,
  size = "default",
  showOnHover = false,
}: CustomScrollbarProps) => {
  return (
    <div
      className={cn(
        "custom-scrollbar",
        size === "thin" && "custom-scrollbar-thin",
        showOnHover && "custom-scrollbar-hover",
        className
      )}
    >
      {children}
    </div>
  );
};

// Additional CSS classes for the custom scrollbar component
const additionalStyles = `
  .custom-scrollbar-thin::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  
  .custom-scrollbar-thin::-webkit-scrollbar-thumb {
    border-radius: 3px;
    border: 1px solid #1a1a1a;
  }
  
  .custom-scrollbar-hover::-webkit-scrollbar {
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  .custom-scrollbar-hover:hover::-webkit-scrollbar {
    opacity: 1;
  }
  
  .custom-scrollbar-hover::-webkit-scrollbar-thumb {
    opacity: 0.7;
    transition: opacity 0.3s ease;
  }
  
  .custom-scrollbar-hover:hover::-webkit-scrollbar-thumb {
    opacity: 1;
  }
`;

// You can add this to your globals.css if you want to use these additional classes
