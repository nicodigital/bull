export function slugify(text) {
  const normalizedText = text
    .toString()
    .toLowerCase()
    .normalize("NFD") // Normalizar caracteres especiales
    .replace(/[\u0300-\u036f]/g, ""); // Eliminar diacríticos

  return normalizedText
    .replace(/\s+/g, '-') // Reemplazar espacios con guiones
    .replace(/[^\w-]+/g, '') // Eliminar caracteres especiales
    .replace(/--+/g, '-') // Reemplazar múltiples guiones con uno solo
    .replace(/^-+/, '') // Eliminar guiones al principio
    .replace(/-+$/, ''); // Eliminar guiones al final
}

export default slugify;
