import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { Feed, VideoDetail, ChannelDetail, SearchFeed } from '../components';

const routes = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/',
				element: <Feed />,
			},
			{
				path: '/video/:id',
				element: <VideoDetail />,
			},
			{
				path: '/channel/:id',
				element: <ChannelDetail />,
			},
			{
				path: '/search/:keyword',
				element: <SearchFeed />,
			},
		],
	},
]);

export default routes;
