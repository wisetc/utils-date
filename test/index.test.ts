import moment, { deltaDays, startOfDay } from '../src';

describe('startOfDay', () => {
  test('2020-02-01 10:15', () => {
    const tStr = '2020-02-01 10:15';
    const t = Date.parse(tStr);
    expect(startOfDay(t)).toBe(
      moment(t)
        .startOf('days')
        .valueOf()
    );
  });
});

describe('deltaDays', () => {
  const today = startOfDay(Date.now());

  const oneHour = 3600 * 1000;

  test('now', () => {
    expect(deltaDays(Date.now(), Date.now())).toBe(0);
  });

  test('today + 2h, today + 1h', () => {
    expect(deltaDays(today + 2 * oneHour, today + 1 * oneHour)).toBe(0);
  });

  test('today + 2h, today + 25h', () => {
    expect(deltaDays(today + 2 * oneHour, today + 25 * oneHour)).toBe(1);
  });

  test('today + 2h, today + 49h', () => {
    expect(deltaDays(today + 2 * oneHour, today + 49 * oneHour)).toBe(2);
  });

  test('today + 2h, today - 1h', () => {
    expect(deltaDays(today + 2 * oneHour, today - 1 * oneHour)).toBe(-1);
  });

  test('today + 2h, today - 47h', () => {
    expect(deltaDays(today + 2 * oneHour, today - 47 * oneHour)).toBe(-2);
  });
});
