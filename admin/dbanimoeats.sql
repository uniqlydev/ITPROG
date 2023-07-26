
--
-- Table structure for table `Administrator`
--

CREATE TABLE `Administrator` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `uname` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,

  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Administrator`
--

INSERT INTO `Administrator` (`uname`, `password`) VALUES
('admin', 'admin');

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

CREATE TABLE Customer (
    id int(10) NOT NULL AUTO_INCREMENT,
    uname VARCHAR(100),
    main VARCHAR(40) ,
    sides VARCHAR(40),
    drinks VARCHAR(40),
    total DOUBLE NULL,
    date DATE,
    mquan INT(2) , # Quantity meal
    squan INT(2) , # Quantity Sides
    dquan INT(3) ,  # Quantity drinks
    priceOfMain  DOUBLE,
    priceOfSide  DOUBLE,
    priceOfDrink DOUBLE,
    # Setting up Primary key
    PRIMARY KEY (id)
);

CREATE TABLE Food (
    id int(10) NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    price DOUBLE  NOT NULL,
    image VARCHAR(255), # This will store the image path
    description TEXT,
    protein DOUBLE NOT NULL,
    type ENUM('M','S','D') NOT NULL,

    # Setting up Primary key
    PRIMARY KEY (id)
);

--
-- Dumping data for table `Food`
--

INSERT INTO `Food` (`name`, `price`, `image`, `description`, `protein`, `type`) VALUES
('Steak', 900, 'temporary', 'temporary', 100, 'M'),
('Salmon', 850, 'temporary', 'temporary', 100, 'M'),
('Chicken', 300, 'temporary', 'temporary', 100, 'M'),
('Baked Potato', 80, 'temporary', 'temporary', 100, 'S'),
('Mashed Potato', 75, 'temporary', 'temporary', 100, 'S'),
('Steamed Vegetables', 50, 'temporary', 'temporary', 100, 'S'),
('Ice Tea', 55, 'temporary', 'temporary', 100, 'D'),
('Root Beer', 60, 'temporary', 'temporary', 100, 'D'),
('Water', 20, 'temporary', 'temporary', 100, 'D');

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
-- AUTO_INCREMENT for table `ComboMeals`
--
ALTER TABLE `ComboMeals`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

