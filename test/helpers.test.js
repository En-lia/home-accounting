import {dateToString, createDate, sortTableData} from '../src/helpers'

describe('helpers: dateToString', () => {
  let value;

  beforeEach(() => {
    value = 'Apr 30, 2020';
  });

  test('check correct data: ""', () => {
    expect(dateToString(value)).toEqual('2020-04-30T00:00:00.000Z')
  });

  test('check incorrect data: null', () => {
    value = null;
    expect(dateToString(value)).toBeUndefined();
  });

  test('check incorrect data: false', () => {
    value = false;
    expect(dateToString(value)).toBeUndefined();
  });

  test('check incorrect data: NaN', () => {
    value = NaN;
    expect(dateToString(value)).toBeUndefined();
  });
});

describe('helpers: createDate', () => {
  let date;

  beforeEach(() => {
    date = '2020-04-30T00:00:00.000Z';
  });

  test(`check with correct data`, () => {
    expect(createDate(date)).toEqual('4-2020')
  });

  test('check incorrect data', () => {
    date = '';
    expect(createDate(date)).toBeUndefined();
  });

});

describe('helpers: sortTableData', () => {
  test('check sort by amount', () => {
    const array = [{amount: 1200}, {amount: 2200}, {amount: 100}];
    const options = {key: "amount", sort: "up-down", type: "number"};
    const result = [{amount: 2200}, {amount: 1200}, {amount: 100}];
    expect(sortTableData(array, options)).toEqual(result);
  });

  test('check sort by date', () => {
    const array = [{date: "2020-05-18T12:12:13.688Z"}, {date: "2020-03-03T09:11:49.688Z"}, {date: "2020-04-23T09:12:19.688Z"}];
    const options = {key: "date", type: "date", sort: "up-down"};
    const result = [{date: "2020-05-18T12:12:13.688Z"}, {date: "2020-04-23T09:12:19.688Z"}, {date: "2020-03-03T09:11:49.688Z"}];
    expect(sortTableData(array, options)).toEqual(result);
  });

  test('check sort by categoryName', () => {
    const array = [{categoryName: "Продукты"}, {categoryName: "Дом"}, {categoryName: "Отпуск"}, {categoryName: "Работа"}];
    const options = {key: "categoryName", type: "string", sort: "up-down"};
    const result = [{categoryName: "Работа"}, {categoryName: "Продукты"}, {categoryName: "Отпуск"}, {categoryName: "Дом"}];
    expect(sortTableData(array, options)).toEqual(result);
  });

  test('check when no options', () => {
    const array = [{amount: 1200}, {amount: 2200}, {amount: 100}];
    const options = {};
    const result = [{amount: 1200}, {amount: 2200}, {amount: 100}];
    expect(sortTableData(array, options)).toEqual(result);
  });

})