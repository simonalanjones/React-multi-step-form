import React from 'react';
import AbstractFormElement from './forms/elements/abstractFormElement';

const Container = ({ element, index }) => {
	if (Array.isArray(element)) {
		return (
			<div className={`grid grid-cols-2 gap-8 pb-4`} key={index}>
				{element.map((item, index) => {
					return (
						<div key={index}>
							<AbstractFormElement item={item} />
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
