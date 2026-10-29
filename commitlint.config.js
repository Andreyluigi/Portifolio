export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // Mensagens em português: não forçamos caixa do assunto
    'subject-case': [0],
    'header-max-length': [2, 'always', 100],
  },
}
