document.addEventListener("DOMContentLoaded", () => {
  // Referencias a elementos del DOM
  const yearSelect = document.getElementById("year-select")
  const specialtySelect = document.getElementById("specialty-select")
  const specialtyContainer = document.getElementById("specialty-container")
  const planBody = document.getElementById("plan-body")

  // Datos del Plan de Estudio - Nombre, Horas Semanales, Total de Horas
  const planData = {
    // Ciclo básico (1ro a 3ro)
    1: {
      common: [
        { materia: "Matemática", horasSemanales: 4, totalHoras: 144, 
          pdf: "https://abc.gob.ar/secretarias/sites/default/files/2021-05/matematica.pdf" },

        { materia: "Lengua", horasSemanales: 4, totalHoras: 144, 
          pdf: "https://abc.gob.ar/secretarias/sites/default/files/2021-05/lengua.pdf" },

        { materia: "Construcción de Ciudadanía", horasSemanales: 2, totalHoras: 72, 
          pdf: "https://abc.gob.ar/secretarias/sites/default/files/2021-05/ciudadania.pdf" },

        { materia: "Sistemas Tecnológicos", horasSemanales: 3, totalHoras: 108, 
          pdf: "https://abc.gob.ar/secretarias/sites/default/files/2021-05/sistemas-tecnologicos.pdf" },

        { materia: "Ciencias Naturales", horasSemanales: 3, totalHoras: 108, 
          pdf: "https://abc.gob.ar/secretarias/sites/default/files/2021-05/ciencias-naturales.pdf" },

        { materia: "Educación Física", horasSemanales: 2, totalHoras: 72, 
          pdf: "https://abc.gob.ar/secretarias/sites/default/files/2021-05/educacion-fisica.pdf" },

        { materia: "Inglés", horasSemanales: 2, totalHoras: 72, 
          pdf: "https://abc.gob.ar/secretarias/sites/default/files/2021-05/ingles.pdf" },

        { materia: "Educación Artística", horasSemanales: 2, totalHoras: 72, 
          pdf: "https://abc.gob.ar/secretarias/sites/default/files/2021-05/educacion-artistica.pdf" },
      ],
    },
    2: {
      common: [
        { materia: "Matemática", horasSemanales: 4, totalHoras: 144,
          pdf: "" },

        { materia: "Lengua", horasSemanales: 4, totalHoras: 144,
          pdf: "" },

        { materia: "Historia", horasSemanales: 2, totalHoras: 72,
          pdf: "" },

        { materia: "Geografía", horasSemanales: 2, totalHoras: 72,
          pdf: "" },

        { materia: "Ciencias Naturales", horasSemanales: 3, totalHoras: 108,
          pdf: "" },

        { materia: "Educación Física", horasSemanales: 2, totalHoras: 72,
          pdf: "" },

        { materia: "Inglés", horasSemanales: 2, totalHoras: 72,
          pdf: "" },

        { materia: "Arte", horasSemanales: 2, totalHoras: 72,
          pdf: "" },
      ],
    },
    3: {
      common: [
        { materia: "Matemática", horasSemanales: 4, totalHoras: 144,
          pdf: "" },

        { materia: "Lengua", horasSemanales: 4, totalHoras: 144,
          pdf: "" },

        { materia: "Historia", horasSemanales: 2, totalHoras: 72,
          pdf: "" },

        { materia: "Geografía", horasSemanales: 2, totalHoras: 72,
          pdf: "" },

        { materia: "Ciencias Naturales", horasSemanales: 3, totalHoras: 108,
          pdf: "" },

        { materia: "Educación Física", horasSemanales: 2, totalHoras: 72,
          pdf: "" },

        { materia: "Inglés", horasSemanales: 2, totalHoras: 72,
          pdf: "" },

        { materia: "Arte", horasSemanales: 2, totalHoras: 72,
          pdf: "" },
      ],
    },
    // Ciclo superior - Informática (4to a 7mo)
    4: {
      informatica: [
        { materia: "Matemática", horasSemanales: 3, totalHoras: 108,
          pdf: "" },

        { materia: "Programación I", horasSemanales: 4, totalHoras: 144,
          pdf: "" },

        { materia: "Física", horasSemanales: 3, totalHoras: 108,
          pdf: "" },

        { materia: "Lengua", horasSemanales: 2, totalHoras: 72,
          pdf: "" },

        { materia: "Inglés Técnico", horasSemanales: 2, totalHoras: 72,
          pdf: "" },

        { materia: "Sistemas Operativos", horasSemanales: 3, totalHoras: 108,
          pdf: "" },

        { materia: "Redes", horasSemanales: 2, totalHoras: 72,
          pdf: "" },

        { materia: "Educación Física", horasSemanales: 2, totalHoras: 72,
          pdf: "" },

        { materia: "Taller Práctico", horasSemanales: 6, totalHoras: 216,
          pdf: "" },
      ],
      electromecanica: [
        { materia: "Matemática", horasSemanales: 3, totalHoras: 108,
          pdf: "" },

        { materia: "Electrotecnia I", horasSemanales: 4, totalHoras: 144,
          pdf: "" },

        { materia: "Física", horasSemanales: 3, totalHoras: 108,
          pdf: "" },

        { materia: "Lengua", horasSemanales: 2, totalHoras: 72,
          pdf: "" },

        { materia: "Inglés Técnico", horasSemanales: 2, totalHoras: 72,
          pdf: "" },

        { materia: "Mecánica", horasSemanales: 3, totalHoras: 108,
          pdf: "" },

        { materia: "Dibujo Técnico", horasSemanales: 2, totalHoras: 72,
          pdf: "" },

        { materia: "Educación Física", horasSemanales: 2, totalHoras: 72,
          pdf: "" },

        { materia: "Taller Práctico", horasSemanales: 6, totalHoras: 216,
          pdf: "" },
      ],
    },
    5: {
      informatica: [
        { materia: "Matemática", horasSemanales: 3, totalHoras: 108,
          pdf: "" },

        { materia: "Programación II", horasSemanales: 4, totalHoras: 144,
          pdf: "" },

        { materia: "Física", horasSemanales: 3, totalHoras: 108,
          pdf: "" },

        { materia: "Lengua", horasSemanales: 2, totalHoras: 72,
          pdf: "" },

        { materia: "Inglés Técnico", horasSemanales: 2, totalHoras: 72,
          pdf: "" },

        { materia: "Bases de Datos", horasSemanales: 3, totalHoras: 108,
          pdf: "" },

        { materia: "Redes Avanzadas", horasSemanales: 2, totalHoras: 72,
          pdf: "" },

        { materia: "Educación Física", horasSemanales: 2, totalHoras: 72,
          pdf: "" },

        { materia: "Taller Práctico", horasSemanales: 6, totalHoras: 216,
          pdf: "" },
      ],
      electromecanica: [
        { materia: "Matemática", horasSemanales: 3, totalHoras: 108,
          pdf: "" },

        { materia: "Electrotecnia II", horasSemanales: 4, totalHoras: 144,
          pdf: "" },

        { materia: "Física", horasSemanales: 3, totalHoras: 108,
          pdf: "" },

        { materia: "Lengua", horasSemanales: 2, totalHoras: 72,
          pdf: "" },

        { materia: "Inglés Técnico", horasSemanales: 2, totalHoras: 72,
          pdf: "" },

        { materia: "Automatización", horasSemanales: 3, totalHoras: 108,
          pdf: "" },

        { materia: "Dibujo Técnico", horasSemanales: 2, totalHoras: 72,
          pdf: "" },

        { materia: "Educación Física", horasSemanales: 2, totalHoras: 72,
          pdf: "" },

        { materia: "Taller Práctico", horasSemanales: 6, totalHoras: 216,
          pdf: "" },
      ],
    },
    6: {
      informatica: [
        { materia: "Matemática Aplicada", horasSemanales: 3, totalHoras: 108,
          pdf: "" },

        { materia: "Programación III", horasSemanales: 4, totalHoras: 144,
          pdf: "" },

        { materia: "Sistemas de Información", horasSemanales: 3, totalHoras: 108,
          pdf: "" },

        { materia: "Lengua", horasSemanales: 2, totalHoras: 72,
          pdf: "" },

        { materia: "Inglés Técnico", horasSemanales: 2, totalHoras: 72,
          pdf: "" },

        { materia: "Seguridad Informática", horasSemanales: 3, totalHoras: 108,
          pdf: "" },

        { materia: "Proyecto Integrador", horasSemanales: 2, totalHoras: 72,
          pdf: "" },

        { materia: "Educación Física", horasSemanales: 2, totalHoras: 72,
          pdf: "" },

        { materia: "Taller Práctico", horasSemanales: 6, totalHoras: 216,
          pdf: "" },
      ],
      electromecanica: [
        { materia: "Matemática Aplicada", horasSemanales: 3, totalHoras: 108,
          pdf: "" },

        { materia: "Electrotecnia III", horasSemanales: 4, totalHoras: 144,
          pdf: "" },

        { materia: "Máquinas Eléctricas", horasSemanales: 3, totalHoras: 108,
          pdf: "" },

        { materia: "Lengua", horasSemanales: 2, totalHoras: 72,
          pdf: "" },

        { materia: "Inglés Técnico", horasSemanales: 2, totalHoras: 72,
          pdf: "" },

        { materia: "Control Industrial", horasSemanales: 3, totalHoras: 108,
          pdf: "" },

        { materia: "Proyecto Integrador", horasSemanales: 2, totalHoras: 72,
          pdf: "" },

        { materia: "Educación Física", horasSemanales: 2, totalHoras: 72,
          pdf: "" },

        { materia: "Taller Práctico", horasSemanales: 6, totalHoras: 216,
          pdf: "" },
      ],
    },
    7: {
      informatica: [
        { materia: "Matemática Aplicada", horasSemanales: 3, totalHoras: 108,
          pdf: "" },

        { materia: "Desarrollo de Proyectos", horasSemanales: 6, totalHoras: 216,
          pdf: "" },

        { materia: "Tecnologías Emergentes", horasSemanales: 3, totalHoras: 108,
          pdf: "" },

        { materia: "Inglés Técnico", horasSemanales: 2, totalHoras: 72,
          pdf: "" },

        { materia: "Legislación y Ética", horasSemanales: 2, totalHoras: 72,
          pdf: "" },

        { materia: "Práctica Profesional", horasSemanales: 4, totalHoras: 144,
          pdf: "" },
      ],
      electromecanica: [
        { materia: "Matemática Aplicada", horasSemanales: 3, totalHoras: 108,
          pdf: "" },

        { materia: "Proyecto Técnico", horasSemanales: 6, totalHoras: 216,
          pdf: "" },

        { materia: "Innovación Tecnológica", horasSemanales: 3, totalHoras: 108,
          pdf: "" },

        { materia: "Inglés Técnico", horasSemanales: 2, totalHoras: 72,
          pdf: "" },

        { materia: "Legislación Laboral", horasSemanales: 2, totalHoras: 72,
          pdf: "" },

        { materia: "Práctica Profesional", horasSemanales: 4, totalHoras: 144,
          pdf: "" },
      ],
    },
  }

  // Función para actualizar la tabla
  function updatePlan() {
    const year = yearSelect.value
    const specialty = specialtySelect.value

    // Obtener los datos del plan
    let data = planData[year]
    if (!data) return

    // Para ciclo básico (1-3) no hay especialidades
    if (year <= 3) {
      data = data.common
      specialtyContainer.style.display = "none"
    } else {
      specialtyContainer.style.display = "flex"
      data = data[specialty] || []
    }

    // Limpiar tabla
    planBody.innerHTML = ""

    // Llenar tabla
    data.forEach((item) => {
      const row = document.createElement("tr")

      let materiaCell
      if (item.pdf) { //si tiene pdf lo genera como link
        materiaCell = `<a href="${item.pdf}" target="_blank" class="materia-link">${item.materia}</a>`
      } else { //sino tiene lo genera como texto normal
        materiaCell = item.materia
      }

      row.innerHTML = `
        <td>${materiaCell}</td>
        <td>${item.horasSemanales}</td>
        <td>${item.totalHoras}</td>
      `
      planBody.appendChild(row)
    })
  }

  // Event listeners
  yearSelect.addEventListener("change", updatePlan)
  specialtySelect.addEventListener("change", updatePlan)

  // Cargar datos iniciales
  updatePlan()
})
