"use client";

import { motion } from "framer-motion";
import { IconType } from "react-icons";

type SkillItemProps = {
  name: string;
  level: number; // 0-100
  icon: IconType;
  color?: string;
};

export default function SkillItem({
  name,
  level,
  icon: Icon,
  color = "#0d6efd",
}: SkillItemProps) {
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <Icon style={{ color }} size={20} />
          <span className="font-medium">{name}</span>
        </div>
        <span className="text-sm text-secondary">{level}%</span>
      </div>

      <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </div>
    </div>
  );
}
