import { Albuns } from "@/components/Albuns";
import { Buttons } from "@/components/Buttons";
import { Footer } from "@/components/Footer";
import { Recommended } from "@/components/Recommeded";
import { Sidebar } from "@/components/Sidebar";
import { Play } from "lucide-react";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
          <Buttons />

          <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <Albuns />
            <Albuns />
            <Albuns />
            <Albuns />
            <Albuns />
            <Albuns />
          </div>

          <h2 className="font-semibold text-2xl mt-10">
            Made for Sarah Ribeiro
          </h2>

          <div className="grid grid-cols-5 gap-6 mt-4">
            <Recommended />
            <Recommended />
            <Recommended />
            <Recommended />
            <Recommended />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
