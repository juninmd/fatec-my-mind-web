import { padStart } from 'lodash';
import * as moment from 'moment';

const dateFormat = 'DD/MM/YYYY HH:mm:ss';
const dateHtmlFormat = 'YYYY-MM-DDThh:mm:ss';

export const dateFormatString = (dateString?: any, format?: true): moment.Moment | null => {
  if (!dateString) {
    return null;
  }

  if (!format) {
    return moment(dateString, dateHtmlFormat);
  }

  const isDST = (moment(dateString).isDST());

  if (isDST) {
    return moment(dateString, dateHtmlFormat).add(-2, 'hour');
  } else {
    return moment(dateString, dateHtmlFormat).add(-3, 'hour');
  }
};

export const date = (dateString?: any, format?: true): Date | null => {
  if (!dateString) {
    return null;
  }

  return dateFormatString(dateString, format)!.toDate();
};

export const formatDateToString = (dateString: Date | string) => {
  if (!dateString) {
    return '';
  }
  return moment(dateString).format(dateFormat);
};

export const zipCode = (param: any) => {
  const pad = padStart((param || '').toString(), 8, '0');
  return [pad.slice(0, 5), '-', pad.slice(5)].join('');
};

export const cpf = (param?: any) => {
  const pad = padStart((param || '').toString(), 11, '0');
  return [pad.slice(0, 3), '.', pad.slice(3, 6), '.', pad.slice(6, 9), '-', pad.slice(9, 11)].join('');
};

export const toDecimal = (value: any, qtd = 2) => {
  return Number(value).toFixed(qtd);
};

export const dateNow = (format: string) => {
  return moment().format(format);
};