# 🌦️ Weather API

<p align="center">
  <a href="http://nestjs.com/" target="blank">
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
</p>

---

## 🚀 Descripción

Este proyecto consiste en una API de clima que:

- Consume datos desde la API de **Visual Crossing**
- Implementa cache en memoria usando **Redis**
- Reduce llamadas externas mediante TTL (12 horas)
- Protege el servicio con **rate limiting**
- Registra eventos mediante **logging estructurado**
- Expone documentación interactiva con **Swagger**

---

## 🧠 Tecnologías utilizadas

- **Node.js**
- **NestJS**
- **TypeScript**
- **Redis (ioredis)**
- **Docker**
- **Swagger**
- **Axios**
- **Throttler (Rate Limiting)**
- **Pino (Logging)**

---

## ⚙️ Instalación

```bash
npm install

```

## 🌐 URL del Proyecto

[Ver repositorio en GitHub](https://weather-api-project-production.up.railway.app/)