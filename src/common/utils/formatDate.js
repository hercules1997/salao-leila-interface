const formatDate = (date) => {
  return new Date(date).toLocaleDateString("pt-BR", {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
  
  });
}

export default formatDate
