"use client";

import React from "react";
import { motion } from "framer-motion";
import { IconType } from "react-icons";

interface SkillItemProps {
  name: string;
  level: number;
  icon: IconType;
  color: string;
}

export default function SkillItem({
  name,
  level,
  icon: Icon,
  color,
}: SkillItemProps) {
  return (
    <div className="mb-6">
      <div className="flex items-center mb-2">
        <Icon className="mr-2 text-xl" style={{ color }} />
        <span className="mr-auto font-medium">{name}</span>
        <span className="text-sm text-secondary">{level}%</span>
      </div>
      <div className="w-full h-2 bg-gray-200 rounded-full dark:bg-gray-700">
        <div
          className="h-2 rounded-full bg-primary"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
}
