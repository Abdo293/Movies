import { motion } from "framer-motion";
interface SectionHeaderProps {
  heading: string;
}
export const SectionHeader = ({ heading }: SectionHeaderProps) => {
  return (
    <div className="movies">
      <div className="flex items-center justify-center h-full">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[60px] font-bold text-white max-md:text-[50px]"
        >
          {heading}
        </motion.h2>
      </div>
    </div>
  );
};
