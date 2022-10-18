import React from 'react';
import AbstractFormElement from './forms/elements/abstractFormElement';

const Container = ({ element, index }) => {
	if (Array.isArray(element)) {
		return (
			<div className={`pb-4 columns-${element.length} gap-8`} key={index}>
				{element.map((item, index) => {
					return (
						<div>
							<AbstractFormElement item={item} key={index} />
						</div>
					);
				})}
			</div>
		);
	} else {
		return (
			<div className={`columns-1 gap-6 pb-5`} key={index}>
				<AbstractFormElement item={element} />
			</div>
		);
	}
};

export const MemoizedContainer = React.memo(Container);
