# SpemTraductor

<div align="center">

![SPEM Emblem](SpemTraductorV3/img/SPEM%20Emblem.png)

[![Demo](https://img.shields.io/badge/Demo-Vercel-black?style=for-the-badge&logo=vercel)](https://clanspem.vercel.app)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/es/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/es/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/es/docs/Web/JavaScript)

**Encriptador y desencriptador interactivo utilizando el cifrado SpemCode, diseñado exclusivamente para la comunidad del Clan SPEM.**

[Ver Demo](https://clanspem.vercel.app) · [Reportar Bug](https://github.com/13rianVargas/SpemTraductor/issues) · [Solicitar Feature](https://github.com/13rianVargas/SpemTraductor/issues)

</div>

---

## 📋 Tabla de Contenidos

- [Sobre el Proyecto](#sobre-el-proyecto)
- [SpemCode](#spemcode)
- [Características](#características)
- [Tecnologías](#tecnologías)
- [Cómo Usar](#cómo-usar)
- [Instalación Local](#instalación-local)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Contribuir](#contribuir)
- [Agradecimientos](#agradecimientos)
- [Autor](#autor)

---

## 🎯 Sobre el Proyecto

**SpemTraductor** es una herramienta web que permite encriptar y desencriptar texto utilizando el cifrado **SpemCode**, un sistema de sustitución de caracteres único creado para la comunicación interna del Clan SPEM.

La aplicación ofrece una interfaz intuitiva y bidireccional: puedes escribir texto normal para encriptarlo, o pegar texto encriptado para revelarlo.

---

## 🔐 SpemCode

El **SpemCode** es un cifrado de sustitución donde cada letra del alfabeto se reemplaza por otra según la siguiente tabla:

### Tabla de Sustitución

| Original | Encriptado |
|:--------:|:----------:|
| A | A |
| B | C |
| C | D |
| D | F |
| E | 3 |
| F | G |
| G | H |
| H | J |
| I | I |
| J | K |
| K | L |
| L | N |
| M | 4 |
| N | Q |
| O | O |
| P | 2 |
| Q | R |
| R | T |
| S | 1 |
| T | V |
| U | U |
| V | W |
| W | X |
| X | Y |
| Y | Z |
| Z | B |

### Ejemplo

| Texto Original | Texto Encriptado |
|:--------------|:-----------------|
| `Clan Spem` | `Dnaq 1234` |
| `Hola Mundo` | `Jona 4uqfo` |

> **Nota:** Las vocales **A, I, O, U** permanecen iguales. Los números **1, 2, 3, 4** representan **S, P, E, M** respectivamente.

---

## 🚀 Características

- ✅ **Encriptación instantánea** - Escribe y ve el resultado en tiempo real
- ✅ **Desencriptación bidireccional** - Funciona en ambas direcciones
- ✅ **Copiar al portapapeles** - Copia el resultado con un solo clic
- ✅ **Diseño responsivo** - Compatible con móviles, tablets y escritorio
- ✅ **Interfaz intuitiva** - Fácil de usar sin necesidad de instrucciones
- ✅ **Sin dependencias externas** - HTML, CSS y JavaScript puro
- ✅ **Estilo visual SPEM** - Diseño con la identidad del clan

---

## 🛠️ Tecnologías

Este proyecto fue construido con las siguientes tecnologías:

- **HTML5** - Estructura semántica
- **CSS3** - Estilos y animaciones
- **JavaScript** - Lógica de encriptación/desencriptación
- **Google Fonts** - Tipografía Lexend
- **Vercel** - Hosting y despliegue

---

## 🖥️ Cómo Usar

### Opción 1: Usar en línea (Recomendado)

1. Visita [clanspem.vercel.app](https://clanspem.vercel.app)
2. **Para encriptar:** Escribe tu texto en el cuadro "Sin Encriptar"
3. **Para desencriptar:** Escribe el texto cifrado en el cuadro "Encriptado"
4. Usa los botones para copiar el resultado
5. El botón "Limpiar Campos" borra ambos cuadros

### Opción 2: Ejecutar localmente

Consulta la sección [Instalación Local](#instalación-local).

---

## 💻 Instalación Local

Si deseas ejecutar el proyecto en tu máquina local:

```bash
# Clona el repositorio
git clone https://github.com/13rianVargas/SpemTraductor.git

# Navega al directorio
cd SpemTraductor/SpemTraductorV3

# Abre index.html en tu navegador
# Opción 1: Doble clic en el archivo
# Opción 2: Usar un servidor local
npx serve .
# o
python -m http.server 8000
```

---

## 📁 Estructura del Proyecto

```
SpemTraductor/
├── README.md                 # Documentación del proyecto
├── .gitignore               # Archivos ignorados por Git
└── SpemTraductorV3/
    ├── index.html           # Página principal
    ├── script.js            # Lógica de encriptación/desencriptación
    ├── style.css            # Estilos y diseño responsivo
    └── img/
        ├── SPEM Emblem.png  # Emblema del clan
        └── SPEM Shield.png  # Escudo del clan
```

---

## 🤝 Contribuir

¡Las contribuciones son bienvenidas y apreciadas!

1. Haz un **Fork** del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/NuevaCaracteristica`)
3. Realiza tus cambios y haz commit (`git commit -m 'Añadir nueva característica'`)
4. Sube tus cambios (`git push origin feature/NuevaCaracteristica`)
5. Abre un **Pull Request**

### Ideas para contribuir

- 🌐 Añadir más idiomas a la interfaz
- 📱 Mejorar la experiencia móvil
- 🎨 Temas adicionales (modo oscuro)
- 🔧 Nuevos modos de cifrado

---

## 🙏 Agradecimientos

- **Clan SPEM** - Por su apoyo, colaboración y por inspirar este proyecto
- Todos los contribuidores que ayudan a mejorar SpemTraductor

---

## 👤 Autor

**13rian Vargas**

[![Linktree](https://img.shields.io/badge/Linktree-13rianVargas-39E09B?style=for-the-badge&logo=linktree&logoColor=white)](https://linktr.ee/13rianVargas)
[![GitHub](https://img.shields.io/badge/GitHub-13rianVargas-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/13rianVargas)

---

<div align="center">

**© 2025 SpemTraductor. Todos los derechos reservados.**

⭐ Si te gusta este proyecto, ¡dale una estrella en GitHub! ⭐

</div>