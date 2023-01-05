import styled from 'styled-components';

interface IMarker {
  show: boolean
}

export const ControlsContainer = styled.div`
  display: flex;
  padding: 0;
  margin: 0;
  height: 100%;
`;

export const Marker = styled.span<IMarker>`
  display: ${props => props.show ? 'flex' : 'none'}};
  position: absolute;
  width: 8px;
  height: 8px;
  left: 41px;
  top: 9px;
  background: #02E631;
  border-radius: 50%;
`;

export const ControlButton = styled.button`
  display: flex;
  padding: 16px;
  margin: 0;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  border: none;
  transition: background 0.3s ease-in-out;
  background: none;
  &:hover,
  &:focus {
    background: rgba(255, 255, 255, 0.1);
  }
  &:active {
    background: rgba(255, 255, 255, 0.35);
  }
`;
