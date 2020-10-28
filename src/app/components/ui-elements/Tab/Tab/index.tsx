import React from 'react';
import './index.styles.scss';

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
