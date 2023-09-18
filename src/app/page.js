import ColoredLine from "@/components/ColoredLine";

export default function Home(font) {
	return (
		<main className="min-w-full min-h-screen relative bg-red-50 flex">
			<img
				src="./background-home-desktop.jpg"
				alt="background image of space"
				className="object-fill absolute pointer-events-none z-0 max-h-screen min-w-full"
			/>

			<div className="flex flex-col w-screen text-white relative">
				<div className="flex justify-between items h-[10rem] select-none">
					<div>
						<img
							src="./logo.svg"
							alt="logo"
							className="pl-[5rem] pt-[4rem] pointer-events-none"
						/>
					</div>

					<div className="flex bg-blue-800 mt-[2rem] justify-center aboslute items-center gap-[3rem] px-[14rem]">
						<span className="py-[2rem]">00 HOME</span>
						<span>01 DESTINATION</span>
						<span>02 CREW</span>
						<span>03 TECHNOLOGY</span>
					</div>
				</div>
				<ColoredLine />

				<div className="">
					<div>
						<div>
							SO, YOU WANT TO TRAVEL TO <span>SPACE</span>
						</div>
						<div>
							<p>
								Let's face it; if you want to go to space, you
								might as well genuinely go to outer space and
								not hover kind of on the edge of it. Well sit
								back, and relax because we'll give you a truly
								out of this world experience!
							</p>
						</div>
					</div>
					<div></div>
				</div>
			</div>
		</main>
	);
}
