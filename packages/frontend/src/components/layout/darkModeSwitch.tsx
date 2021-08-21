import React, { useState, useCallback } from 'react';
import { styled } from 'tsstyled';
import { theme } from '@devshare/common';

interface SwitchProps {
    initialState: boolean;
    stateChangeCallback: (state: boolean) => void;
}

const Switch: React.FC<SwitchProps> = ({
    initialState,
    stateChangeCallback,
}) => {
    const { useTheme } = theme;
    const [state, setState] = useState(initialState);

    const onClick = useCallback(() => {
        setState(currState => {
            stateChangeCallback(!currState);
            return !currState;
        });
    }, [stateChangeCallback]);

    const SwitchContainer = styled('div').use(() => ({
        theme: useTheme(), // eslint-disable-line
    }))`
        position: relative;
        width: 2rem;
        height: 1rem;
        border-radius: 0.75rem;
        border: 0.25rem solid ${props => props.theme.primary};
        background-color: ${props => props.theme.primary};
        transition: background-color 1s ease-in-out;
        z-index: 0;
    `;

    const SwitchToggle = styled('div').use(() => ({
        theme: useTheme(), // eslint-disable-line
        style: {
            transition: 'transform 1s ease-in-out',
            transform: state ? 'translateX(1rem)' : undefined,
        },
    }))`
        position: absolute;
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
        background-color: ${props => props.theme.backgroundColor};
        z-index: 2;
        top: 0;
        left: 0;
        transform: translateX(0);
        transition: transform 1s ease-in-out;
    `;

    return (
        <SwitchContainer onClick={onClick} tabIndex={0} role="switch">
            <SwitchToggle />
        </SwitchContainer>
    );
};

export default Switch;
