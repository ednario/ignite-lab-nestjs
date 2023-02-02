import { Content } from './content';

test('it should be able to create a notification content', () => {
  const content = new Content('Você recebeu uma nova solicitação de amizade');

  expect(content).toBeTruthy();
});

test('it should not be able to create a notification content with less than 5 characters', () => {
  expect(() => new Content('aaa')).toThrow();
});