# LocalStorage

## **¿Qué es Local Storage?**

Local Storage es una característica proporcionada por los navegadores web modernos que permite a las aplicaciones web almacenar datos de manera persistente en el navegador del usuario. A diferencia de las cookies, que tienen una capacidad limitada y se envían automáticamente con cada solicitud HTTP, Local Storage proporciona un almacenamiento más amplio y controlable sin transmitir los datos en cada interacción con el servidor.

### **Almacenamiento y Recuperación de Datos**

Para trabajar con Local Storage en JavaScript, utilizamos el objeto **`localStorage`**. Permite almacenar datos como pares clave-valor en forma de cadenas de texto. Los datos almacenados persisten incluso después de cerrar el navegador y se mantienen disponibles para futuras sesiones.

```jsx
// Almacenar datos en Local Storage
localStorage.setItem('nombre', 'Juan');
localStorage.setItem('edad', '25');

// Recuperar datos de Local Storage
const nombre = localStorage.getItem('nombre');
const edad = localStorage.getItem('edad');
console.log(`Nombre: ${nombre}, Edad: ${edad}`);
```

### **Limitaciones y Consideraciones de Seguridad**

A pesar de ser útil, Local Storage tiene algunas limitaciones y consideraciones de seguridad importantes:

1. **Tamaño Limitado:** Aunque el tamaño de almacenamiento puede variar según el navegador, generalmente es mayor que el de las cookies. Sin embargo, no se debe abusar del almacenamiento, ya que podría afectar el rendimiento del navegador.
2. **Alcance de Dominio:** Los datos almacenados en Local Storage están asociados con un dominio específico. No pueden ser accedidos por otros dominios ni compartidos entre diferentes sitios web.
3. **Seguridad:** Local Storage es susceptible a ataques de tipo Cross-Site Scripting (XSS). Si se inserta código malicioso en la página, puede acceder y manipular los datos almacenados en Local Storage.

## Ejercicios

- LocalStorage
    
    **Ejercicio 1:** Crea una página web con dos inputs: uno para ingresar el nombre de usuario y otro para la edad. Al hacer clic en un botón "Guardar", almacena estos datos en Local Storage.
    
    **Ejercicio 2:** Desarrolla una página que recupere los datos almacenados en Local Storage (nombre y edad) y los muestre en pantalla.
    
    **Ejercicio 3:** Implementa un botón "Borrar Datos" que elimine la información almacenada en Local Storage y actualice la página para reflejar este cambio.

    **Ejercicio 4:** 