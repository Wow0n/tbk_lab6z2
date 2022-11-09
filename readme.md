Po wykonaniu poniższych poleceń oba kontenery będą znajdować się w tej samej sieci, działając na innych portach. Klient przy uruchomieniu wysyła zapytanie na adres i port kontenera serwera, który odpowiada mu jsonem. 

```
docker build -t lab6z2_server server/.
docker build -t lab6z2_client client/.

docker network create lab6z2

docker run -d --name server --network lab6z2 -p 9000 lab6z2_server
docker run -d --name client --network lab6z2 -p 3000 lab6z2_client
```