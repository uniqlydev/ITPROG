CREATE TABLE Customer (
                        id int(10) NOT NULL AUTO_INCREMENT,
                        main VARCHAR(40) ,
                        sides VARCHAR(40),
                        drinks VARCHAR(40),
                        total DOUBLE NULL,
                        date DATE,
                        mquan INT(2) NOT NULL , # Quantity meal
                        squan INT(2) NOT NULL, # Quantity Sides
                        dquan INT(3) NOT NULL,  # Quantity drinks
                        # Setting up Primary key
                        PRIMARY KEY (id)
);

CREATE TABLE mains (
                        main VARCHAR(40),
                        price DOUBLE,
                        # Setting up primary key
                        PRIMARY KEY (main)
);

CREATE TABLE sides (
                        side VARCHAR(40),
                        price DOUBLE,
                        # Setting up primary key
                        PRIMARY KEY (side)
);

CREATE TABLE drink (
                        drink VARCHAR(40),
                        price DOUBLE,
                        # Setting up primary key
                        PRIMARY KEY (drink)
);