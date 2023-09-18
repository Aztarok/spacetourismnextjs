import './globals.css'
import { inter } from "./fonts";

export const metadata = {
	title: "Space Tourism",
	description: "Made by Aztarok",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
