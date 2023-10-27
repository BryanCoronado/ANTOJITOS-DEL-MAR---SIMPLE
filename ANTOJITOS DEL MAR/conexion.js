// URL de la API
const apiUrl = "https://cevicheria-antojitos-del-mar.onrender.com/api/projects/";

// Hacer una solicitud GET a la API
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error("Error en la solicitud HTTP: " + response.status);
    }
    return response.json(); // Parsear la respuesta JSON
  })
  .then(data => {
    // Aquí puedes trabajar con los datos de la API
    console.log(data);
    // Por ejemplo, puedes renderizar los datos en tu front-end
  })
  .catch(error => {
    console.error("Error al obtener datos de la API: " + error);
  });
