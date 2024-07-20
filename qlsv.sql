-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 20, 2024 at 05:37 AM
-- Server version: 10.1.36-MariaDB
-- PHP Version: 5.6.38

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `perpus2`
--

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `IDadmin` int(11) NOT NULL,
  `nama` varchar(255) NOT NULL,
  `alamat` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`IDadmin`, `nama`, `alamat`) VALUES
(1, 'salsa', 'jln ki ageng pemanahan'),
(2, 'salsa', 'sleman, jogja'),
(4, 'anna', 'depok'),
(5, 'anna', 'depok'),
(6, 'anna', 'depok'),
(7, 'arum', 'depok'),
(8, 'nana', 'depok'),
(10, 'Mellisa', 'perumnas nikan'),
(11, 'mawar', 'makasar'),
(12, 'winter', 'depok');

-- --------------------------------------------------------

--
-- Table structure for table `anggota`
--

CREATE TABLE `anggota` (
  `IDanggota` int(11) NOT NULL,
  `nama` varchar(255) DEFAULT NULL,
  `noHP` int(11) NOT NULL,
  `IDtransaksi` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `anggota`
--

INSERT INTO `anggota` (`IDanggota`, `nama`, `noHP`, `IDtransaksi`) VALUES
(1, 'lala', 2, NULL),
(3, 'sandy', 4, NULL),
(5, 'nurul', 3, NULL),
(6, 'sarah', 2, NULL),
(7, 'nana', 23456, NULL),
(8, 'nana', 23456, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `bukus`
--

CREATE TABLE `bukus` (
  `IDbuku` int(11) NOT NULL,
  `judul` varchar(255) NOT NULL,
  `pengarang` varchar(255) DEFAULT NULL,
  `penerbit` varchar(255) DEFAULT NULL,
  `isbn` int(11) NOT NULL,
  `tahunTerbit` int(11) NOT NULL,
  `IDtransaksi` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `bukus`
--

INSERT INTO `bukus` (`IDbuku`, `judul`, `pengarang`, `penerbit`, `isbn`, `tahunTerbit`, `IDtransaksi`) VALUES
(2, 'hello cello', 'nadia', 'kawah media', 2147483647, 2024, NULL),
(3, 'dilan', 'pidi baiq', 'Mizan Publishing', 2147483647, 2015, NULL),
(5, 'dilan', 'pidi baiq', 'Mizan Publishing', 2147483647, 2015, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `pengembalians`
--

CREATE TABLE `pengembalians` (
  `IDpengembalian` int(11) NOT NULL,
  `tanggalPengembalian` int(11) NOT NULL,
  `denda` int(11) NOT NULL,
  `total` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pengembalians`
--

INSERT INTO `pengembalians` (`IDpengembalian`, `tanggalPengembalian`, `denda`, `total`) VALUES
(1, 14, 0, 0),
(3, 17, 0, 0),
(4, 17, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `transaksis`
--

CREATE TABLE `transaksis` (
  `IDtransaksi` int(11) NOT NULL,
  `tanggalPeminjaman` int(11) DEFAULT NULL,
  `IDanggota` int(11) DEFAULT NULL,
  `IDbuku` int(11) DEFAULT NULL,
  `IDpengembalian` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `transaksis`
--

INSERT INTO `transaksis` (`IDtransaksi`, `tanggalPeminjaman`, `IDanggota`, `IDbuku`, `IDpengembalian`) VALUES
(1, 22, 1, 2, 1),
(3, 22, 1, 2, 1),
(4, 22, 1, 2, 1),
(5, 22, 1, 2, 1),
(6, 22, NULL, NULL, 3),
(10, 22, 8, 2, 4);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` enum('admin','user') NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `profilePic` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `role`, `createdAt`, `updatedAt`, `profilePic`) VALUES
(1, 'iwan gunawan', '$2a$10$YYZeGGizL/ZCm1ntNO0PeOOcNikbpNt14HF96mSo8RZOMPrsAaCum', 'admin', '2024-07-19 01:55:47', '2024-07-19 01:55:47', NULL),
(2, 'karina', '$2a$10$6U.fSAflQ6dUtoXIPhilI.X275UeO3tJbmTqguUUoCGyBTFIgkjma', 'admin', '2024-07-19 02:04:39', '2024-07-19 02:04:39', NULL),
(3, 'winter', '$2a$10$xQ.SA6mjt6q4x5ef7vRb/OiwByZk36TbgfXgWgrLulycN49tnlZmK', 'admin', '2024-07-19 02:57:37', '2024-07-19 02:57:37', NULL),
(5, 'nala', '$2a$10$GOIzqaRduBImSugsqVakIu4G668S1O5ZhBLI8CIlOiAHvwaStUk0S', 'admin', '2024-07-19 06:19:42', '2024-07-19 06:19:42', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`IDadmin`);

--
-- Indexes for table `anggota`
--
ALTER TABLE `anggota`
  ADD PRIMARY KEY (`IDanggota`),
  ADD KEY `IDtransaksi` (`IDtransaksi`);

--
-- Indexes for table `bukus`
--
ALTER TABLE `bukus`
  ADD PRIMARY KEY (`IDbuku`),
  ADD KEY `IDtransaksi` (`IDtransaksi`);

--
-- Indexes for table `pengembalians`
--
ALTER TABLE `pengembalians`
  ADD PRIMARY KEY (`IDpengembalian`);

--
-- Indexes for table `transaksis`
--
ALTER TABLE `transaksis`
  ADD PRIMARY KEY (`IDtransaksi`),
  ADD KEY `IDanggota` (`IDanggota`),
  ADD KEY `IDbuku` (`IDbuku`),
  ADD KEY `IDpengembalian` (`IDpengembalian`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `username_2` (`username`),
  ADD UNIQUE KEY `username_3` (`username`),
  ADD UNIQUE KEY `username_4` (`username`),
  ADD UNIQUE KEY `username_5` (`username`),
  ADD UNIQUE KEY `username_6` (`username`),
  ADD UNIQUE KEY `username_7` (`username`),
  ADD UNIQUE KEY `username_8` (`username`),
  ADD UNIQUE KEY `username_9` (`username`),
  ADD UNIQUE KEY `username_10` (`username`),
  ADD UNIQUE KEY `username_11` (`username`),
  ADD UNIQUE KEY `username_12` (`username`),
  ADD UNIQUE KEY `username_13` (`username`),
  ADD UNIQUE KEY `username_14` (`username`),
  ADD UNIQUE KEY `username_15` (`username`),
  ADD UNIQUE KEY `username_16` (`username`),
  ADD UNIQUE KEY `username_17` (`username`),
  ADD UNIQUE KEY `username_18` (`username`),
  ADD UNIQUE KEY `username_19` (`username`),
  ADD UNIQUE KEY `username_20` (`username`),
  ADD UNIQUE KEY `username_21` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `IDadmin` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `anggota`
--
ALTER TABLE `anggota`
  MODIFY `IDanggota` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `bukus`
--
ALTER TABLE `bukus`
  MODIFY `IDbuku` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `pengembalians`
--
ALTER TABLE `pengembalians`
  MODIFY `IDpengembalian` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `transaksis`
--
ALTER TABLE `transaksis`
  MODIFY `IDtransaksi` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `anggota`
--
ALTER TABLE `anggota`
  ADD CONSTRAINT `anggota_ibfk_1` FOREIGN KEY (`IDtransaksi`) REFERENCES `transaksis` (`IDtransaksi`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `bukus`
--
ALTER TABLE `bukus`
  ADD CONSTRAINT `bukus_ibfk_1` FOREIGN KEY (`IDtransaksi`) REFERENCES `transaksis` (`IDtransaksi`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `transaksis`
--
ALTER TABLE `transaksis`
  ADD CONSTRAINT `transaksis_ibfk_259` FOREIGN KEY (`IDanggota`) REFERENCES `anggota` (`IDanggota`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `transaksis_ibfk_260` FOREIGN KEY (`IDbuku`) REFERENCES `bukus` (`IDbuku`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `transaksis_ibfk_261` FOREIGN KEY (`IDpengembalian`) REFERENCES `pengembalians` (`IDpengembalian`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
