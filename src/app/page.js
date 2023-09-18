import Image from "next/image";

export default function Home() {
    return (
        <main className="flex h-screen min-w-full relative bg-black">
            <img
                src="./background-home-desktop.jpg"
                alt="background image of space"
                className=" object-fill absolute pointer-events-none z-0"
            />
            <div className="text-5xl text-white relative">lmao</div>
        </main>
    );
}
