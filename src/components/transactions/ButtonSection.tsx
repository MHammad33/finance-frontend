import React from "react";
import { Button } from "../ui/button";

interface ButtonSectionProps {
  onToggle(): void;
  isVisible: boolean;
}

const ButtonSection: React.FC<ButtonSectionProps> = ({
  onToggle,
  isVisible
}) => {
  return (
    <div className="w-full text-right">
      <Button onClick={onToggle}>
        {isVisible ? "Cancel" : "Add"} Transaction
      </Button>
    </div>
  );
};
export default ButtonSection;
