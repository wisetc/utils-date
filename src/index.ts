import moment from 'moment-timezone';

export * from './const';

export const setDefaultTimezone = moment.tz.setDefault;

/**
 * 获得时间对应的日期时间，以 localeString 表示
 */
export function datetimeStr(
  date: moment.MomentInput,
  delimiter: string[] = ['-', ':']
): string {
  const [s0, s1] = delimiter;
  return moment(date).format(
    `${['YYYY', 'MM', 'DD'].join(s0)} ${['HH', 'mm', 'ss'].join(s1)}`
  );
}

/**
 * 获得时间对应的日期，以 localeString 表示
 */
export function dateStr(
  date: moment.MomentInput,
  delimiter: string = '-'
): string {
  return moment(date).format(['YYYY', 'MM', 'DD'].join(delimiter));
}

/**
 * 获取当前时间的时间戳
 */
export function now(): number {
  return moment().valueOf();
}

/**
 * 获取当天的时间戳
 */
export function today(): number {
  return moment()
    .startOf('day')
    .valueOf();
}

/**
 * 获取两个时间的时间间隔，以 localeString 表示
 */
export function duration(
  startTime: moment.MomentInput,
  endTime: moment.MomentInput
): string {
  return dateStr(startTime) + ' 至 ' + dateStr(endTime);
}

/**
 * 获得时间对应的时间戳
 */
export function valueOf(date: moment.MomentInput): number {
  return moment(date).valueOf();
}

/**
 * 获得时间戳表示的时间对应日期的时间戳
 */
export function startOfDay(timestamp: number): number {
  const date = new Date(timestamp);
  const y = date.getFullYear();
  const m = date.getMonth();
  const d = date.getDate();
  return new Date(y, m, d).getTime();
}

/**
 * 计算得两个时间戳表示的天数间隔 - 两个时间戳需为同一个时区
 */
export function deltaDays(timestamp0: number, timestamp1: number): number {
  const [day0, day1] = [timestamp0, timestamp1].map(startOfDay);
  const dur = day1 - day0;
  const oneDay = 24 * 3600 * 1000;

  return Math.floor(dur / oneDay);
}

/**
 * 计算时间偏移天数后的时间 - 以时间戳表示
 */
export function addDays(timestamp: number, days: number): number {
  return moment(timestamp)
    .add(days, 'days')
    .valueOf();
}

export default moment;
