-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 01, 2022 at 04:10 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cfg`
--

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `CustomerNum` char(3) NOT NULL,
  `CustomerName` char(35) NOT NULL,
  `Street` char(20) DEFAULT NULL,
  `City` char(15) DEFAULT NULL,
  `State` char(2) DEFAULT NULL,
  `PostalCode` char(5) DEFAULT NULL,
  `Balance` decimal(8,2) DEFAULT NULL,
  `CreditLimit` decimal(8,2) DEFAULT NULL,
  `RepNum` char(2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`CustomerNum`, `CustomerName`, `Street`, `City`, `State`, `PostalCode`, `Balance`, `CreditLimit`, `RepNum`) VALUES
('126', 'Toys Galore', '28 Laketon St.', 'Fullton', 'CA', '90085', '1210.25', '69.69', '15'),
('260', 'Brookings Direct', '452 Columbus Dr.', 'Grove', 'CA', '90092', '575.00', '10000.00', '30'),
('334', 'The Everything Shop', '342 Magee St.', 'Congaree', 'CA', '90097', '2345.75', '7500.00', '45'),
('386', 'Johnson\'s Department Store', '124 Main St.', 'Northfield', 'CA', '90098', '879.25', '7500.00', '30'),
('440', 'Grove Historical Museum Store', '3456 Central Ave.', 'Fullton', 'CA', '90085', '345.00', '5000.00', '45'),
('502', 'Cards and More', '167 Hale St.', 'Mesa', 'CA', '90104', '5025.75', '5000.00', '15'),
('586', 'Almondton General Store', '3345 Devon Ave.', 'Almondton', 'CA', '90125', '3456.75', '15000.00', '45'),
('665', 'Cricket Gift Shop', '372 Oxford St.', 'Grove', 'CA', '90092', '678.90', '7500.00', '30'),
('713', 'Cress Store', '12 Rising Sun Ave.', 'Congaree', 'CA', '90097', '4234.60', '10000.00', '15'),
('796', 'Unique Gifts', '786 Passmore St.', 'Northfield', 'CA', '90098', '124.75', '7500.00', '45'),
('824', 'Kline\'s', '945 Gilham St.', 'Mesa', 'CA', '90104', '2475.99', '15000.00', '30'),
('893', 'All Season Gifts', '382 Wildwood Ave.', 'Fullton', 'CA', '90085', '935.75', '7500.00', '15');

-- --------------------------------------------------------

--
-- Table structure for table `item`
--

CREATE TABLE `item` (
  `ItemNum` char(4) NOT NULL,
  `Description` char(30) DEFAULT NULL,
  `OnHand` decimal(4,0) DEFAULT NULL,
  `Category` char(3) DEFAULT NULL,
  `Storehouse` char(1) DEFAULT NULL,
  `Price` decimal(6,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `item`
--

INSERT INTO `item` (`ItemNum`, `Description`, `OnHand`, `Category`, `Storehouse`, `Price`) VALUES
('AH74', 'Patience', '9', 'GME', '3', '22.99'),
('BR23', 'Skittles', '21', 'GME', '2', '29.99'),
('CD33', 'Wood Block Set (48 piece)', '36', 'TOY', '1', '89.49'),
('DL51', 'Classic Railway Set', '12', 'TOY', '3', '107.95'),
('DR67', 'Giant Star Brain Teaser', '24', 'PZL', '2', '31.95'),
('DW23', 'Mancala', '40', 'GME', '3', '50.00'),
('FD11', 'Rocking Horse', '8', 'TOY', '3', '124.95'),
('FH24', 'Puzzle Gift Set', '65', 'PZL', '1', '38.95'),
('KA12', 'Cribbage Set', '56', 'GME', '3', '75.00'),
('KD34', 'Pentominoes Brain Teaser', '60', 'PZL', '2', '14.95'),
('KL78', 'Pick Up Sticks', '110', 'GME', '1', '10.95'),
('MT03', 'Zauberkasten Brain Teaser', '45', 'PZL', '1', '45.79'),
('NL89', 'Wood Block Set (62 piece)', '32', 'TOY', '3', '119.75'),
('TR40', 'Tic Tac Toe', '75', 'GME', '2', '13.99'),
('TW35', 'Fire Engine', '30', 'TOY', '2', '118.95');

-- --------------------------------------------------------

--
-- Table structure for table `orderline`
--

CREATE TABLE `orderline` (
  `orderNum` char(5) NOT NULL,
  `ItemNum` char(4) NOT NULL,
  `NumOrdered` decimal(3,0) DEFAULT NULL,
  `QuotedPrice` decimal(6,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `orderline`
--

INSERT INTO `orderline` (`orderNum`, `ItemNum`, `NumOrdered`, `QuotedPrice`) VALUES
('51608', 'CD33', '5', '86.99'),
('51610', 'KL78', '25', '10.95'),
('51610', 'TR40', '10', '13.99'),
('51613', 'DL51', '5', '104.95'),
('51614', 'FD11', '1', '124.95'),
('51617', 'NL89', '4', '115.99'),
('51617', 'TW35', '3', '116.95'),
('51619', 'FD11', '2', '121.95'),
('51623', 'DR67', '5', '29.95'),
('51623', 'FH24', '12', '36.95'),
('51623', 'KD34', '10', '13.10'),
('51625', 'MT03', '8', '45.79');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `OrderNum` char(5) NOT NULL,
  `OrderDate` date DEFAULT NULL,
  `CustomerNum` char(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`OrderNum`, `OrderDate`, `CustomerNum`) VALUES
('51608', '2015-10-12', '126'),
('51610', '2015-10-12', '334'),
('51613', '2015-10-13', '386'),
('51614', '2015-10-13', '260'),
('51617', '2015-10-15', '586'),
('51619', '2015-10-15', '126'),
('51623', '2015-10-15', '586'),
('51625', '2015-10-16', '796');

-- --------------------------------------------------------

--
-- Table structure for table `rep`
--

CREATE TABLE `rep` (
  `RepNum` char(2) NOT NULL,
  `LastName` char(15) DEFAULT NULL,
  `FirstName` char(15) DEFAULT NULL,
  `Street` char(15) DEFAULT NULL,
  `City` char(15) DEFAULT NULL,
  `State` char(2) DEFAULT NULL,
  `PostalCode` char(5) DEFAULT NULL,
  `Commission` decimal(7,2) DEFAULT NULL,
  `Rate` decimal(3,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `rep`
--

INSERT INTO `rep` (`RepNum`, `LastName`, `FirstName`, `Street`, `City`, `State`, `PostalCode`, `Commission`, `Rate`) VALUES
('15', 'Campos', 'Rafael', '724 Vinca Dr.', 'Grove', 'CA', '90092', '23457.50', '0.06'),
('30', 'Gradey', 'Megan', '632 Liatris St.', 'Fullton', 'CA', '90085', '41317.00', '0.08'),
('45', 'Tian', 'Hui', '1785 Tyler Ave.', 'Northfield', 'CA', '90098', '27789.25', '0.06'),
('60', 'Sefton', 'Janet', '267 Oakley St.', 'Congaree', 'CA', '90097', '0.00', '0.06'),
('75', 'Moore', 'Ethan', '123 Street', 'Bowling Green', 'KY', '42104', '30000.50', '0.07');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`CustomerNum`);

--
-- Indexes for table `item`
--
ALTER TABLE `item`
  ADD PRIMARY KEY (`ItemNum`);

--
-- Indexes for table `orderline`
--
ALTER TABLE `orderline`
  ADD PRIMARY KEY (`orderNum`,`ItemNum`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`OrderNum`);

--
-- Indexes for table `rep`
--
ALTER TABLE `rep`
  ADD PRIMARY KEY (`RepNum`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
