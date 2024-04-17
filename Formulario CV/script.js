document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("formularioCV");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe de forma predeterminada

        // Capturar los valores del formulario
        const nombre = document.getElementById("nombre").value;
        const fechaNacimiento = document.getElementById("fecha_nacimiento").value;
        const ocupacion = document.getElementById("ocupacion").value;
        const contacto = document.getElementById("contacto").value;
        const nacionalidad = document.getElementById("nacionalidad").value;
        const nivelIngles = document.querySelector('input[name="ingles"]:checked').value;
        const lenguajes = Array.from(document.getElementById("lenguajes").selectedOptions).map(option => option.value);
        const aptitudes = document.getElementById("aptitudes").value;
        const habilidades = Array.from(document.querySelectorAll('input[name="habilidades"]:checked')).map(checkbox => checkbox.value);
        const perfil = document.getElementById("perfil").value;

        // Formatear los datos como desees para almacenarlos en el archivo de texto
        const datosFormulario = `Nombre: ${nombre}\nFecha de Nacimiento: ${fechaNacimiento}\nOcupación: ${ocupacion}\nContacto: ${contacto}\nNacionalidad: ${nacionalidad}\nNivel de Inglés: ${nivelIngles}\nLenguajes de Programación: ${lenguajes.join(", ")}\nAptitudes: ${aptitudes}\nHabilidades: ${habilidades.join(", ")}\nPerfil: ${perfil}\n`;

        // Crear un objeto Blob con el contenido de los datos del formulario
        const blob = new Blob([datosFormulario], { type: "text/plain" });

        // Crear un objeto URL para el Blob
        const url = window.URL.createObjectURL(blob);

        // Crear un elemento <a> para descargar el archivo
        const link = document.createElement("a");
        link.href = url;
        link.download = "datos_cv.txt"; // Nombre del archivo a descargar
        link.click();

        // Liberar el objeto URL cuando ya no sea necesario
        window.URL.revokeObjectURL(url);
    });
});
