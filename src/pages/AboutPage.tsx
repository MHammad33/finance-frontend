import { FC } from "react";

const AboutPage: FC = () => {
	return (
		<div className="container mx-auto px-4 py-8 md:px-8">
			{/* Header Section */}
			<div className="text-center mb-12">
				<h1 className="text-5xl font-extrabold text-gray-900 dark:text-gray-100 mb-6">
					About Us
				</h1>
				<p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
					Welcome to Finance Tracker, where managing your personal finances
					becomes a breeze. Our platform is designed to simplify your financial
					journey by providing intuitive tools for budgeting, expense tracking,
					and financial planning. Whether you're looking to save for a future
					goal or simply keep track of your spending, we've got you covered.
				</p>
			</div>

			{/* Mission and Vision Sections */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
				{/* Mission Section */}
				<div className="bg-gradient-to-r from-blue-100 to-green-100 dark:from-blue-800 dark:to-green-800 shadow-lg rounded-lg p-8 flex flex-col justify-center">
					<h2 className="text-4xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
						Our Mission
					</h2>
					<p className="text-gray-700 dark:text-gray-400">
						At Finance Tracker, our mission is to empower you with the knowledge
						and tools needed to achieve financial success. We are committed to
						providing a user-friendly platform that offers detailed insights,
						actionable advice, and easy-to-use features. Our goal is to make
						financial management accessible and effective for everyone.
					</p>
				</div>

				{/* Vision Section */}
				<div className="bg-gradient-to-r from-yellow-100 to-red-100 dark:from-yellow-800 dark:to-red-800 shadow-lg rounded-lg p-8 flex flex-col justify-center">
					<h2 className="text-4xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
						Our Vision
					</h2>
					<p className="text-gray-700 dark:text-gray-400">
						Our vision is to create a world where financial literacy is
						universal and financial tools are accessible to all. We strive to
						innovate continuously, enhancing our platform with features that
						cater to diverse financial needs. We aim to be a trusted partner in
						your journey towards financial well-being.
					</p>
				</div>
			</div>

			{/* Contact Section */}
			<div className="bg-gray-100 dark:bg-gray-800 shadow-lg rounded-lg p-8 text-center">
				<h2 className="text-4xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
					Get In Touch
				</h2>
				<p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
					We value your feedback and are here to assist you with any questions
					or concerns. Please{" "}
					<a
						href="mailto:mhammadafzal3333@gmai.com"
						className="text-blue-600 dark:text-blue-400 hover:underline"
					>
						contact us
					</a>{" "}
					for further queries. We look forward to hearing from you and helping
					you make the most of our platform.
				</p>
				<p className="text-sm text-gray-500 dark:text-gray-400">
					For partnership inquiries, collaborations, or other business-related
					matters, please email us at{" "}
					<a
						href="mailto:mhammadafzal3333@gmai.com"
						className="text-blue-600 dark:text-blue-400 hover:underline"
					>
						mhammadafzal3333@gmai.com
					</a>
					.
				</p>
			</div>
		</div>
	);
};

export default AboutPage;
