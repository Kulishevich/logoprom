"use client";
import React, { useState } from "react";
import { FeedbackPopup } from "../feedback-popup";
import { Button } from "@/shared/ui/button";
import { PhoneIcon } from "@/shared/assets/icons";

export const HeaderMobileFeedbackPopup = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  return (
    <FeedbackPopup isOpen={isPopupOpen} setIsOpen={setIsPopupOpen}>
      <Button variant="mobile_nav">
        <PhoneIcon />
      </Button>
    </FeedbackPopup>
  );
};
