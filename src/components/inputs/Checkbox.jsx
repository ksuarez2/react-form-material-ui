import React, { PropTypes, Component } from 'react';
import MaterialCheckbox from 'material-ui/Checkbox';

export default function Checkbox(props) {
  const { value, error, onChange, ...rest } = props;
  const checked = Boolean(value);

  return (
    <MaterialCheckbox
      checked={checked}
      onCheck={(e, value) => onChange(value, e)}
      {...rest}
    />
  );
}

Checkbox.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  error: PropTypes.string,
  onChange: PropTypes.func
};
