/* @refresh reload */
import { render } from 'solid-js/web';

import FeatherIcon from './FeatherIcon';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
	throw new Error(
		'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
	);
}

const App = () => {
	return (
		<div style="margin: 100px auto; width: 500px;">
			<div style="position: relative;
				box-sizing: border-box;
				padding: 24px;
				border: 1px solid #d1d1d1;
				border-radius: 5px;
				color: #666666;
				display: flex;
				align-items: center;
				justify-content: center;
				flex-gap: 2px;">
				<FeatherIcon
					height={24}
					width={24}
					fill="none"
					stroke="currentColor"
					strokeLineCap="round"
					strokeLineJoin="round"
					strokeWidth={2}
					type="activity"/>
				<p style="margin-left: 4px;">Example of feather icon</p>
			</div>
		</div>
	);
};

render(() => <App />, root!);
