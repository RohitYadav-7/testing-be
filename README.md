# testing-be

Simple Express backend for deployment testing.

## Setup

```bash
npm install
cp .env.example .env
npm run dev
```

## Endpoints

- `GET /health`
- `GET /api/message`

## Production

```bash
npm start
```

## Docker

```bash
docker build -t testing-be .
docker run -p 5000:5000 --env-file .env testing-be
```
