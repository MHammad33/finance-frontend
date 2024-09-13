import { FC, useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import MobileNav from "./MobileNav";
import DarkModeToggle from "./DarkModeToggle";
import DesktopNav from "./DesktopNav";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = useCallback(() => {
		setIsMenuOpen((prev) => !prev);
	}, []);

	return (
		<header
			className={`flex justify-between items-center p-4 transition-colors duration-300 bg-white text-gray-700 dark:bg-gray-900 dark:text-white shadow-md`}
		>
			<div className="text-lg font-semibold">
				<Link to="/">Finance Tracker</Link>
			</div>

			<button
				className="md:hidden block text-inherit"
				onClick={toggleMenu}
				aria-label="Toggle Menu"
			>
				<Menu size={24} />
			</button>

			<MobileNav
				isMenuOpen={isMenuOpen}
				closeMenu={() => setIsMenuOpen(false)}
			/>

			<div className="hidden md:flex items-center space-x-2">
				<DesktopNav />
				<DarkModeToggle />
			</div>
		</header>
	);
};

export default Header;
