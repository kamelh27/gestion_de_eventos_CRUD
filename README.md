Instrucciones de Instalación
Crear el Proyecto con Vite
Primero, vamos a crear un nuevo proyecto utilizando Vite. Para esto, ejecuta el siguiente comando en tu terminal:

bash
Copiar
Editar
npm create vite@latest
Este comando creará un proyecto base con Vite, que es un generador de proyectos rápido y moderno.

Instalar TailwindCSS
Una vez que el proyecto está creado, debemos instalar TailwindCSS para los estilos. Ejecuta el siguiente comando para instalar las dependencias necesarias:

bash
Copiar
Editar
npm install tailwindcss @tailwindcss/vite
Luego, configura TailwindCSS agregando el archivo de configuración correspondiente:

bash
Copiar
Editar
npx tailwindcss init
Asegúrate de seguir los pasos necesarios para agregar TailwindCSS en tu archivo tailwind.config.js y en el archivo de entrada de tu aplicación.

Instalar Axios
Para realizar peticiones HTTP, utilizaremos Axios. Instálalo con el siguiente comando:

bash
Copiar
Editar
npm install axios
Instalar React Router DOM
Si necesitas manejo de rutas en tu aplicación, instala React Router DOM con este comando:

bash
Copiar
Editar
npm install react-router-dom
Backend (Express con MongoDB)
Instalar Mongoose
Para interactuar con una base de datos MongoDB, utilizamos Mongoose. Instálalo en el backend con:

bash
Copiar
Editar
npm install mongoose
Instalar JsonWebToken (JWT)
Para manejar la autenticación y autorización en el backend, instalamos jsonwebtoken:

bash
Copiar
Editar
npm install jsonwebtoken
Instalar Express
Express es un framework web para Node.js que simplifica la creación de APIs. Instálalo con el siguiente comando:

bash
Copiar
Editar
npm install express
Instalar Dotenv
Para manejar variables de entorno de manera segura, utilizamos dotenv:

bash
Copiar
Editar
npm install dotenv
Instalar CORS
CORS (Cross-Origin Resource Sharing) permite que tu backend sea accesible desde diferentes dominios. Instálalo con:

bash
Copiar
Editar
npm install cors
Instalar BcryptJS
Finalmente, para encriptar contraseñas de manera segura, necesitamos bcryptjs:

bash
Copiar
Editar
npm install bcryptjs
