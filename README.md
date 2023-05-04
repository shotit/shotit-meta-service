# Shotit-meta-service

Provide meta information and utility for shotit, for example, image proxy, cast and poster etc.

## Prerequisites

Document Database to store metadata (MongoDB or MongoDB Atlas)

## Setup

```shell
git clone https://github.com/shotit/shotit-meta-service.git
cd shotit-meta-service
yarn install
```

- Take Blender Open Movie dataset as an example, insert blender.json to your MongoDB service. Suggest naming it db "shotit" and collection "imdb".
- Copy `.env.example` to `.env`, and paste your MongoDB endpoint there.

```shell
yarn start
```

## Restful API call:

**IMDB metadata:**

> POST http://localhost:4000/imdb

| parameters | structure             | content-type     |
| ---------- | --------------------- | ---------------- |
| ids        | {"ids":["tt1254207"]} | application/json |

curl:

```shell
curl --location 'http://localhost:4000/imdb' \
--header 'Content-Type: application/json' \
--data '{"ids":["tt1254207"]}'
```

result:

```shell
[
    {
        "_id": "645351a28b5aa313e549c26b",
        "id": "tt1254207",
        "title": "Big Buck Bunny",
        "originalTitle": "",
        "fullTitle": "Big Buck Bunny (2008)",
        "type": "Movie",
        "year": "2008",
        "image": "https://m.media-amazon.com/images/M/MV5BNjRjYjRhNmQtNWE0YS00NWIwLWFhYjUtMTkzZTUwYTE4MTBiXkEyXkFqcGdeQXVyNjA3OTI5MjA@._V1_Ratio0.7117_AL_.jpg",
        "releaseDate": "2008-04-10",
        "runtimeMins": "10",
        "runtimeStr": "10min",
        "plot": "An enormous, fluffy, and utterly adorable rabbit is heartlessly harassed by the ruthless, loud, bullying gang of a flying squirrel, who is determined to squash his happiness.",
        "plotLocal": "",
        "plotLocalIsRtl": false,
        "awards": "Awards, 1 win",
        "directors": "Sacha Goedegebure",
        "directorList": [
            {
                "id": "nm3060230",
                "name": "Sacha Goedegebure"
            }
        ],
        "writers": "Sacha Goedegebure",
        "writerList": [
            {
                "id": "nm3060230",
                "name": "Sacha Goedegebure"
            }
        ],
        "stars": "",
        "starList": [],
        "actorList": [],
        "fullCast": null,
        "genres": "Animation, Short, Comedy",
        "genreList": [
            {
                "key": "Animation",
                "value": "Animation"
            },
            {
                "key": "Short",
                "value": "Short"
            },
            {
                "key": "Comedy",
                "value": "Comedy"
            }
        ],
        "companies": "Blender Foundation, Peach Open Movie Team",
        "companyList": [
            {
                "id": "co0180299",
                "name": "Blender Foundation"
            },
            {
                "id": "co0242828",
                "name": "Peach Open Movie Team"
            }
        ],
        "countries": "Netherlands",
        "countryList": [
            {
                "key": "Netherlands",
                "value": "Netherlands"
            }
        ],
        "languages": "None",
        "languageList": [
            {
                "key": "None",
                "value": "None"
            }
        ],
        "contentRating": "TV-Y7",
        "imDbRating": "6.4",
        "imDbRatingVotes": "2128",
        "metacriticRating": null,
        "ratings": null,
        "wikipedia": null,
        "posters": null,
        "images": null,
        "trailer": null,
        "boxOffice": {
            "budget": "€150,000 (estimated)",
            "openingWeekendUSA": "",
            "grossUSA": "",
            "cumulativeWorldwideGross": ""
        },
        "tagline": null,
        "keywords": "anthropomorphic animal,computer animation,experimental short,independent short,cg animation",
        "keywordList": [
            "anthropomorphic animal",
            "computer animation",
            "experimental short",
            "independent short",
            "cg animation"
        ],
        "similars": [
            {
                "id": "tt4957236",
                "title": "Cosmos Laundromat",
                "image": "https://m.media-amazon.com/images/M/MV5BODUwMjE4OTQ2Nl5BMl5BanBnXkFtZTgwMDE3NjQ2NjE@._V1_Ratio0.7343_AL_.jpg",
                "imDbRating": "6.9"
            },
            {
                "id": "tt6914802",
                "title": "Agent 327: Operation Barbershop",
                "image": "https://m.media-amazon.com/images/M/MV5BNWNjNzhiYjMtMGFmNy00YTQzLWJjMWQtZGRjZjNlMjhjNTE5XkEyXkFqcGdeQXVyMjgwMjk0NzA@._V1_Ratio0.7150_AL_.jpg",
                "imDbRating": "7.0"
            },
            {
                "id": "tt1727587",
                "title": "Sintel",
                "image": "https://m.media-amazon.com/images/M/MV5BMzc5NTUzNTgzMF5BMl5BanBnXkFtZTcwODcwMzQ5Mw@@._V1_Ratio0.7053_AL_.jpg",
                "imDbRating": "7.4"
            },
            {
                "id": "tt2285752",
                "title": "Tears of Steel",
                "image": "https://m.media-amazon.com/images/M/MV5BMTczMzQzNDE5NV5BMl5BanBnXkFtZTcwNzYwMzQ1OA@@._V1_Ratio0.6763_AL_.jpg",
                "imDbRating": "5.5"
            },
            {
                "id": "tt13716914",
                "title": "Coffee Run",
                "image": "https://m.media-amazon.com/images/M/MV5BNmVlNWMyODItNGFhYi00MWQ0LWI1YWQtOTJhNjhmOGI2NzViXkEyXkFqcGdeQXVyMjQ4ODQxNjI@._V1_Ratio0.6763_AL_.jpg",
                "imDbRating": "7.4"
            },
            {
                "id": "tt11541872",
                "title": "Big Bug",
                "image": "https://m.media-amazon.com/images/M/MV5BN2YxMzViODItZmRmYi00N2Y3LWI2ZDktNWZlODY0NjhhNGVlXkEyXkFqcGdeQXVyMTUwOTU0Mw@@._V1_Ratio0.6763_AL_.jpg",
                "imDbRating": "5.5"
            }
        ],
        "tvSeriesInfo": null,
        "tvEpisodeInfo": null,
        "errorMessage": ""
    }
]
```

**Image Proxy:**

_Proxy image and transform the image format to jpg at the backend, so as to satisfy the format requirement of shotit search api under certain scenarios._

> GET http://localhost:4000/proxy?url=

curl:

```shell
curl --location 'http://localhost:4000/proxy?url=https%3A%2F%2Fi.ibb.co%2Fqnwfks9%2Fbig-buck-bunny-4.png'
```

result:

```
A jpg file of Big Buck Bunny
```
