import { FC, useCallback, useState } from "react";
import { Button } from "../ui/button";
import { Moon, Sun } from "lucide-react";

const DarkModeToggle: FC = () => {
	const [isDarkMode, setIsDarkMode] = useState(
		document.documentElement.classList.contains("dark")
	);

	const toggleDarkMode = useCallback(() => {
		document.documentElement.classList.toggle("dark");
		setIsDarkMode(document.documentElement.classList.contains("dark"));
	}, []);

	return (
		<Button
			variant="ghost"
			aria-label="Toggle Dark Mode"
			onClick={toggleDarkMode}
		>
			{isDarkMode ? (
				<Sun size={20} className="text-gray-400" />
			) : (
				<Moon size={20} className="text-gray-700" />
			)}
		</Button>
	);
};

export default DarkModeToggle;
