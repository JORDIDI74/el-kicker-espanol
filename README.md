# El Kicker Español

Landing bilingüe de Jorge Díaz Nicolás. Es un sitio estático: GitHub Pages sirve `index.html` y los archivos de `assets/` directamente, sin compilación.

## Contenido actual

La portada presenta a Jorge como kicker #41 de Marshall University, en la NCAA División I FBS y la Sun Belt Conference. Los datos de 2026 (3/4 field goals, 7/7 puntos extra y 16 puntos) están fechados al **22 de septiembre de 2026**. Antes de actualizar estos números, comprueba las [estadísticas oficiales de Marshall](https://s3.us-east-2.amazonaws.com/sidearm.nextgen.sites/herdzone.com/stats/football/2026/pdf/cume.pdf). La [ficha oficial del jugador](https://herdzone.com/sports/football/roster/jorge-diaz-nicolas/11166) confirma equipo, dorsal y medidas.

Los datos fechados aparecen en la portada, la banda de actualidad, el palmarés y la trayectoria de `index.html`.

## Fotos y vídeos

Las fotos JPG y los vídeos MP4 se sirven desde `assets/`. No existe integración con Dropbox en este repositorio. Instagram se inserta desde su servicio externo. Los botones con `data-photo` usan el visor compartido de `assets/photo-viewer.js` y `assets/photo-viewer.css`.

El montaje **Marshall–Missouri State** procede del archivo facilitado en Dropbox. La copia publicada en `assets/marshall-missouri-state-fg.mp4` conserva el audio y está optimizada a H.264/AAC, 720p y 30 fps (aprox. 20 MB frente a 75 MB del original). El vídeo usa `preload="none"` y una portada JPG para evitar una descarga automática al abrir la landing.

Para previsualizar los cambios en local, sirve la carpeta raíz con un servidor HTTP estático y abre `index.html` en el navegador.
