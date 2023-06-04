import { Kumbh_Sans } from "next/font/google";
import "@/app/globals.css";

const kumbhSans = Kumbh_Sans({
	weight: ["400", "700"],
	subsets: ["latin"],
});

export const metadata = {
	title: "Sneakers",
	description: "The only sneaker shop for sneaker enthusiasts!",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={kumbhSans.className}>{children}</body>
		</html>
	);
}
