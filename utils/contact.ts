export const handleContactClick = () => {
  const phoneNumber = "+525583679908" // Número de teléfono
  const message = "Hey Juan" // Mensaje predefinido

  // Construir la URL de WhatsApp
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  // Abrir la URL en una nueva pestaña o ventana
  window.open(url, "_blank")
}

