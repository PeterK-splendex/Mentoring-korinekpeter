## Eddigi funkciók:

Event,admin,user tábla megjelenítése a backend adataival
Lehetőség van eventek likeolására, dislikeolására. A user id be van égetve egyenlőre, de authentication után változtatás nélkül működni fog
Változik a sidebar tartalma, user és admin mást lát
Adatok nevére kattintva detail paget megnézhetjük

### Szimuláljuk a user/admin különbséget authorization nélkül
Login fülnél login megnyomása (email password mező nem számít) -> user bejelentkezés
Register fülnél "register as admin" bepipálása (email password name nem számít) -> admin bejelentkezés

### Admin fukciók
Admin látja a user táblát, tud újakat hozzáadni, és (csak usereknél) meglévőeket editálni, törölni
Admin tud új authorokat hozzáadni, itt nem kell megadni semmilyen eventet, az author eleinte nincs hozzácsatolva semelyik eventhez
Admin tud új eventet hozzáadni, legördülő listával kiválaszthatja a meglévő authorok közül, hogy kik legyenek hozzácsatolva (üresen lehet hagyni)
Authorok, eventek editálása működik, új authorokat hozzá lehet csatolni eventhez, vagy meglévőeket elvenni róla

### Hiányzó funkciók
Authentication, tényleges login register
Autherization működik, de csak redux state "eljátsza" ezt kell javítani
Ebből adodóan, likeok dislikeok az adott user idjétől függjenek, ne beégetve legyenek
Profile page tényleges információt mutasson, lehessen lehetőség változtatni azt, modal implementálása

### Egyéb feladatok
Sort,filter
Swagger documentáció
Docker használata
Ennek a readme fájlnak a javítása, konvenciók használata hozzá