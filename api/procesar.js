export default function handler(req, res) {
  const nombre = (req.query.nombre || "anónimo").toString();

 
  if (nombre.toLowerCase() === "error") {
    return res.status(500).json({
      error: "Error simulado en /api/procesar",
      timestamp: new Date().toISOString()
    });
  }

  
  return res.status(200).json({
    resultado: `Nombre procesado: ${nombre.toUpperCase()}`,
    timestamp: new Date().toISOString()
  });
}

