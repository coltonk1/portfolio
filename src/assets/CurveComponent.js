import * as React from 'react';
const SvgComponent = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        height={200}
        preserveAspectRatio="none"
        viewBox="0 0 1440 200"
        fill="currentColor"
        {...props}
    >
        <path d="M0 100c360 100 1080-100 1440 0v100H0Z" className="!text-brand-white" />
    </svg>
);
export default SvgComponent;
