import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import { Navbar } from './components';

export default function App() {
	return (
		<Box sx={{ backgroundColor: '#000' }}>
			<Navbar />
			<Outlet />
		</Box>
	);
}
