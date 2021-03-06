/* @flow */

require('./styles.css');

import React, {Component, PropTypes} from 'react';

class Icon extends Component {
  render(): ReactElement {
    var {
      icon,
      ...props,
    } = this.props;

    if (icon === 'innovation-camp') icon = 'placeholder';

    return (
      <div className="Icon" {...props}>
        <div className="Icon-image">
          <img src={`/public/images/${icon}.svg`} />
        </div>
      </div>
    );
  }
}

Icon.ICONS = [
  'engineering',
  'internet-of-things',
  'placeholder',
  'production',
  'proof-of-concept',
  'rapid-innovation',
  'support',
];

Icon.propTypes = {
  icon: PropTypes.oneOf(Icon.ICONS),
};

export default Icon;

