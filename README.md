## Zakres informacji

Niestety nie istnieje API lub nawet łopatologiczna baza danych, którą można byłoby odpytać w celu pozyskania informacji o nieruchomościach należących do kościołów w Polsce. 

Z uwagi na ten fakt, niniejsza mapa zawiera wyłącznie nieruchomości kościelne, które wykorzystywane są na użytek związany bezpośrednio z działalnością kościoła (np. Kuria, zakrystie, kościoły, zakony); nie zawiera ona natomiast nieruchomości o innym charakterze, np. Należących do kościołów kamienic czy hoteli. 

## Sposób pozyskiwania informacji i naniesienia ich na mapę

Zebranie informacji to była ciężka praca polegająca na:
- prześledzeniu analizowanego obszaru, 
- zidentyfikowaniu nieruchomości kościelnych (kościołów, zakonów itp.),
- wyszukaniu granic działek, na których ta nieruchomość się mieści przy pomocy [Geoportalu](https://mapy.geoportal.gov.pl/imap/Imgp_2.html?gpmap=gp0) - przykładowo dla Klasztoru Flanciszkanów

![Działka Klasztoru Franciszkanów](/public/images/klasztor_franciszkanow.png?raw=true "Działka Klasztoru Franciszkanów")

- Wyznaczeniu poligonu według granic działki oraz skopiowaniu jego współrzędnych w formacie ETRS89 / Poland CS92 (EPSG:2180)

![Pobranie współrzędnych](/public/images/coordinates_sample.png?raw=true)

- Transformacji danych z ww. Formatu na standard WGS 84 (EPSG:4326), np. Przy użyciu [MyGeodata](https://mygeodata.cloud/cs2cs/)
