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
        { materia: "Ciencias Naturales", horasSemanales: 4, totalHoras: 144, 
          pdf: "" },

        { materia: "Ciencias Sociales", horasSemanales: 4, totalHoras: 144, 
          pdf: "" },

        { materia: "Construccion de Ciudadania", horasSemanales: 2, totalHoras: 72, 
          pdf: "" },

        { materia: "Ingles", horasSemanales: 2, totalHoras: 72, 
          pdf: "" },

        { materia: "Matemática", horasSemanales: 4, totalHoras: 144, 
          pdf: "" },
        
        { materia: "Practicas del Lenguaje", horasSemanales: 4, totalHoras: 144, 
          pdf: "" },

        { materia: "Lenguajes Tecnologicos", horasSemanales: 2, totalHoras: 72, 
          pdf: "" },

        { materia: "Procedimientos Técnicos", horasSemanales: 2, totalHoras: 72, 
          pdf: "" },

        { materia: "Sistemas Tecnologicos", horasSemanales: 2, totalHoras: 72, 
          pdf: "" },

        { materia: "Educacion Fisica", horasSemanales: 2, totalHoras: 72, 
          pdf: "" },

        { materia: "Edcucacion Artistica", horasSemanales: 2, totalHoras: 72, 
          pdf: "" },
      ],
    },
    2: {
      common: [
        { materia: "Ciencias Naturales", horasSemanales: 4, totalHoras: 144,
          pdf: "" },

        { materia: "Ciencias Sociales", horasSemanales: 4, totalHoras: 144,
          pdf: "" },

        { materia: "Construccion de Ciudadania", horasSemanales: 2, totalHoras: 72,
          pdf: "" },

        { materia: "Ingles", horasSemanales: 2, totalHoras: 72,
          pdf: "" },

        { materia: "Matemática", horasSemanales: 4, totalHoras: 144,
          pdf: "" },

        { materia: "Practicas del Lenguaje", horasSemanales: 4, totalHoras: 144,
          pdf: "" },

        { materia: "Lenguajes Tecnologicos", horasSemanales: 2, totalHoras: 72,
          pdf: "" },

        { materia: "Procedimientos Técnicos", horasSemanales: 4, totalHoras: 144,
          pdf: "" },

        { materia: "Sistemas Tecnologicos", horasSemanales: 2, totalHoras: 72,
          pdf: "" },

        { materia: "Educacion Fisica", horasSemanales: 2, totalHoras: 72, 
          pdf: "" },

        { materia: "Edcucacion Artistica", horasSemanales: 2, totalHoras: 72, 
          pdf: "" },
      ],
    },
    3: {
      common: [
        { materia: "Ciencias Naturales", horasSemanales: 4, totalHoras: 144,
          pdf: "" },

        { materia: "Ciencias Sociales", horasSemanales: 4, totalHoras: 144,
          pdf: "" },

        { materia: "Construccion de Ciudadania", horasSemanales: 2, totalHoras: 72,
          pdf: "" },

        { materia: "Ingles", horasSemanales: 2, totalHoras: 72,
          pdf: "" },

        { materia: "Matemática", horasSemanales: 4, totalHoras: 144,
          pdf: "" },

        { materia: "Practicas del Lenguaje", horasSemanales: 4, totalHoras: 144,
          pdf: "" },

        { materia: "Lenguajes Tecnologicos", horasSemanales: 2, totalHoras: 72,
          pdf: "" },

        { materia: "Procedimientos Técnicos", horasSemanales: 4, totalHoras: 144,
          pdf: "" },

        { materia: "Sistemas Tecnologicos", horasSemanales: 2, totalHoras: 72,
          pdf: "" },

        { materia: "Educacion Fisica", horasSemanales: 2, totalHoras: 72, 
          pdf: "" },

        { materia: "Edcucacion Artistica", horasSemanales: 2, totalHoras: 72, 
          pdf: "" },
      ],
    },
    // Ciclo superior - Informática (4to a 7mo)
    4: {
      informatica: [
        { materia: "Literatura", horasSemanales: 2, totalHoras: 72,
          pdf: "" },

        { materia: "Ingles", horasSemanales: 2, totalHoras: 72,
          pdf: "" },

        { materia: "Educacion Fisica", horasSemanales: 2, totalHoras: 72,
          pdf: "" },

        { materia: "Salud y Adolecencia", horasSemanales: 2, totalHoras: 72,
          pdf: "" },

        { materia: "Historia", horasSemanales: 2, totalHoras: 72,
          pdf: "" },

        { materia: "Geografia", horasSemanales: 2, totalHoras: 72,
          pdf: "" },

        { materia: "Matematica", horasSemanales: 4, totalHoras: 144,
          pdf: "" },

        { materia: "Fisica", horasSemanales: 3, totalHoras: 108,
          pdf: "" },

        { materia: "Quimica", horasSemanales: 2, totalHoras: 72,
          pdf: "" },
        
        { materia: "Tecnologias Electricas", horasSemanales: 2, totalHoras: 72, 
          pdf: "" },

        { materia: "Laboratorio de Programacion", horasSemanales: 2, totalHoras: 72, 
          pdf: "" },

        { materia: "Laboratorio de Hardware", horasSemanales: 4, totalHoras: 144, 
          pdf: "" },

        { materia: "Laboratorio de Sistemas Operativos", horasSemanales: 4, totalHoras: 144, 
          pdf: "" },

        { materia: "Laboratorio de Aplicaciones", horasSemanales: 2, totalHoras: 72, 
          pdf: "" },
      ],
      electromecanica: [
        { materia: "Literatura", horasSemanales: 2, totalHoras: 72,
          pdf: "" },

        { materia: "Inglés", horasSemanales: 2, totalHoras: 72,
          pdf: "" },

        { materia: "Educación Física", horasSemanales: 2, totalHoras: 72,
          pdf: "" },

        { materia: "Salud y Adolecencia", horasSemanales: 2, totalHoras: 72,
          pdf: "" },

        { materia: "Historia", horasSemanales: 2, totalHoras: 72,
          pdf: "" },

        { materia: "Geografía", horasSemanales: 2, totalHoras: 72,
          pdf: "" },

        { materia: "Matemática", horasSemanales: 4, totalHoras: 144,
          pdf: "" },

        { materia: "Física", horasSemanales: 3, totalHoras: 108,
          pdf: "" },

        { materia: "Química", horasSemanales: 2, totalHoras: 72,
          pdf: "" },

        { materia: "Conocimiento de los Materiales", horasSemanales: 2, totalHoras: 72,
          pdf: "" },

        { materia: "Dibujo Tecnologico", horasSemanales: 2, totalHoras: 72,
          pdf: "" },

        { materia: "Maquinas Eléctricas y Automatismos", horasSemanales: 4, totalHoras: 144,
          pdf: "" },

        { materia: "Diseño y Procesamiento Mecanico", horasSemanales: 4, totalHoras: 144,
          pdf: "" },

        { materia: "Instalaciones y Aplicaciones de la Energia", horasSemanales: 4, totalHoras: 144,
          pdf: "" },
      ],
    },
    5: {
      informatica: [
        { materia: "Literatura", horasSemanales: 2, totalHoras: 72,
          pdf: "" },

        { materia: "Ingles", horasSemanales: 2, totalHoras: 72,
          pdf: "" },

        { materia: "Educacion Fisica", horasSemanales: 2, totalHoras: 72,
          pdf: "" },

        { materia: "Historia", horasSemanales: 2, totalHoras: 72,
          pdf: "" },

        { materia: "Geografia", horasSemanales: 2, totalHoras: 72,
          pdf: "" },

        { materia: "Analisis Matematico", horasSemanales: 4, totalHoras: 144,
          pdf: "" },

        { materia: "Sistemas Digitales", horasSemanales: 3, totalHoras: 108,
          pdf: "" },

        { materia: "Teleinformatica", horasSemanales: 4, totalHoras: 144,
          pdf: "" },

        { materia: "Laboratorio de Programacion", horasSemanales: 2, totalHoras: 72, 
          pdf: "" },

        { materia: "Laboratorio de Hardware", horasSemanales: 4, totalHoras: 144, 
          pdf: "" },

        { materia: "Laboratorio de Sistemas Operativos", horasSemanales: 4, totalHoras: 144, 
          pdf: "" },

        { materia: "Laboratorio de Aplicaciones", horasSemanales: 2, totalHoras: 72, 
          pdf: "" },
      ],
      electromecanica: [
        { materia: "Literatura", horasSemanales: 2, totalHoras: 72,
          pdf: "" },

        { materia: "Inglés", horasSemanales: 2, totalHoras: 72,
          pdf: "" },

        { materia: "Educación Física", horasSemanales: 2, totalHoras: 72,
          pdf: "" },

        { materia: "Politica y Ciudadania", horasSemanales: 2, totalHoras: 72,
          pdf: "" },

        { materia: "Historia", horasSemanales: 2, totalHoras: 72,
          pdf: "" },

        { materia: "Geografía", horasSemanales: 2, totalHoras: 72,
          pdf: "" },

        { materia: "Analisis Matemático", horasSemanales: 4, totalHoras: 144,
          pdf: "" },

        { materia: "Mecanica y Mecanismos", horasSemanales: 3, totalHoras: 108,
          pdf: "" },

        { materia: "Electrotecnia", horasSemanales: 3, totalHoras: 108,
          pdf: "" },

        { materia: "Resistencia y Ensayos de los Materiales", horasSemanales: 3, totalHoras: 108,
          pdf: "" },

        { materia: "Maquinas Eléctricas y Automatismos", horasSemanales: 4, totalHoras: 144,
          pdf: "" },

        { materia: "Diseño y Procesamiento Mecanico", horasSemanales: 4, totalHoras: 144,
          pdf: "" },

        { materia: "Instalaciones y Aplicaciones de la Energia", horasSemanales: 4, totalHoras: 144,
          pdf: "" },
      ],
    },
    6: {
      informatica: [
        { materia: "Literatura", horasSemanales: 2, totalHoras: 72,
          pdf: "" },

        { materia: "Ingles", horasSemanales: 2, totalHoras: 72,
          pdf: "" },

        { materia: "Educacion Fisica", horasSemanales: 2, totalHoras: 72,
          pdf: "" },

        { materia: "Filosofia", horasSemanales: 2, totalHoras: 72,
          pdf: "" },

        { materia: "Arte", horasSemanales: 2, totalHoras: 72, 
          pdf: "" },

        { materia: "Matematica Aplicada", horasSemanales: 2, totalHoras: 72,
          pdf: "" },

        { materia: "Sistemas Digitales", horasSemanales: 3, totalHoras: 108,
          pdf: "" },

        { materia: "Investigacion Operativa", horasSemanales: 3, totalHoras: 108,
          pdf: "" },
        
        { materia: "Seguridad Informatica", horasSemanales: 3, totalHoras: 108, 
          pdf: "" },

        { materia: "Derecho del Trabajo", horasSemanales: 2, totalHoras: 72, 
          pdf: "" },

        { materia: "Laboratorio de Programacion", horasSemanales: 2, totalHoras: 72, 
          pdf: "" },

        { materia: "Laboratorio de Hardware", horasSemanales: 4, totalHoras: 144, 
          pdf: "" },

        { materia: "Laboratorio de Sistemas Operativos", horasSemanales: 4, totalHoras: 144, 
          pdf: "" },

        { materia: "Laboratorio de Aplicaciones", horasSemanales: 2, totalHoras: 72, 
          pdf: "" },
      ],
      electromecanica: [
        { materia: "Literatura", horasSemanales: 2, totalHoras: 72,
          pdf: "" },

        { materia: "Inglés", horasSemanales: 2, totalHoras: 72,
          pdf: "" },

        { materia: "Educación Física", horasSemanales: 2, totalHoras: 72,
          pdf: "" },

        { materia: "Filosofia", horasSemanales: 2, totalHoras: 72,
          pdf: "" },

        { materia: "Arte", horasSemanales: 2, totalHoras: 72, 
          pdf: "" },

        { materia: "Matematica Aplicada", horasSemanales: 2, totalHoras: 72,
          pdf: "" },

        { materia: "Termodinamica y Maquinas Termicas", horasSemanales: 3, totalHoras: 108,
          pdf: "" },

        { materia: "Electrotecnia", horasSemanales: 3, totalHoras: 108,
          pdf: "" },

        { materia: "Sistemas Mecanicas", horasSemanales: 3, totalHoras: 108,
          pdf: "" },

        { materia: "Derecho del Trabajo", horasSemanales: 2, totalHoras: 72,
          pdf: "" },

        { materia: "Laboratorio de Medeiciones Electricas", horasSemanales: 2, totalHoras: 72,
          pdf: "" },

        { materia: "Maquinas Eléctricas y Automatismos", horasSemanales: 4, totalHoras: 144,
          pdf: "" },

        { materia: "Diseño y Procesamiento Mecanico", horasSemanales: 4, totalHoras: 144,
          pdf: "" },

        { materia: "Instalaciones y Aplicaciones de la Energia", horasSemanales: 4, totalHoras: 144,
          pdf: "" },
      ],
    },
    7: {
      informatica: [
        { materia: "Practicas Profesionalizantes del Sector Informatico", horasSemanales: 12, totalHoras: 200,
          pdf: "" },

        { materia: "Emprendimientos Productivos y Desarrollo Local", horasSemanales: 2, totalHoras: 72,
          pdf: "" },

        { materia: "Evalucacion de Proyectos", horasSemanales: 2, totalHoras: 72,
          pdf: "" },

        { materia: "Modelos y Sistemas", horasSemanales: 2, totalHoras: 72,
          pdf: "" },

        { materia: "Bases de Datos", horasSemanales: 3, totalHoras: 108,
          pdf: "" },

        { materia: "Proyecto, Diseño e Implementación de Sistemas Computacionales", horasSemanales: 4, totalHoras: 144,
          pdf: "" },

        { materia: "Instalacion, Mantenimiento y Reparacion de Sistemas Computacionales", horasSemanales: 4, totalHoras: 144, 
          pdf: "" },

        { materia: "Instalación, Mantenimiento y Reparación de Redes Informaticas", horasSemanales: 4, totalHoras: 144, 
          pdf: "" },
      ],
      electromecanica: [
        { materia: "Practicas Profesionalizantes del Sector Electromecanico", horasSemanales: 12, totalHoras: 200,
          pdf: "" },

        { materia: "Emprendimientos Productivos y Desarrollo Local", horasSemanales: 2, totalHoras: 72,
          pdf: "" },

        { materia: "Electronica Industrial", horasSemanales: 2, totalHoras: 72,
          pdf: "" },

        { materia: "Seguridad, Higiene y Protección Ambiental", horasSemanales: 2, totalHoras: 72,
          pdf: "" },

        { materia: "Maquinas Electricas", horasSemanales: 3, totalHoras: 108,
          pdf: "" },

        { materia: "Sistemas Mecanicos", horasSemanales: 4, totalHoras: 144,
          pdf: "" },

        { materia: "Laboratorio de Metodologia y Control de Calidad", horasSemanales: 2, totalHoras: 72, 
          pdf: "" },

        { materia: "Mantenimiento y Montaje Electromecanico", horasSemanales: 4, totalHoras: 144, 
          pdf: "" },

        { materia: "Proyecto y Diseño Electromecanico", horasSemanales: 4, totalHoras: 144, 
          pdf: "" },

        { materia: "Proyecto y Diseño de Instalaciones Electricas", horasSemanales: 4, totalHoras: 144, 
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
