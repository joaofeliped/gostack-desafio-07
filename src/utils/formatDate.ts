const formatDate = (date: Date): string =>
  new Intl.DateTimeFormat('pt-BR').format(new Date(date).getTime());

export default formatDate;
