
CREATE TABLE Adminstrator (
    id int(10) NOT NULL AUTO_INCREMENT,
    uname VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,

    # Setting up Primary key
    PRIMARY KEY (id)
);

CREATE TABLE ComboMeals (
    id int(10) NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    discount DOUBLE NOT NULL,
    main VARCHAR(40) NOT NULL,
    sides VARCHAR(40) NOT NULL,
    drinks VARCHAR(40) NOT NULL,

    PRIMARY KEY (id)


);


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
    discount DOUBLE NULL,
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


-- Dumping data for table `Food` --
INSERT INTO Food (name,price,image,description,protein,type) VALUES
('Rib-eye Steak', 900, 'https://dinnerthendessert.com/wp-content/uploads/2017/12/Ribeye-Steak2-1-scaled.jpg', 'Indulge in sumptuous perfection with our mouthwatering Ribeye Steak. Juicy and tender, seared to create a tantalizing crust, a true culinary delight.',100,'M'),
('Salmon',850, 'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2021/06/Salmon-Steak-main-1.jpg','Experience a symphony of flavors with our sensational Salmon Steak. Delicate and flaky, grilled to perfection with a buttery touch and hints of lemon and herbs.', 100,'M'),
('Chicken',300, 'https://grandbaby-cakes.com/wp-content/uploads/2014/10/chicken-fried-steak-4.jpg','Indulge in the savory bliss of our Chicken Steak, grilled to perfection with tantalizing spices. Savor the moist, tender chicken with a crispy exterior, complemented by fresh veggies and a velvety sauce. A fulfilling, comforting delight awaits you!', 100,'M'),
('Baked Potato', 80,'https://assets.bonappetit.com/photos/5b106867cb25b938fafaaaca/16:9/w_2911,h_1637,c_limit/perfect-baked-potato.jpg','Delight in the comforting simplicity of our Baked Potato. Crispy on the outside, fluffy on the inside, a perfect blend of butter and herbs tops off this classic side dish',30,'S'),
('Mashed Potato',75,'https://images-gmi-pmc.edge-generalmills.com/1156f4ec-29c8-4cd9-80db-7d4ee330b1d0.jpg','Experience pure comfort with our velvety Mashed Potato. Whipped to perfection, a luscious blend of buttery goodness and creamy delight, offering a truly satisfying experience.',60,'S'),
('Steamed Vegetables', 50, 'https://images-gmi-pmc.edge-generalmills.com/5bce0f7f-53dc-4fe1-9331-dfb2fe038c69.jpg','Embrace the freshness of nature with our vibrant Steamed Vegetables. Lightly steamed to preserve nutrients and flavors, each tender bite bursts with wholesome goodness and delightful textures.',10,'S'),
('Iced Tea',55,'https://www.thespruceeats.com/thmb/qZHEIJ6CQIgYPUW4w1MCoOS8DGo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/oolong-iced-tea-recipe-766389-hero-07-1cc310d9aa8f497b8f78bb7021fd0e5c.jpg','Oolong Iced Tea freshly made everyday with fresh lemons',34,'D'),
('Root Beer', 60, 'https://parade.com/.image/t_share/MTk4MzgzODg5MjUxNTc1MzQy/best-root-beer-brands.jpg','Fresh out of the box ingredients made by our head LaSallian Chef', 67, 'D'),
('Water', 20, 'https://loveincorporated.blob.core.windows.net/contentimages/gallery/776064c9-7a86-4a88-aa6d-57273401af5c-water_bottle_facts.jpg','Fresh Water from the sea.',0,'D');

-- Dumping data for Admin --
INSERT INTO Adminstrator (uname,password) VALUES
('admin','admin');

-- Dumping data for Combo Meals --
INSERT INTO ComboMeals (name,discount,main,sides,drinks) VALUES
('Chicken Mash Tea Combo',0.1,'Chicken','Mashed Potato','Iced Tea'),
('Steak Veg Beer Combo',0.15,'Rib-eye Steak','Steamed Vegetables','Root Beer')