const formatDate = (date: Date): string =>
  new Intl.DateTimeFormat('pt-BR').format(Date.now());

export default formatDate;
