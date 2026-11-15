# El Kicker Español

Landing bilingüe de Jorge Díaz Nicolás. Es un sitio estático: GitHub Pages sirve `index.html` y los archivos de `assets/` directamente, sin compilación.

## Contenido actual

La portada presenta a Jorge como kicker #41 de Marshall University, en la NCAA División I FBS y la Sun Belt Conference. Los datos de 2026 (17/22 field goals, 22/22 puntos extra, 73 puntos en 10 partidos y máximo de 54 yardas, logrado dos veces) están fechados al **14 de noviembre de 2026**, tras la derrota 16–20 ante App State (3 de 3 en field goals: 31, 54 y 24 yardas). El 31 de octubre firmó en Old Dominion (36–23) el récord de Marshall con 5 field goals. El «nº 1 de la Sun Belt en field goals» solo se cita con su fecha (3-11-2026): no se ha vuelto a verificar. Según [Marshall Football en Instagram](https://www.instagram.com/herd_fb/p/DfvlmK8lJzQ/), el FG de 54 yardas ante App State es el más largo de un kicker de Marshall en la historia del Joan C. Edwards Stadium (su 54 ante Gardner-Webb, en el mismo estadio, tiene la misma distancia). La foto de la banda «Ahora» (`assets/app-54.jpg`) procede de esa publicación oficial, recortada y sin metadatos; `assets/groza-star.jpg` queda sin uso en la página. Premio: Lou Groza Award «Stars of the Week» (3-11-2026, [nota oficial](https://herdzone.com/news/2026/11/3/football-marshall-kicker-jorge-diaz-nicolas-named-to-lou-groza-award-stars-of-the-week)). Antes de actualizar estos números, comprueba las [estadísticas oficiales de Marshall](https://s3.us-east-2.amazonaws.com/sidearm.nextgen.sites/herdzone.com/stats/football/2026/pdf/cume.pdf). La [ficha oficial del jugador](https://herdzone.com/sports/football/roster/jorge-diaz-nicolas/11166) confirma equipo, dorsal y medidas.

La portada recupera la fotografía en blanco y negro de la etapa de Virginia (`assets/hero-bw.jpg`) y la composición a pantalla completa. `assets/classic-cover.css` mantiene esta presentación con el contenido actual de Marshall.

Los datos fechados aparecen en la portada, la banda de actualidad, el palmarés y la trayectoria de `index.html`.

## Fotos y vídeos

Las fotos JPG y los vídeos MP4 se sirven desde `assets/`. No existe integración con Dropbox en este repositorio. Instagram se inserta desde su servicio externo. Los botones con `data-photo` usan el visor compartido de `assets/photo-viewer.js` y `assets/photo-viewer.css`.

El montaje **Marshall–Missouri State** procede del archivo facilitado en Dropbox. La copia publicada en `assets/marshall-missouri-state-fg.mp4` conserva el audio y está optimizada a H.264/AAC, 720p y 30 fps (aprox. 20 MB frente a 75 MB del original). El vídeo usa `preload="none"` y una portada JPG para evitar una descarga automática al abrir la landing.

El vídeo **Marshall–Penn State** muestra el primer intento universitario de field goal de Jorge desde 52 yardas, el 5 de septiembre de 2026 en Beaver Stadium. [Penn State registró 108.489 espectadores](https://gopsusports.com/news/2026/09/05/no-1817-penn-state-shuts-out-marshall-45-0-in-campbells-debut-as-head-coach). `assets/marshall-penn-state-first-fg-attempt.mp4` es una copia H.264/AAC optimizada del MOV facilitado en Dropbox (aprox. 24 MB frente a 155 MB). Según la familia y el propio vídeo de FS1, el primer golpeo entró pero Penn State había pedido tiempo muerto (no cuenta); la repetición falló. También usa `preload="none"` y una portada JPG.

Para previsualizar los cambios en local, sirve la carpeta raíz con un servidor HTTP estático y abre `index.html` en el navegador.

La sección **Temporada 2026** (`#temporada`) resume el partido Marshall 36–35 Gardner-Webb (26-09-2026, FG ganador de 32 yardas a 3 s del final y FG de 54 yardas), las fichas de los cuatro primeros partidos y 10 fotos de septiembre. `assets/gw-winner.mp4` (aprox. 12 MB) es una copia H.264/AAC 720p de la grabación facilitada. Las fotos se publican sin metadatos EXIF/GPS. Fuentes: [acta oficial](https://herdzone.com/documents/download/2026/9/26/47912.PDF), [crónica oficial de Marshall](https://herdzone.com/news/2026/9/26/marshall-football-tops-gardner-webb-in-homecoming-thriller) y [WV MetroNews](https://wvmetronews.com/2026/09/26/marshall-survives-scare-nips-gardner-webb-36-35/).

El material bruto (`Fotos Videos/`) está excluido del repositorio en `.gitignore`.

`assets/gw-jorge.mp4` (aprox. 19 MB, 912×512, 30 fps, con sonido) es el montaje del partido ante Gardner-Webb centrado en Jorge, con repeticiones del field goal ganador; sustituye al vídeo resumen general de Marshall. La sección muestra también el próximo partido (vs. Georgia State, sábado 21-11-2026, 16:00 ET, ESPN+): **revisar tras cada jornada**.

La sección «Marca y colaboraciones» se retiró de la landing el 4-11-2026 a petición de la familia.
