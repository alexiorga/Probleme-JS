# TODOS

Endpoint: https://jsonplaceholder.typicode.com/posts

1. Filtreaza articolele dupa userii urmatori userId = 1,5,8
2. De adaugat untimul articol din `ArticleList` in lista filtrata de la todo-ul 1
3. Returneaza doar articolul cu id-ul 85 din `ArticleList`.

Output-ul trebuie sa arate asa:

```
{
    "userId": 9,
    "id": 85,
    "title": "dolore veritatis porro provident adipisci blanditiis et sunt",
    "body": "similique sed nisi voluptas iusto omnis\nmollitia et quo\nassumenda suscipit officia magnam sint sed tempora\nenim provident pariatur praesentium atque animi amet ratione"
}
```

4. Afiseaza toate articolele in ordine inversa.
5. Filtreaza articolele user-ului cu id-ul 4. Din rezultatul obtinut, afiseaza primele 3 articole incepand cu indexul 2.
6. Filtreaza articolele user-ului cu id-ul 1. Elimina din array-ul obtinut articolul ce contine in title string-ul "est occaecati" si adauga in locul lui (aceeasi pozitie in array) articolul cu id-ul 85 (obtinut la pct 3) din `ArticleList`.
7. Afiseaza numarul total de useri si cate post-uri are fiecare.
8. Adauga toti userii intr-un object in care avem cheie pentru fiecare user, iar fiecare user are lista lui de articole.

Output-ul trebuie sa arate asa:

```
{
    "user_1": [{
        "userId": 1,
        "id": "",
        "title": "",
        "body": ""
    },
    ...
    ],
    "user_2": [{...}]
}
```
