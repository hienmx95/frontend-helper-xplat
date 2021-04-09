import React from 'react';
import { Icon } from 'antd';
import PropTypes from 'prop-types';

const IconSvg = (width, height) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={width || 16} height={height || 16} viewBox="0 0 13.019 16">
        <g id="icon" transform="translate(-11.3 -2.5)">
            <path id="Path" d="M21.759,7.906V5.127A2.631,2.631,0,0,0,19.132,2.5H16.5a2.631,2.631,0,0,0-2.627,2.627V7.906A2.617,2.617,0,0,0,11.3,10.517v5.373A2.613,2.613,0,0,0,13.911,18.5h7.8a2.613,2.613,0,0,0,2.611-2.611V10.517A2.6,2.6,0,0,0,21.759,7.906ZM16.5,4.2h2.627a.942.942,0,0,1,.943.943V7.923H15.561v-2.8A.927.927,0,0,1,16.5,4.2Zm6.131,11.688a.935.935,0,0,1-.926.926h-7.8a.935.935,0,0,1-.926-.926V10.517a.935.935,0,0,1,.926-.926h7.8a.935.935,0,0,1,.926.926Z" fill="#5c6a82"/>
            <path id="Path-2" data-name="Path" d="M38.108,51.8a2.408,2.408,0,1,0,2.408,2.408A2.408,2.408,0,0,0,38.108,51.8Zm0,3.116a.707.707,0,1,1,.707-.707A.712.712,0,0,1,38.108,54.916Z" transform="translate(-20.291 -40.997)" fill="#5c6a82"/>
        </g>
    </svg>
);

const LockIconComponent = props => <Icon component={() => IconSvg(props.width, props.height)} {...props} />;

LockIconComponent.propTypes = {
  type: PropTypes.string,
};

LockIconComponent.defaultProps = {
  type: '',
};

export default LockIconComponent;
