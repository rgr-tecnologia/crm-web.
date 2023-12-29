export const formatCnpj = (numericValue: string) => {
  const cleanedCNPJ = numericValue.replace(/\D/g, "");

  // Limita a string aos primeiros 14 caracteres
  const limitedCNPJ = cleanedCNPJ.slice(0, 14);

  // Aplica a máscara conforme o formato do CNPJ
  let maskedCNPJ = "";
  if (limitedCNPJ.length <= 2) {
    maskedCNPJ = limitedCNPJ;
  } else if (limitedCNPJ.length <= 5) {
    maskedCNPJ = `${limitedCNPJ.slice(0, 2)}.${limitedCNPJ.slice(2)}`;
  } else if (limitedCNPJ.length <= 8) {
    maskedCNPJ = `${limitedCNPJ.slice(0, 2)}.${limitedCNPJ.slice(
      2,
      5
    )}.${limitedCNPJ.slice(5)}`;
  } else if (limitedCNPJ.length <= 12) {
    maskedCNPJ = `${limitedCNPJ.slice(0, 2)}.${limitedCNPJ.slice(
      2,
      5
    )}.${limitedCNPJ.slice(5, 8)}/${limitedCNPJ.slice(8)}`;
  } else {
    maskedCNPJ = `${limitedCNPJ.slice(0, 2)}.${limitedCNPJ.slice(
      2,
      5
    )}.${limitedCNPJ.slice(5, 8)}/${limitedCNPJ.slice(
      8,
      12
    )}-${limitedCNPJ.slice(12)}`;
  }

  return maskedCNPJ;
};
