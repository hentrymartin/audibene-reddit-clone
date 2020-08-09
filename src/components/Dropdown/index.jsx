import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon';
import DropdownIcon from '../../images/down-arrow.svg';

import { useStyles } from './Dropdown.styles';

/**
 * Generic dropdown component. Gets the list of option and render it.
 * When user clicks on the option, it is given back to the parent component as selected item.
 * @param {*} param0 
 */
const Dropdown = ({ options, defaultOption, onSelect: onSelectItem, label }) => {
  const styles = useStyles();
  const [selectedValue, setSelectedValue] = useState({});
  const [showDropdown, setShowDropdown] = useState(false);

  const onSelect = (item) => {
    setSelectedValue(item);
    setShowDropdown(false);
    if (onSelectItem) {
      onSelectItem(item);
    }
  };

  const getTitle = () => {
    return selectedValue.label || defaultOption.label;
  };

  const onOpenDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className={styles.dropdownWrapper}>
      <div className={styles.labelWrapper}>{label}</div>
      <div className={styles.dropdownTitle} onClick={onOpenDropdown} data-testid="dropdown-value">
        <Icon className={styles.dropdownIcon} defaultSrc={DropdownIcon} alt="dropdown-arrow" />
        {getTitle()}
      </div>
      {
        showDropdown && (
          <div className={styles.list} data-testid="dropdown-list">
            {
              options.map(option => (
                <div
                  key={option.value}
                  data-testid="dropdown-item"
                  onClick={() => onSelect(option)}
                  className={styles.label}>
                    {option.label}
                  </div>
              ))
            }
          </div>
        )
      }
    </div>
  );
};

Dropdown.defaultProps = {
  options: [],
  defaultOption: {},
  label: '',
  onSelect: () => {},
};

const option = PropTypes.shape({
  label: PropTypes.string,
  value: PropTypes.string,
  onSelect: PropTypes.func,
});

Dropdown.propTypes = {
  options: PropTypes.arrayOf(option).isRequired,
  defaultOption: option,
  onSelect: PropTypes.func,
  label: PropTypes.string,
};

export default Dropdown;
