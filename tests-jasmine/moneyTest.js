import formatCurrency from '../scripts/utils/money.js';

describe('test suite: formatCurrency', () => {
  it('convert cents to dollars', () => {
    expect(formatCurrency(2095)).toBe('20.95');
  });
  it('0 check', () => {
    expect(formatCurrency(0)).toBe('0.00');
  });
  it('rounding up check', () => {
    expect(formatCurrency(1000.5)).toBe('10.01');
  });
}); 