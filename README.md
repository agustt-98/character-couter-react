# Character Counter - React

## 1. Objetivo del proyecto

El objetivo de este proyecto fue desarrollar una aplicación utilizando React a partir de un proyecto anterior hecho estrictamente con HTML y CSS, aplicando los conceptos fundamentales del framework como la componentización, el manejo del estado, el renderizado dinámico y la comunicación entre componentes mediante props.

Además de replicar la interfaz, se implementó la lógica necesaria para analizar el texto ingresado por el usuario en tiempo real y actualizar automáticamente todas las métricas de la aplicación.

---

## 2. Tecnologías utilizadas

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)

---

## 3. Organización del proyecto

La aplicación fue dividida en componentes reutilizables para mantener una estructura clara y facilitar el entendimiento.

### Componentes

- Header
- TextArea
- Controls
- Stats
- StatsCard
- LetterDensity
- ProgressBar

Cada componente posee una única responsabilidad y recibe la información necesaria mediante props.

---

## 4. Funcionalidades implementadas

- Conteo de caracteres en tiempo real.
- Conteo de palabras.
- Conteo de oraciones.
- Cálculo del tiempo estimado de lectura.
- Opción para excluir espacios del conteo.
- Límite máximo de caracteres configurable.
- Cambio entre modo claro y oscuro.
- Cálculo de densidad de letras.
- Ordenamiento automático de las letras según su frecuencia.
- Visualización mediante barras de progreso (`<meter>`).

---

## 5. Conceptos de React utilizados

Durante el desarrollo se aplicaron los siguientes conceptos:

### Componentización

La interfaz fue dividida en componentes independientes para favorecer la reutilización y mantener un código más organizado.

### Props

Los datos fueron enviados entre componentes utilizando props para mantener una comunicación clara entre ellos.

### Estado (`useState`)

Se utilizó `useState` para administrar:

- Texto ingresado.
- Tema de la aplicación.
- Estado de los checkboxes.
- Límite de caracteres.

### Renderizado dinámico

Las métricas y la lista de densidad de letras se actualizan automáticamente cada vez que cambia el contenido del textarea.

### Renderizado de listas

La sección **Letter Density** utiliza `.map()` para generar dinámicamente cada barra de progreso.

---

## 6. Organización del código

Se buscó mantener una estructura modular:

- Separación entre componentes.
- Separación de estilos.
- Nombres descriptivos.
- Componentes reutilizables.
- Lógica distribuida según la responsabilidad de cada componente.

---

## 7. Dificultades encontradas

Durante el desarrollo surgieron algunos desafíos, entre ellos:

- Dividir correctamente la lógica entre los distintos componentes.
- Decidir qué información debía permanecer en `App` y cuál podía delegarse mediante props.
- Mantener sincronizadas todas las métricas cuando el usuario modifica el texto.
- Implementar correctamente el cálculo y ordenamiento de la densidad de letras.
- Evitar renderizados innecesarios durante el desarrollo.

---

## Autor

**Agustín Simone**