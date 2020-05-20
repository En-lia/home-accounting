import localizeFilter from '@/filters/localize.filter';

export const sortData = (data, options) => {
  if (!options) {
    return data;
  }
  const {key, sort, type} = options;
  if (type === 'number') {
    if (sort === 'down-up') {
      return data.sort((a, b) => a[key] - b[key]);
    } else {
      return data.sort((a, b) => b[key] - a[key]);
    }
  } else if (type === 'date') {
    if (sort === 'down-up') {
      return data.sort((a, b) => new Date(a[key]) - new Date(b[key]));
    } else {
      return data.sort((a, b) => new Date(b[key]) - new Date(a[key]));
    }
  } else {
    if (sort === 'down-up') {
      return data.sort((a, b) => {
        if (a[key] > b[key]) return 1;
        if (a[key] < b[key]) return -1;
        return 0;
      });
    } else {
      return data.sort((a, b) => {
        if (a[key] < b[key]) return 1;
        if (a[key] > b[key]) return -1;
        return 0;
      });
    }
  }
};

//Apr 30, 2020 => 2020-04-30T00:00:00.000Z
export const dateToString = (value) => {
  if(!value) return;
  const date = new Date(value);
  return new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())).toISOString();
};

//2020-04-30T00:00:00.000Z => 4-2020
export const createDate = (date) => {
  if(!date) return;
  const d = new Date(date);
  const month = d. getMonth() + 1;
  const year = d. getFullYear();
  return month + "-" + year;
};

//4-2020 => April 2020
export const getDateString = (date) =>{
  if(!date) return;
  const arr = date.split('-');
  return `${localizeFilter(`month-${arr[0]}`)} ${arr[1]}`
};

