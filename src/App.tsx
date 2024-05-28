import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import ProjectPage from './pages/ProjectPage';
import AboutPage from './pages/AboutPage';
import SkillsPage from './pages/SkillsPage';
import HomePage from './pages/HomePage';

const App: React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/" element={<Layout />}>
					<Route path="project" element={<ProjectPage />} />
					<Route path="about" element={<AboutPage />} />
					<Route path="skills" element={<SkillsPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
