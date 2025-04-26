import type { Component, JSX } from 'solid-js';
import * as feather from 'feather-icons';

interface FeatherIconProps {
	height?: number;
	width?: number;
	type: keyof typeof feather.icons;
	fill?: string;
	stroke?: string;
	strokeLineCap?: 'butt' | 'round' | 'square' | 'inherit';
	strokeLineJoin?: 'miter' | 'round' | 'bevel' | 'inherit';
	strokeWidth?: number;
}

const style: JSX.CSSProperties = {
	'box-sizing': 'inherit',
	'vertical-align': 'text-bottom'
};

const FeatherIcon: Component<FeatherIconProps> = (props) => {
	const icon = feather.icons[props.type];

	return (
		<svg
			class="feather-icon"
			viewBox="0 0 24 24"
			width={props.width ?? 24}
			height={ props.width  ?? 24}
			fill={props.fill ?? 'none'}
			stroke={props.stroke}
			stroke-width={props.strokeWidth ?? 2}
			stroke-linecap={props.strokeLineCap ?? 'round'}
			stroke-linejoin={props.strokeLineJoin ?? 'round'}
			innerHTML={icon.contents}
			style={style}/>
	);
};

export default FeatherIcon;
