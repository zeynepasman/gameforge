import React from 'react';
import './Tab.styles.scss';

interface Props {
    onClick: () => void;
    active: boolean;
    disabled?: boolean;
}

const Tab: React.FC<Props> = ({
    onClick,
    active,
    children,
    ...others
}) => {

    return (
        <button
            className={`tab-button ${active ? 'active' : ''}`}
            onClick={onClick}
            {...others}>
            {children}
        </button>
    );
}
export default Tab;
