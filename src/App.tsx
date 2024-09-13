import AppRoutes from "./routes/AppRoutes";
import LoadingOverlay from "./components/LoadingOverlay";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
	return (
		<>
			<LoadingOverlay>
				<AppRoutes />
				<ToastContainer />
			</LoadingOverlay>
		</>
	);
}

export default App;
