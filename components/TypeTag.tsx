import React from "react";
import Tag, { TagColor } from "./Tag";

const TypeColors: Record<string, TagColor> = {
  FIRE: "yellow",
  WATER: "blue",
  GRASS: "green",
  BUG: "green",
  BUGS: "green",
  POISON: "purple",
  FLYING: "gray",
  ELECTRIC: "yellow",
  GROUND: "yellow",
  FAIRY: "primary",
  NORMAL: "gray",
};

const TypeTag = ({ name }: { name: string }) => {
  const color = TypeColors[name.toUpperCase()] || "default";
  return <Tag color={color}>{name}</Tag>;
};

export default TypeTag;
