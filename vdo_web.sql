CREATE DATABASE  IF NOT EXISTS `vandeoost_web` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `vandeoost_web`;
-- MySQL dump 10.13  Distrib 5.6.19, for osx10.7 (i386)
--
-- Host: localhost    Database: vandeoost_web
-- ------------------------------------------------------
-- Server version	5.6.21

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `admin` (
  `id` varchar(20) NOT NULL,
  `password` varchar(40) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES ('123','123'),('admin','rksmdgks907Qkffl!');
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comment`
--

DROP TABLE IF EXISTS `comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `comment` (
  `commentID` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  `comment` varchar(45) NOT NULL,
  `news_ID` bigint(20) unsigned NOT NULL,
  PRIMARY KEY (`commentID`),
  KEY `fk_news_id_idx` (`news_ID`),
  CONSTRAINT `fk_news_id` FOREIGN KEY (`news_ID`) REFERENCES `news` (`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=133 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comment`
--

LOCK TABLES `comment` WRITE;
/*!40000 ALTER TABLE `comment` DISABLE KEYS */;
INSERT INTO `comment` VALUES (100,'test','                test',95),(101,'hellowhoewthiowehoihewt','                adsgsdagsadgsdgsdga',95),(102,'gaasdfgsdag','hehweotehowehotiewhoiewhtphewpohteoihewqpothe',95),(125,'sadf','asdf',94),(126,'sadg','sdg',94),(127,'sdag','dfsgdfdsfhhfds',90),(128,'sdfhsdfh','dsfhshdf',90),(129,'sdfhshdf','fdhssdfh',87),(130,'sdfhsfdh','shdfshdf',87),(131,'sdfhsdhfhsfd','hfdsdfh',85),(132,'','',85);
/*!40000 ALTER TABLE `comment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `news`
--

DROP TABLE IF EXISTS `news`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `news` (
  `ID` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `post_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `post_title` varchar(50) NOT NULL DEFAULT 'Untitled',
  `post_summary` varchar(80) NOT NULL,
  `post_content` longtext,
  `post_type` varchar(20) NOT NULL DEFAULT 'news',
  `post_img` varchar(65) DEFAULT './image/news/default.gif',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=96 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `news`
--

LOCK TABLES `news` WRITE;
/*!40000 ALTER TABLE `news` DISABLE KEYS */;
INSERT INTO `news` VALUES (5,'2014-10-29 03:16:49','Hello,WolrD!!','first post!! TEST','first post!! TEST','news','http://cfile7.uf.tistory.com/original/277A5F4E53795DE709CFBA'),(6,'2014-10-29 03:16:49','2nd PosT!!','IKKOM VANDEOOST','IKKOM VANDEOOST\\nIKKOM VANDEOOST\\nIKKOM VANDEOOST\\nIKKOM VANDEOOST\\nIKKOM VANDEOOST\\nIKKOM VANDEOOST\\nIKKOM VANDEOOST\\nIKKOM VANDEOOST\\nIKKOM VANDEOOST\\nIKKOM VANDEOOST\\nIKKOM VANDEOOST\\nIKKOM VANDEOOST\\nIKKOM VANDEOOST\\nIKKOM VANDEOOST\\nIKKOM VANDEOOST\\nIKKOM VANDEOOST\\nIKKOM VANDEOOST\\nIKKOM VANDEOOST\\nIKKOM VANDEOOST\\nIKKOM VANDEOOST\\nIKKOM VANDEOOST\\nIKKOM VANDEOOST\\nIKKOM VANDEOOST\\nIKKOM VANDEOOST\\nIKKOM VANDEOOST\\nIKKOM VANDEOOST\\nIKKOM VANDEOOST\\nIKKOM VANDEOOST\\nIKKOM VANDEOOST\\nIKKOM VANDEOOST\\nIKKOM VANDEOOST\\nIKKOM VANDEOOST\\nIKKOM VANDEOOST\\nIKKOM VANDEOOST\\nIKKOM VANDEOOST\\n','news','./image/news/00.jpg'),(7,'2014-10-30 03:36:38','TESTPOST','testgogogo','testgogogo','news','./image/news/01.jpg'),(8,'2014-10-30 03:36:38','2015 Ultra Music Festival!!','sgsdgsagd','sgsdgsagd','news','\'./image/news/default.gif\''),(9,'2014-10-30 03:45:30','Van de oost live party!!!','coming soon','coming soon','news','\'./image/news/default.gif\''),(11,'2014-10-30 03:51:36','Last Post for you guys!','nowoman no cry','nowoman no cry','news','\'./image/news/default.gif\''),(29,'2014-10-31 21:15:24','sadgsdgsd','sdfgsdfgsgd','sdfgsdfgsdfg','news','./image/news/default.gif'),(30,'2014-10-31 21:15:24','1111','22','33','news','./image/news/default.gif'),(31,'2014-10-31 21:15:24','555','66','77','news','./image/news/default.gif'),(32,'2014-10-31 21:15:24','4577','6567','457','news','./image/news/default.gif'),(33,'2014-10-31 21:15:24','4747','76','4557','news','./image/news/default.gif'),(35,'2014-10-31 21:15:24','sdfsdfwe4t6','dsfhsdhhsd','5','news','./image/news/default.gif'),(36,'2014-10-31 21:15:24','Untitled','sdhdsh','sdhdsh','news','./image/news/default.gif'),(37,'2014-10-31 21:15:24','Untitled','shdsh','sh','news','./image/news/default.gif'),(38,'2014-10-31 21:15:24','Untitled','shdhds','shdsdhdhs','news','./image/news/default.gif'),(39,'2014-10-31 21:15:24','Untitled','dshdshsd','sh','news','./image/news/default.gif'),(40,'2014-10-31 21:15:24','sadgsdgsd','sdfgsdfgsgd','sdfgsdfgsdfg','news','./image/news/default.gif'),(41,'2014-10-31 21:15:25','1111','22','33','news','./image/news/default.gif'),(42,'2014-10-31 21:15:25','555','66','77','news','./image/news/default.gif'),(43,'2014-10-31 21:15:25','4577','6567','457','news','./image/news/default.gif'),(44,'2014-10-31 21:15:25','4747','76','4557','news','./image/news/default.gif'),(45,'2014-10-31 21:15:25','436436dsfg','657','574','news','./image/news/default.gif'),(46,'2014-10-31 21:15:25','sdfsdfwe4t6','dsfhsdhhsd','5','news','./image/news/default.gif'),(47,'2014-10-31 21:15:25','Untitled','sdhdsh','sdhdsh','news','./image/news/default.gif'),(48,'2014-10-31 21:15:25','Untitled','shdsh','sh','news','./image/news/default.gif'),(50,'2014-10-31 21:15:25','Untitled','dshdshsd','sh','news','./image/news/default.gif'),(51,'2014-10-31 21:15:25','sadgsdgsd','sdfgsdfgsgd','sdfgsdfgsdfg','news','./image/news/default.gif'),(52,'2014-10-31 21:15:25','1111','22','33','news','./image/news/default.gif'),(53,'2014-10-31 21:15:25','555','66','77','news','./image/news/default.gif'),(54,'2014-10-31 21:15:25','4577','6567','457','news','./image/news/default.gif'),(55,'2014-10-31 21:15:25','4747','76','4557','news','./image/news/default.gif'),(56,'2014-10-31 21:15:25','436436dsfg','657','574','news','./image/news/default.gif'),(57,'2014-10-31 21:15:25','sdfsdfwe4t6','dsfhsdhhsd','5','news','./image/news/default.gif'),(58,'2014-10-31 21:15:25','Untitled','sdhdsh','sdhdsh','news','./image/news/default.gif'),(59,'2014-10-31 21:15:25','Untitled','shdsh','sh','news','./image/news/default.gif'),(60,'2014-10-31 21:15:25','Untitled','shdhds','shdsdhdhs','news','./image/news/default.gif'),(61,'2014-10-31 21:15:25','Untitled','dshdshsd','sh','news','./image/news/default.gif'),(62,'2014-10-31 21:15:25','sadgsdgsd','sdfgsdfgsgd','sdfgsdfgsdfg','news','./image/news/default.gif'),(63,'2014-10-31 21:15:25','1111','22','33','news','./image/news/default.gif'),(64,'2014-10-31 21:15:25','555','66','77','news','./image/news/default.gif'),(65,'2014-10-31 21:15:25','4577','6567','457','news','./image/news/default.gif'),(66,'2014-10-31 21:15:25','4747','76','4557','news','./image/news/default.gif'),(70,'2014-10-31 21:15:25','Untitled','shdsh','sh','news','./image/news/default.gif'),(71,'2014-10-31 21:15:25','Untitled','shdhds','shdsdhdhs','news','./image/news/default.gif'),(72,'2014-10-31 21:15:25','Soon to be released!<br>The NOD  - VandeOost','','We are glad to announce that our first track The Nod - Van de Oost will be released soon. The details will be informed soon.<br>\nIf you want to keep up with our stuff, follow us on <a href=\"http://facebook.com/vandeoost\"><div class=\"inTextImg\"  style=\"background-image : url(../image/sns/facebook_bw.png)\"></div></a>\n<a href=\"http://instagram.com/vandeoost\"><div class=\"inTextImg\"  style=\"background-image : url(../image/sns/instagram_bw.gif)\"></div></a>\n<a href=\"http://soundcloud.com/vandeoost\">\n<div class=\"inTextImg\"  style=\"background-image : url(../image/sns/soundcloud_bw.png)\"></div>\n</a>\n <br>\n<br>\nCheck out the teaser video below.<br>','news','./image/news/default.gif'),(85,'2014-12-18 02:36:07','first test','test','test without pics','news','./image/news/default.gif'),(87,'2014-12-18 02:39:07','third','thirs','why pic nnonon','news','./image/news/20141217183907_third.png'),(90,'2014-12-18 16:32:51','test','test','hello        ','news','./image/news/20141218083251_test.jpg'),(94,'2014-12-18 16:40:35','bb','bb','bb','news','./image/news/20141218084035_bb.jpg'),(95,'2014-12-18 16:42:17','sdahg;l dsagasd','saggsd','                asdgasgdtest','news','./image/news/20141218084217.jpg');
/*!40000 ALTER TABLE `news` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `releases`
--

DROP TABLE IF EXISTS `releases`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `releases` (
  `ID` bigint(20) unsigned NOT NULL DEFAULT '0',
  `img_src` varchar(80) NOT NULL,
  `title` varchar(60) NOT NULL,
  `artist` varchar(60) NOT NULL,
  `release_date` varchar(60) DEFAULT NULL,
  PRIMARY KEY (`ID`),
  CONSTRAINT `releases_ibfk_1` FOREIGN KEY (`ID`) REFERENCES `news` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `releases`
--

LOCK TABLES `releases` WRITE;
/*!40000 ALTER TABLE `releases` DISABLE KEYS */;
INSERT INTO `releases` VALUES (55,'image/releases/vdo.jpg','vandeoost','thenod','141108'),(56,'image/releases/ogri.png','241','42','42'),(57,'image/releases/vdo.jpg','vandeoost','thenod','141108'),(58,'image/releases/ogri.png','241','42','42'),(59,'image/releases/vdo.jpg','vandeoost','thenod','141108'),(60,'image/releases/ogri.png','241','42','42'),(61,'image/releases/vdo.jpg','vandeoost','thenod','141108'),(62,'image/releases/ogri.png','241','42','42'),(63,'image/releases/vdo.jpg','vandeoost','thenod','141108'),(64,'image/releases/ogri.png','241','42','42'),(65,'image/releases/vdo.jpg','vandeoost','thenod','141108'),(66,'image/releases/ogri.png','241','42','42'),(70,'image/releases/ogri.png','241','42','42'),(71,'image/releases/ogri.png','241','42','42'),(72,'image/releases/vdo.jpg','vandeoost','thenod','141108');
/*!40000 ALTER TABLE `releases` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2015-01-08 13:49:14
