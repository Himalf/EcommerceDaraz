// src/utils/getPlugin.ts
"use client";
import Autoplay from "embla-carousel-autoplay";
import React from "react";

export function getPlugin() {
  return React.useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));
}
