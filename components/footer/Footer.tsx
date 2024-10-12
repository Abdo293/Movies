import { FirstSection } from "./FirstSection";
import { MidSection } from "./MidSection";
import { LastSection } from "./LastSection";

export const Footer = () => {
  return (
    <div className="footer z-10">
      <FirstSection />

      <MidSection />

      <LastSection />
    </div>
  );
};
