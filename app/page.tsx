"use client";
import dynamic from "next/dynamic";

const HomePage = dynamic(() => import("@/components/home/Home"), {
  ssr: false,
});

export default function Home() {
  return (
    <div>
      <HomePage />
    </div>
  );
}
