import { FC } from "react";
import { Footer, Header } from ".";
import { Outlet } from "react-router-dom";

interface LayoutProps {}

const Layout: FC<LayoutProps> = ({}) => {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
};

export default Layout;
