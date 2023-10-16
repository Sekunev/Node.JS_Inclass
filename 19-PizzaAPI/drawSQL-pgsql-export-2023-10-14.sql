CREATE TABLE "pizzas"(
    "id" BIGINT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "image" VARCHAR(255) NOT NULL,
    "price" DECIMAL(8, 2) NOT NULL,
    "toppings" JSON NOT NULL,
    "createdAt" DATE NOT NULL,
    "UpdatedAt" DATE NOT NULL
);
ALTER TABLE
    "pizzas" ADD PRIMARY KEY("id");
CREATE TABLE "toppings"(
    "id" BIGINT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "createdAt" DATE NOT NULL,
    "updatedAt" DATE NOT NULL
);
ALTER TABLE
    "toppings" ADD PRIMARY KEY("id");
CREATE TABLE "users"(
    "id" BIGINT NOT NULL,
    "username" VARCHAR(255) NOT NULL,
    "password" CHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "createdAt" DATE NOT NULL,
    "updateAt" DATE NOT NULL
);
ALTER TABLE
    "users" ADD PRIMARY KEY("id");
CREATE TABLE "orders"(
    "id" BIGINT NOT NULL,
    "userId" BIGINT NOT NULL,
    "pizzaId" BIGINT NOT NULL,
    "size" VARCHAR(255) CHECK
        ("size" IN('')) NOT NULL,
        "price" DECIMAL(8, 2) NOT NULL,
        "totalPrice" DECIMAL(8, 2) NOT NULL,
        "createdAt" DATE NOT NULL,
        "UpdatedAT" DATE NOT NULL
);
ALTER TABLE
    "orders" ADD PRIMARY KEY("id");
ALTER TABLE
    "orders" ADD CONSTRAINT "orders_userid_foreign" FOREIGN KEY("userId") REFERENCES "users"("id");
ALTER TABLE
    "orders" ADD CONSTRAINT "orders_pizzaid_foreign" FOREIGN KEY("pizzaId") REFERENCES "pizzas"("id");