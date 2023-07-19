-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jul 19, 2023 at 01:22 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dbanimoeats`
--

-- --------------------------------------------------------

--
-- Table structure for table `Administrator`
--

CREATE TABLE `Administrator` (
  `id` int(10) NOT NULL,
  `uname` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Administrator`
--

INSERT INTO `Administrator` (`id`, `uname`, `password`) VALUES
(1, 'admin', 'admin');

-- --------------------------------------------------------

--
-- Table structure for table `ComboMeals`
--

CREATE TABLE `ComboMeals` (
  `id` int(10) NOT NULL,
  `name` varchar(100) NOT NULL,
  `discount` double NOT NULL,
  `main` varchar(40) NOT NULL,
  `sides` varchar(40) NOT NULL,
  `drinks` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `ComboMeals`
--

INSERT INTO `ComboMeals` (`id`, `name`, `discount`, `main`, `sides`, `drinks`) VALUES
(1, 'Chicken Mash Tea Combo', 0.1, 'Chicken', 'Mashed Potato', 'Ice Tea'),
(2, 'Steak Veg Beer Combo', 0.15, 'Steak', 'Steamed Vegetables', 'Root Beer');

-- --------------------------------------------------------

--
-- Table structure for table `Customer`
--

CREATE TABLE `Customer` (
  `id` int(10) NOT NULL,
  `uname` varchar(100) DEFAULT NULL,
  `main` varchar(40) DEFAULT NULL,
  `sides` varchar(40) DEFAULT NULL,
  `drinks` varchar(40) DEFAULT NULL,
  `total` double DEFAULT NULL,
  `date` date DEFAULT NULL,
  `mquan` int(2) DEFAULT NULL,
  `squan` int(2) DEFAULT NULL,
  `dquan` int(3) DEFAULT NULL,
  `priceOfMain` double DEFAULT NULL,
  `priceOfSide` double DEFAULT NULL,
  `priceOfDrink` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Food`
--

CREATE TABLE `Food` (
  `id` int(10) NOT NULL,
  `name` varchar(100) NOT NULL,
  `price` double NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `protein` double NOT NULL,
  `type` enum('M','S','D') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Food`
--

INSERT INTO `Food` (`id`, `name`, `price`, `image`, `description`, `protein`, `type`) VALUES
(1, 'Steak', 900, 'temporary', 'temporary', 100, 'M'),
(2, 'Salmon', 850, 'temporary', 'temporary', 100, 'M'),
(3, 'Chicken', 300, 'temporary', 'temporary', 100, 'M'),
(4, 'Baked Potato', 80, 'temporary', 'temporary', 100, 'S'),
(5, 'Mashed Potato', 75, 'temporary', 'temporary', 100, 'S'),
(6, 'Steamed Vegetables', 50, 'temporary', 'temporary', 100, 'S'),
(7, 'Ice Tea', 55, 'temporary', 'temporary', 100, 'D'),
(8, 'Root Beer', 60, 'temporary', 'temporary', 100, 'D'),
(9, 'Water', 20, 'temporary', 'temporary', 100, 'D');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Administrator`
--
ALTER TABLE `Administrator`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ComboMeals`
--
ALTER TABLE `ComboMeals`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Customer`
--
ALTER TABLE `Customer`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Food`
--
ALTER TABLE `Food`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Administrator`
--
ALTER TABLE `Administrator`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `ComboMeals`
--
ALTER TABLE `ComboMeals`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `Customer`
--
ALTER TABLE `Customer`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Food`
--
ALTER TABLE `Food`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
