-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 18, 2021 at 08:35 PM
-- Server version: 10.4.6-MariaDB
-- PHP Version: 7.2.22

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `creole_studios`
--

-- --------------------------------------------------------

--
-- Table structure for table `addresses`
--

CREATE TABLE `addresses` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `address_one` varchar(255) DEFAULT NULL,
  `address_two` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `pin_code` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `addresses`
--

INSERT INTO `addresses` (`id`, `user_id`, `address_one`, `address_two`, `city`, `state`, `country`, `pin_code`) VALUES
(1, 1, 'address_one 1', 'address_one 1', 'city 1', 'state 1', 'country 1', 11111),
(2, 1, 'address_one 2', 'address_one 2', 'city 2', 'state 2', 'country 2', 22222),
(3, 1, 'address_one 1', 'address_one 1', 'city 1', 'state 1', 'country 1', 11111),
(4, 1, 'address_one 2', 'address_one 2', 'city 2', 'state 2', 'country 2', 22222),
(5, 1, 'address_one 1', 'address_one 1', 'city 1', 'state 1', 'country 1', 11111),
(6, 1, 'address_one 2', 'address_one 2', 'city 2', 'state 2', 'country 2', 22222),
(7, 1, 'address_one 1', 'address_one 1', 'city 1', 'state 1', 'country 1', 11111),
(8, 1, 'address_one 2', 'address_one 2', 'city 2', 'state 2', 'country 2', 22222),
(9, 1, 'address_one 1', 'address_one 1', 'city 1', 'state 1', 'country 1', 11111),
(10, 1, 'address_one 2', 'address_one 2', 'city 2', 'state 2', 'country 2', 22222),
(11, 1, 'address_one 1', 'address_one 1', 'city 1', 'state 1', 'country 1', 11111),
(12, 1, 'address_one 2', 'address_one 2', 'city 2', 'state 2', 'country 2', 22222),
(13, 1, 'address_one 1', 'address_one 1', 'city 1', 'state 1', 'country 1', 11111),
(14, 1, 'address_one 2', 'address_one 2', 'city 2', 'state 2', 'country 2', 22222);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `gender` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `gender`) VALUES
(1, 'demo', 'demo555@gmail.com', 'hemali123', 'xyz'),
(2, 'admin', 'test4294@gmail.com', 'test', 'male'),
(3, 'admin', 'test4295@gmail.com', 'test', 'male'),
(4, 'admin', 'shgohil1310@gmail.com', 'sumita', 'female'),
(5, 'admin', 'customer1@gmail.com', 'test', 'male'),
(6, 'hemali', 'hemalimakodiya92@gmail.com', 'hemali', 'female');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `addresses`
--
ALTER TABLE `addresses`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `addresses`
--
ALTER TABLE `addresses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `addresses`
--
ALTER TABLE `addresses`
  ADD CONSTRAINT `addresses_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
