import { Link } from 'react-router-dom';

import Icon from '../../components/icon';

import { HOME } from '../../constants/routes';

import './index.scss';

const NotFound = () => {
	return (
		<div className='not-found'>
			<Icon classes='not-found__icon' name='notFound' />
			<h2>
				Go back to the{' '}
				<Link className='not-found__link' to={HOME}>
					home page
				</Link>
			</h2>
		</div>
	);
};

export default NotFound;
