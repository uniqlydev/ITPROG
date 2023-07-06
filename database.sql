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
    type ENUM('M','S','D') DEFAULT 'M' NOT NULL,

    # Setting up Primary key
    PRIMARY KEY (id)
);