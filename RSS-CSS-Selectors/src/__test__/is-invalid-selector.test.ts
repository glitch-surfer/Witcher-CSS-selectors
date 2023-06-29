import { isInvalidSelector } from '../components/util/remove-element';

describe('isInvalidSelector', () => {
  it('should return false', () => {
    expect(isInvalidSelector('')).toBe(true);
  });
  it('should return true', () => {
    expect(isInvalidSelector('a')).toBe(false);
  });
  it('should return true', () => {
    expect(isInvalidSelector('1.')).toBe(true);
  });
  it('should return false', () => {
    expect(isInvalidSelector('1')).toBe(true);
  });
});
