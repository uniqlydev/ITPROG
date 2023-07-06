class food {
    constructor(name, price, image, description, type) {
        this.name = name;
        this.price = price;
        this.image = image;
        this.description = description;
        this.type = type;
    }

    // Generate getters and setters
    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getPrice() {
        return this.price;
    }

    setPrice(price) {
        this.price = price;
    }

    getImage() {
        return this.image;
    }

    setImage(image) {
        this.image = image;
    }

    getDescription() {
        return this.description;
    }

    setDescription(description) {
        this.description = description;
    }

    getType() {
        return this.type;
    }

    setType(type) {
        this.type = type;
    }
}

module.exports = food;