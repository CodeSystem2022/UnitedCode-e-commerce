CREATE DATABASE  IF NOT EXISTS `gothspooky` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `gothspooky`;
-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: gothspooky
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `carritos`
--

DROP TABLE IF EXISTS `carritos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `carritos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `usuarioId` int NOT NULL,
  `productoId` int NOT NULL,
  `cantidad` int NOT NULL DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `usuarioId` (`usuarioId`),
  KEY `productoId` (`productoId`),
  CONSTRAINT `carritos_ibfk_1` FOREIGN KEY (`usuarioId`) REFERENCES `usuarios` (`id`),
  CONSTRAINT `carritos_ibfk_2` FOREIGN KEY (`productoId`) REFERENCES `productos` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carritos`
--

LOCK TABLES `carritos` WRITE;
/*!40000 ALTER TABLE `carritos` DISABLE KEYS */;
/*!40000 ALTER TABLE `carritos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categorias`
--

DROP TABLE IF EXISTS `categorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categorias` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `productoId` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `productoId` (`productoId`),
  CONSTRAINT `categorias_ibfk_1` FOREIGN KEY (`productoId`) REFERENCES `productos` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorias`
--

LOCK TABLES `categorias` WRITE;
/*!40000 ALTER TABLE `categorias` DISABLE KEYS */;
INSERT INTO `categorias` VALUES (1,'Ofertas',1,'2023-10-23 18:59:41','2023-10-23 18:59:41'),(2,'Ingresantes',2,'2023-10-23 18:59:41','2023-10-23 18:59:41'),(3,'Accesorios',3,'2023-10-23 18:59:41','2023-10-23 18:59:41'),(4,'Arriba',4,'2023-10-23 18:59:41','2023-10-23 18:59:41'),(5,'Abajo',5,'2023-10-23 18:59:41','2023-10-23 18:59:41'),(6,'Ofertas',6,'2023-10-23 18:59:41','2023-10-23 18:59:41'),(7,'Ingresantes',7,'2023-10-23 18:59:41','2023-10-23 18:59:41'),(8,'Accesorios',8,'2023-10-23 18:59:41','2023-10-23 18:59:41');
/*!40000 ALTER TABLE `categorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `imagens`
--

DROP TABLE IF EXISTS `imagens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `imagens` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `productoId` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `productoId` (`productoId`),
  CONSTRAINT `imagens_ibfk_1` FOREIGN KEY (`productoId`) REFERENCES `productos` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `imagens`
--

LOCK TABLES `imagens` WRITE;
/*!40000 ALTER TABLE `imagens` DISABLE KEYS */;
INSERT INTO `imagens` VALUES (1,'producto1.jpg',1,'2023-10-23 18:59:41','2023-10-23 18:59:41'),(2,'producto2.jpg',2,'2023-10-23 18:59:41','2023-10-23 18:59:41'),(3,'producto3.jpg',3,'2023-10-23 18:59:41','2023-10-23 18:59:41'),(4,'producto4.jpg',4,'2023-10-23 18:59:41','2023-10-23 18:59:41'),(5,'producto1.jpg',5,'2023-10-23 18:59:41','2023-10-23 18:59:41'),(6,'producto2.jpg',6,'2023-10-23 18:59:41','2023-10-23 18:59:41'),(7,'producto3.jpg',7,'2023-10-23 18:59:41','2023-10-23 18:59:41'),(8,'producto4.jpg',8,'2023-10-23 18:59:41','2023-10-23 18:59:41');
/*!40000 ALTER TABLE `imagens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `precio` decimal(10,0) NOT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `stock` int DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (1,'Articulo 1',5000,'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur illo aliquam adipisci, totam sequi laborum blanditiis dolorem illum sit, quam nostrum saepe tenetur doloremque cum temporibus laudantium voluptatum veritatis. Nisi?',1,'2023-10-23 18:59:41','2023-10-23 18:59:41'),(2,'Articulo 2',10000,'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur illo aliquam adipisci, totam sequi laborum blanditiis dolorem illum sit, quam nostrum saepe tenetur doloremque cum temporibus laudantium voluptatum veritatis. Nisi?',1,'2023-10-23 18:59:41','2023-10-23 18:59:41'),(3,'Articulo 3',15000,'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur illo aliquam adipisci, totam sequi laborum blanditiis dolorem illum sit, quam nostrum saepe tenetur doloremque cum temporibus laudantium voluptatum veritatis. Nisi?',1,'2023-10-23 18:59:41','2023-10-23 18:59:41'),(4,'Articulo 4',25000,'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur illo aliquam adipisci, totam sequi laborum blanditiis dolorem illum sit, quam nostrum saepe tenetur doloremque cum temporibus laudantium voluptatum veritatis. Nisi?',1,'2023-10-23 18:59:41','2023-10-23 18:59:41'),(5,'Articulo 5',5000,'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur illo aliquam adipisci, totam sequi laborum blanditiis dolorem illum sit, quam nostrum saepe tenetur doloremque cum temporibus laudantium voluptatum veritatis. Nisi?',1,'2023-10-23 18:59:41','2023-10-23 18:59:41'),(6,'Articulo 6',10000,'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur illo aliquam adipisci, totam sequi laborum blanditiis dolorem illum sit, quam nostrum saepe tenetur doloremque cum temporibus laudantium voluptatum veritatis. Nisi?',1,'2023-10-23 18:59:41','2023-10-23 18:59:41'),(7,'Articulo 7',15000,'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur illo aliquam adipisci, totam sequi laborum blanditiis dolorem illum sit, quam nostrum saepe tenetur doloremque cum temporibus laudantium voluptatum veritatis. Nisi?',1,'2023-10-23 18:59:41','2023-10-23 18:59:41'),(8,'Articulo 8',25000,'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur illo aliquam adipisci, totam sequi laborum blanditiis dolorem illum sit, quam nostrum saepe tenetur doloremque cum temporibus laudantium voluptatum veritatis. Nisi?',1,'2023-10-23 18:59:41','2023-10-23 18:59:41');
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sequelizemeta`
--

DROP TABLE IF EXISTS `sequelizemeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sequelizemeta`
--

LOCK TABLES `sequelizemeta` WRITE;
/*!40000 ALTER TABLE `sequelizemeta` DISABLE KEYS */;
INSERT INTO `sequelizemeta` VALUES ('20231023174049-create-producto.js'),('20231023174526-create-categoria.js'),('20231023174617-create-imagen.js'),('20231023175557-create-usuario.js'),('20231023175558-create-carrito.js');
/*!40000 ALTER TABLE `sequelizemeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `apellido` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `contraseña` varchar(255) NOT NULL,
  `nombreUsuario` varchar(255) NOT NULL,
  `fechaDeNacimiento` datetime NOT NULL,
  `admin` tinyint(1) NOT NULL,
  `imagen` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'Prueba','Pepito','prueba@gmail.com','1234','Pepito1234','2000-12-12 00:00:00',1,'prueba.png','2023-10-23 18:59:41','2023-10-23 18:59:41');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-10-26  0:31:09
