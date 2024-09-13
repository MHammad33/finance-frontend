import { FC } from "react";

const Footer: FC = () => {
	return (
		<footer className="bg-gray-800 text-gray-200 py-8">
			<div className="container mx-auto px-4">
				<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
					<div className="flex-1">
						<h3 className="text-xl font-semibold mb-2">About Us</h3>
						<p className="text-gray-400">
							We strive to provide the best tools for tracking your finances.
							Our platform offers intuitive features to help you manage your
							money effectively.
						</p>
					</div>

					<div className="flex-1">
						<h3 className="text-xl font-semibold mb-2">Quick Links</h3>
						<ul className="space-y-2">
							<li>
								<a href="/" className="text-gray-400 hover:text-white">
									Home
								</a>
							</li>
							<li>
								<a href="/about" className="text-gray-400 hover:text-white">
									About
								</a>
							</li>
							<li>
								<a
									href="/transactions"
									className="text-gray-400 hover:text-white"
								>
									Transactions
								</a>
							</li>
						</ul>
					</div>

					<div className="flex-1">
						<h3 className="text-xl font-semibold mb-2">Contact Us</h3>
						<p className="text-gray-400">
							For any inquiries, please email us at{" "}
							<a
								href="mailto:mhammadafzal3333@gmail.com"
								className="text-blue-400 hover:underline"
							>
								mhammadafzal3333@gmail.com
							</a>
						</p>
					</div>
				</div>

				<div className="text-center mt-8 border-t border-gray-700 pt-4">
					<p className="text-gray-400">
						&copy; {new Date().getFullYear()} M Hammad Afzal. All rights
						reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
