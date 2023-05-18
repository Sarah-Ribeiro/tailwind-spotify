import Image from "next/image";

export function Recommended() {
  return (
    <a
      href="#"
      className="bg-white/5 p-4 rounded-md hover:bg-white/10 flex flex-col gap-2"
    >
      <Image
        src="/imagine-dragons.jpg"
        width={120}
        height={120}
        alt="foto do album"
        className="w-full"
      />
      <strong className="font-semibold mt-2">Daily Mix 1</strong>
      <span className="text-sm text-zinc-400">Imagine Dragons and more</span>
    </a>
  );
}
