# 🌦️ Weather API

<p align="center">
  <a href="https://nestjs.com/" target="blank">
    <img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" />
  </a>
</p>

<p align="center">
  API REST desarrollada con <b>NestJS</b> y <b>TypeScript</b> que consume datos climáticos desde una API externa, implementando <b>caching con Redis</b>, <b>rate limiting</b> y <b>logging estructurado</b>.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/node.js-18+-green" />
  <img src="https://img.shields.io/badge/nestjs-framework-red" />
  <img src="https://img.shields.io/badge/typescript-language-blue" />
  <img src="https://img.shields.io/badge/redis-cache-orange" />
  <img src="https://img.shields.io/badge/docker-ready-blue" />
  <img src="https://img.shields.io/badge/status-production-brightgreen" />
</p>

---

## 🚀 Descripción
```

Este proyecto consiste en una API de clima que:

- Consume datos desde la API de **Visual Crossing**
- Implementa cache en memoria usando **Redis**
- Reduce llamadas externas mediante TTL (12 horas)
- Protege el servicio con **rate limiting**
- Registra eventos mediante **logging estructurado**
- Expone documentación interactiva con **Swagger**

```

## 🧠 Arquitectura

```text
Client → Controller → Service → Cache (Redis) → External API

```

## 🔄 Flujo de datos

1. El cliente solicita `/weather?city=...`
2. Se busca en cache (Redis)
3. Si existe → 🔥 respuesta inmediata (Cache HIT)
4. Si no existe → 🌐 llamada a API externa
5. Se guarda en cache con TTL (12 horas)
6. Se retorna respuesta al cliente

---

## 📌 Origen del Proyecto

```

Este proyecto está basado en el challenge backend de roadmap.sh:

👉 https://roadmap.sh/projects/weather-api-wrapper-service

```

## ⚙️ Características principales

```
- ✅ Integración con API externa (Visual Crossing)
- ✅ Cache con Redis (TTL configurable)
- ✅ Rate limiting (protección contra abuso)
- ✅ Logging estructurado con Pino
- ✅ Documentación automática con Swagger
- ✅ Manejo de errores robusto
- ✅ Variables de entorno seguras
- ✅ Docker ready
- ✅ Deploy en la nube (Railway)

```


## 🧪 Ejemplo de respuesta

```json
{
  "city": "Santiago",
  "temperature": 22.5,
  "description": "Partially cloudy",
  "humidity": 60,
  "datetime": "2026-03-18T14:00:00"
}

```

## 🧠 Tecnologías utilizadas

```

Node.js

NestJS

TypeScript

Redis (ioredis)

Docker

Swagger

Axios

Throttler (Rate Limiting)

Pino (Logging)

```

## ⚙️ Instalación
```

npm install

```

## 💻 Ejecución local

```

npm run start:dev

```

## 🐳 Ejecución con Docker
```
docker-compose build
docker-compose up

```
## 📊 Rate Limiting

Configurado para:

10 requests por minuto por IP

---
## ⚡ Cache (Redis)

Clave: weather:{city}

TTL: 12 horas (43200 segundos)

---
## ❗ Manejo de errores

400 → Parámetros inválidos

502 → Error en API externa

429 → Rate limit excedido

## 🚀 Live Demo

🌍 API Base URL:
https://weather-api-project-production.up.railway.app/

🔎 Example Request:
https://weather-api-project-production.up.railway.app/weather?city=Santiago


## 📈 Mejoras futuras

 Soporte para pronóstico extendido

 Autenticación (API Key propia)

 Métricas (Prometheus / Grafana)

 Tests automatizados (unit + e2e)

 CI/CD pipeline

## 👨‍💻 Autor

Desarrollado por Bastián Toledo Salas