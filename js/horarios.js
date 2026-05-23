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
        { materia: "Matemática", horasSemanales: 4, totalHoras: 144 },
        { materia: "Lengua", horasSemanales: 4, totalHoras: 144 },
        { materia: "Construcción de Ciudadanía", horasSemanales: 2, totalHoras: 72 },
        { materia: "Sistemas Tecnológicos", horasSemanales: 3, totalHoras: 108 },
        { materia: "Ciencias Naturales", horasSemanales: 3, totalHoras: 108 },
        { materia: "Educación Física", horasSemanales: 2, totalHoras: 72 },
        { materia: "Inglés", horasSemanales: 2, totalHoras: 72 },
        { materia: "Educación Artística", horasSemanales: 2, totalHoras: 72 },
      ],
    },
    2: {
      common: [
        { materia: "Matemática", horasSemanales: 4, totalHoras: 144 },
        { materia: "Lengua", horasSemanales: 4, totalHoras: 144 },
        { materia: "Historia", horasSemanales: 2, totalHoras: 72 },
        { materia: "Geografía", horasSemanales: 2, totalHoras: 72 },
        { materia: "Ciencias Naturales", horasSemanales: 3, totalHoras: 108 },
        { materia: "Educación Física", horasSemanales: 2, totalHoras: 72 },
        { materia: "Inglés", horasSemanales: 2, totalHoras: 72 },
        { materia: "Arte", horasSemanales: 2, totalHoras: 72 },
      ],
    },
    3: {
      common: [
        { materia: "Matemática", horasSemanales: 4, totalHoras: 144 },
        { materia: "Lengua", horasSemanales: 4, totalHoras: 144 },
        { materia: "Historia", horasSemanales: 2, totalHoras: 72 },
        { materia: "Geografía", horasSemanales: 2, totalHoras: 72 },
        { materia: "Ciencias Naturales", horasSemanales: 3, totalHoras: 108 },
        { materia: "Educación Física", horasSemanales: 2, totalHoras: 72 },
        { materia: "Inglés", horasSemanales: 2, totalHoras: 72 },
        { materia: "Arte", horasSemanales: 2, totalHoras: 72 },
      ],
    },
    // Ciclo superior - Informática (4to a 7mo)
    4: {
      informatica: [
        { materia: "Matemática", horasSemanales: 3, totalHoras: 108 },
        { materia: "Programación I", horasSemanales: 4, totalHoras: 144 },
        { materia: "Física", horasSemanales: 3, totalHoras: 108 },
        { materia: "Lengua", horasSemanales: 2, totalHoras: 72 },
        { materia: "Inglés Técnico", horasSemanales: 2, totalHoras: 72 },
        { materia: "Sistemas Operativos", horasSemanales: 3, totalHoras: 108 },
        { materia: "Redes", horasSemanales: 2, totalHoras: 72 },
        { materia: "Educación Física", horasSemanales: 2, totalHoras: 72 },
        { materia: "Taller Práctico", horasSemanales: 6, totalHoras: 216 },
      ],
      electromecanica: [
        { materia: "Matemática", horasSemanales: 3, totalHoras: 108 },
        { materia: "Electrotecnia I", horasSemanales: 4, totalHoras: 144 },
        { materia: "Física", horasSemanales: 3, totalHoras: 108 },
        { materia: "Lengua", horasSemanales: 2, totalHoras: 72 },
        { materia: "Inglés Técnico", horasSemanales: 2, totalHoras: 72 },
        { materia: "Mecánica", horasSemanales: 3, totalHoras: 108 },
        { materia: "Dibujo Técnico", horasSemanales: 2, totalHoras: 72 },
        { materia: "Educación Física", horasSemanales: 2, totalHoras: 72 },
        { materia: "Taller Práctico", horasSemanales: 6, totalHoras: 216 },
      ],
    },
    5: {
      informatica: [
        { materia: "Matemática", horasSemanales: 3, totalHoras: 108 },
        { materia: "Programación II", horasSemanales: 4, totalHoras: 144 },
        { materia: "Física", horasSemanales: 3, totalHoras: 108 },
        { materia: "Lengua", horasSemanales: 2, totalHoras: 72 },
        { materia: "Inglés Técnico", horasSemanales: 2, totalHoras: 72 },
        { materia: "Bases de Datos", horasSemanales: 3, totalHoras: 108 },
        { materia: "Redes Avanzadas", horasSemanales: 2, totalHoras: 72 },
        { materia: "Educación Física", horasSemanales: 2, totalHoras: 72 },
        { materia: "Taller Práctico", horasSemanales: 6, totalHoras: 216 },
      ],
      electromecanica: [
        { materia: "Matemática", horasSemanales: 3, totalHoras: 108 },
        { materia: "Electrotecnia II", horasSemanales: 4, totalHoras: 144 },
        { materia: "Física", horasSemanales: 3, totalHoras: 108 },
        { materia: "Lengua", horasSemanales: 2, totalHoras: 72 },
        { materia: "Inglés Técnico", horasSemanales: 2, totalHoras: 72 },
        { materia: "Automatización", horasSemanales: 3, totalHoras: 108 },
        { materia: "Dibujo Técnico", horasSemanales: 2, totalHoras: 72 },
        { materia: "Educación Física", horasSemanales: 2, totalHoras: 72 },
        { materia: "Taller Práctico", horasSemanales: 6, totalHoras: 216 },
      ],
    },
    6: {
      informatica: [
        { materia: "Matemática Aplicada", horasSemanales: 3, totalHoras: 108 },
        { materia: "Programación III", horasSemanales: 4, totalHoras: 144 },
        { materia: "Sistemas de Información", horasSemanales: 3, totalHoras: 108 },
        { materia: "Lengua", horasSemanales: 2, totalHoras: 72 },
        { materia: "Inglés Técnico", horasSemanales: 2, totalHoras: 72 },
        { materia: "Seguridad Informática", horasSemanales: 3, totalHoras: 108 },
        { materia: "Proyecto Integrador", horasSemanales: 2, totalHoras: 72 },
        { materia: "Educación Física", horasSemanales: 2, totalHoras: 72 },
        { materia: "Taller Práctico", horasSemanales: 6, totalHoras: 216 },
      ],
      electromecanica: [
        { materia: "Matemática Aplicada", horasSemanales: 3, totalHoras: 108 },
        { materia: "Electrotecnia III", horasSemanales: 4, totalHoras: 144 },
        { materia: "Máquinas Eléctricas", horasSemanales: 3, totalHoras: 108 },
        { materia: "Lengua", horasSemanales: 2, totalHoras: 72 },
        { materia: "Inglés Técnico", horasSemanales: 2, totalHoras: 72 },
        { materia: "Control Industrial", horasSemanales: 3, totalHoras: 108 },
        { materia: "Proyecto Integrador", horasSemanales: 2, totalHoras: 72 },
        { materia: "Educación Física", horasSemanales: 2, totalHoras: 72 },
        { materia: "Taller Práctico", horasSemanales: 6, totalHoras: 216 },
      ],
    },
    7: {
      informatica: [
        { materia: "Matemática Aplicada", horasSemanales: 3, totalHoras: 108 },
        { materia: "Desarrollo de Proyectos", horasSemanales: 6, totalHoras: 216 },
        { materia: "Tecnologías Emergentes", horasSemanales: 3, totalHoras: 108 },
        { materia: "Inglés Técnico", horasSemanales: 2, totalHoras: 72 },
        { materia: "Legislación y Ética", horasSemanales: 2, totalHoras: 72 },
        { materia: "Práctica Profesional", horasSemanales: 4, totalHoras: 144 },
      ],
      electromecanica: [
        { materia: "Matemática Aplicada", horasSemanales: 3, totalHoras: 108 },
        { materia: "Proyecto Técnico", horasSemanales: 6, totalHoras: 216 },
        { materia: "Innovación Tecnológica", horasSemanales: 3, totalHoras: 108 },
        { materia: "Inglés Técnico", horasSemanales: 2, totalHoras: 72 },
        { materia: "Legislación Laboral", horasSemanales: 2, totalHoras: 72 },
        { materia: "Práctica Profesional", horasSemanales: 4, totalHoras: 144 },
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
      row.innerHTML = `
        <td>${item.materia}</td>
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
