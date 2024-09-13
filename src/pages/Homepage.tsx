import { FC } from "react";
import { Link } from "react-router-dom";

interface HomepageProps {
	isLoggedIn: boolean;
}

const Homepage: FC<HomepageProps> = ({ isLoggedIn }) => {
	return (
		<div className="bg-gray-50 dark:bg-gray-900 min-h-screen p-6 md:p-8">
			{/* Hero Section */}
			<section className="bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-blue-700 dark:to-indigo-800 text-white rounded-lg shadow-xl p-6 mb-6">
				<h1 className="text-3xl md:text-4xl font-bold mb-3">
					Welcome to Finance Tracker
				</h1>
				<p className="text-base md:text-lg mb-5">
					Discover the ultimate tool to manage your finances effortlessly. Track
					your spending, analyze your budget, and achieve financial freedom with
					ease.
				</p>
				<div className="flex flex-col sm:flex-row gap-4">
					{!isLoggedIn ? (
						<>
							<Link
								to="/signup"
								className="bg-blue-600 dark:bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 dark:hover:bg-blue-600 transition duration-300"
							>
								Get Started
							</Link>
							<Link
								to="/about"
								className="bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 border border-blue-400 dark:border-blue-600 px-4 py-2 rounded-lg shadow-md hover:bg-blue-50 dark:hover:bg-gray-700 transition duration-300"
							>
								Learn More
							</Link>
						</>
					) : (
						<Link
							to="/transactions"
							className="bg-blue-600 dark:bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 dark:hover:bg-blue-600 transition duration-300"
						>
							View Your Transactions
						</Link>
					)}
				</div>
			</section>

			{/* Features Section */}
			<section className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 mb-6">
				<h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
					Why Use Our Tool?
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					<div className="p-4 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm">
						<h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
							Track Spending
						</h3>
						<p className="text-sm text-gray-700 dark:text-gray-400">
							Easily monitor your daily expenses, categorize them, and keep an
							eye on where your money is going.
						</p>
					</div>
					<div className="p-4 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm">
						<h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
							Analyze Finances
						</h3>
						<p className="text-sm text-gray-700 dark:text-gray-400">
							Get detailed insights with interactive charts and reports to
							understand your financial patterns and make informed decisions.
						</p>
					</div>
					<div className="p-4 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm">
						<h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
							Secure & Private
						</h3>
						<p className="text-sm text-gray-700 dark:text-gray-400">
							Your data is protected with industry-leading security measures,
							ensuring your information remains confidential and safe.
						</p>
					</div>
					<div className="p-4 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm">
						<h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
							Custom Alerts
						</h3>
						<p className="text-sm text-gray-700 dark:text-gray-400">
							Set up custom notifications to stay on top of your budget and
							receive alerts for significant financial events.
						</p>
					</div>
					<div className="p-4 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm">
						<h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
							Easy Integration
						</h3>
						<p className="text-sm text-gray-700 dark:text-gray-400">
							Seamlessly integrate with your bank accounts and other financial
							tools for a comprehensive view of your finances.
						</p>
					</div>
					<div className="p-4 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm">
						<h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
							Budget Planning
						</h3>
						<p className="text-sm text-gray-700 dark:text-gray-400">
							Plan your budget effectively with customizable categories and
							spending limits to ensure you stay on track financially.
						</p>
					</div>
				</div>
			</section>

			<section className="bg-gray-100 dark:bg-gray-900 p-6 rounded-lg shadow-md mb-6">
				<h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
					What Our Users Say
				</h2>
				<div className="space-y-4">
					<blockquote className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm">
						<p className="text-base mb-2 text-gray-900 dark:text-gray-100">
							"This tool has completely transformed the way I manage my
							finances. It's user-friendly and incredibly insightful."
						</p>
						<cite className="block text-sm text-gray-600 dark:text-gray-400">
							- Haroon Ali
						</cite>
					</blockquote>
					<blockquote className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm">
						<p className="text-base mb-2 text-gray-900 dark:text-gray-100">
							"I love the detailed reports and easy-to-use interface. It has
							made tracking my expenses and budgeting a breeze."
						</p>
						<cite className="block text-sm text-gray-600 dark:text-gray-400">
							- Ali Hassan
						</cite>
					</blockquote>
				</div>
			</section>

			{!isLoggedIn && (
				<section className="text-center py-6">
					<h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
						Ready to Take Control?
					</h2>
					<p className="text-base mb-4 text-gray-700 dark:text-gray-300">
						Join us today and start managing your finances like a pro. Sign up
						now and take the first step towards financial clarity!
					</p>
					<Link
						to="/signup"
						className="bg-blue-600 dark:bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 dark:hover:bg-blue-600 transition duration-300"
					>
						Sign Up
					</Link>
				</section>
			)}
		</div>
	);
};

export default Homepage;
