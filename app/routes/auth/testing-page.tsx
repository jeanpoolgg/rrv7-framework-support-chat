import { Link } from "react-router";

const TestingPage = () => {
	return (
		<div>
			<h1>Testing Page</h1>
			<Link to="/auth/login">Login</Link>
		</div>
	);
};

export default TestingPage;
