import type { Component, JSX } from 'solid-js';
import type { FeatherAttributes } from 'feather-icons';

import { mergeProps } from 'solid-js';
import * as feather from 'feather-icons';

const SolidFeather: Component<FeatherAttributes> = (props: FeatherAttributes) => {
	const iconType = props.type &&
					props.type in feather.icons ?
						feather.icons[props.type as keyof typeof feather.icons] :
						undefined;
	
	/**
	 * Icon type is required to render the icon.
	 * If the icon type is not found, return an empty fragment.
	 * This is to prevent the icon from being rendered with an empty string.
	 */
	if (!iconType) {
		return <></>;
	}

	const data:FeatherAttributes = mergeProps(
		{
			'viewBox' : '0 0 24 24',
			'height' : 24,
			'width' : 24,
			'fill' : 'none',
			'stroke' : 'currentColor',
			'stroke-line-cap' : 'round' as 'round' | 'butt' | 'square' | 'inherit',
			'stroke-line-join' : 'round' as 'round' | 'miter' | 'bevel' | 'inherit',
			'stroke-width' : 2
		},
		props
	);

	return (
		<svg
			innerHTML={iconType.contents}
			{...data} />
	);
};

export default SolidFeather;
