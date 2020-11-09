import pluralize from 'pluralize';

// we use this to update single items to plural items 
// based on the number of units (s, es or ies)

export const generateUnit = (unit, amount) => {
  if (unit !== '-') {
    return pluralize(unit, parseInt(amount));
  } else {
    return '';
  }
};