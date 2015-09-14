require('./styles.css');
import React from 'react';

class Logo extends React.Component {
  render(): ?ReactElement {
    var {
      color,
      className = '',
      ...props
    } = this.props;

    className = className + ' Logo';

    return (
      <svg {...props} className={className} viewBox="0 0 250 207" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <title>Skookum</title>
        <description></description>
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <path fill={color || '#F16521'} className="Logo-path" d="M202.427,207 L129.432,207 C128.194,207 127.174,205.978 127.174,204.742 L127.149,89.873 C127.149,89.378 127.756,89.321 127.834,89.827 L133.733,128.916 C135.774,142.166 145.631,159.011 156.18,167.277 L203.393,204.21 C205.346,205.742 204.909,207 202.427,207" />
          <path fill={color || '#F16521'} className="Logo-path" d="M114.504,89.827 L108.588,128.916 C106.564,142.166 96.706,159.011 86.158,167.277 L38.945,204.21 C36.985,205.742 37.418,207 39.9,207 L112.898,207 C114.133,207 115.156,205.978 115.156,204.742 L115.178,89.873 C115.178,89.378 114.571,89.321 114.504,89.827" />
          <path fill={color || '#FAAB18'} className="Logo-path" d="M96.774,127.107 L102.6,88.602 C102.675,88.064 101.971,87.75 101.746,88.39 L94.559,108.521 C91.377,117.345 81.891,126.49 72.973,129.363 L3.131,151.751 C1.823,152.171 1.346,153.466 2.095,154.632 L27.546,194.769 C28.299,195.937 29.793,196.187 30.871,195.333 L78.791,157.845 C86.961,151.458 95.209,137.367 96.774,127.107" />
          <path fill={color || '#FAAB18'} className="Logo-path" d="M239.201,151.751 L169.365,129.363 C160.437,126.49 150.958,117.345 147.78,108.521 L140.592,88.39 C140.364,87.75 139.66,88.064 139.749,88.602 L145.562,127.107 C147.129,137.367 155.372,151.458 163.547,157.845 L211.461,195.333 C212.544,196.187 214.042,195.937 214.781,194.769 L240.24,154.632 C240.981,153.466 240.51,152.171 239.201,151.751" />
          <path fill={color || '#FFDD2E'} className="Logo-path" d="M242.374,137.009 L161.073,1.769 C160.493,0.792 159.078,0 157.943,0 L84.889,0 C83.766,0 82.362,0.803 81.777,1.769 L0.567,136.98 C-0.673,139.054 0.189,140.144 2.488,139.404 L69.307,117.97 C74.807,116.201 81.352,109.892 83.306,104.47 L110.719,28.464 C111.135,27.296 112.494,26.333 113.74,26.333 L128.677,26.333 C129.913,26.333 131.282,27.296 131.698,28.464 L159.103,104.47 C161.065,109.892 167.602,116.195 173.096,117.953 L240.456,139.439 C242.756,140.167 243.621,139.068 242.374,137.009" />
          <path fill={color || '#FFFFFF'} transform="scale(0.75) translate(-320, -200)" stroke="0" d="M590.5,246.3c0-9.2,7.3-16.8,16.2-16.8s16.2,7.6,16.2,16.8s-7.3,16.8-16.2,16.8 S590.5,255.5,590.5,246.3z M586,246.3c0,11.8,9.3,21.3,20.7,21.3c11.5,0,20.7-9.5,20.7-21.3c0-11.8-9.3-21.3-20.7-21.3 C595.3,225,586,234.5,586,246.3z M610.2,242c0,3.2-2.9,3.4-6.9,3.4v-6.6C608.4,238.8,610.2,239.1,610.2,242z M616.8,258 l-6.7-9.5c3-1,4.6-3.8,4.6-6.6c0-4.8-2.8-6.8-11.2-6.8h-4.6V258h4.4v-9.3h1.5l6.7,9.3H616.8z"/>
        </g>
      </svg>
    );
  }
}

export default Logo;

