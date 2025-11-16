function formatSeconds(total) {
  const m = Math.floor(total / 60);
  const s = total % 60;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

test('formata 1500 segundos como 25:00', () => {
  expect(formatSeconds(25 * 60)).toBe('25:00');
});
