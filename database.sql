-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
-- USER 
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "password" VARCHAR (1000) NOT NULL,
    "email" VARCHAR (80) VARCHAR,
    "first_name" VARCHAR (80) VARCHAR,
    "last_name" VARCHAR (80) VARCHAR,
    "location" VARCHAR (80) VARCHAR,
);
-- Pratice User Data
INSERT INTO "user" ("password", "email", "first_name", "last_name", "location"),
    VALUES  ('Mewrowrouh?', 'kingofthecastle@tails.com', 'Bacon', 'Douang', 'Minneapolis'),
            ('Woof!', 'babydog20@paws.com', 'Mozzarella', 'Clendenen', 'NE MPLS'),
            ('PizzaRULEZ', 'teenagemutantninja@turtles.com', 'Donatello', 'Leonardo', 'New York City'),
            ('YinDynasty', 'ZhouDynasty@roots.com', 'Bonsai', 'Taproot', 'Tokyo, Japan'),
            ('LetsGrowww', 'GrowThroughWhatYouGoThrough@gmail.com', 'Leia', 'Monne', 'South Minneapolis');
-- DEVICE / INTAKE TABLE 
CREATE TABLE "devices" (
    "id" SERIAL PRIMARY KEY,
    "device_type_id" FOREIGN KEY,
    "brand" VARCHAR,
    "model" VARCHAR,
    "serial_number" VARCHAR,
    "maintenance_date" VARCHAR,
    "maintenance_due" VARCHAR,
    "location" VARCHAR,
    "img_url" VARCHAR,
    "manufacture_date" VARCHAR,
    "install_date" VARCHAR,
    "user_id" VARCHAR
);
-- Pratice Device Data
INSERT INTO "devices" ("device_type_id", "brand", "model", "serial_number", "maintenance_date", "maintenance_due", "location", "img_url" "manufacture_date", "install_date", "user_id" ) 
    VALUES ('1', 'LG', 'LFX25950', 'LFX25950-123456', '2024-06-14', '2025-06-14', 'Kitchen', 'https://static-data2.manualslib.com/product-images/07a/2038183/lg-lupxc2386n-refrigerator.jpg', '2018-01-15', '2018-01-20', '3');
    VALUES ('1', 'Kenmore', '71063', '71063-123456', '2024-05-20', '2025-05-20', 'Kitchen', 'data:image/jpeg;base64,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', '2010-04-10', '2010-04-20"', '6');
-- DEVICE TYPES
CREATE TABLE "device_types" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR,
    "catagory_id" FOREIGN KEY,
);
-- Pratice Device Types
INSERT INTO "device_types" ("name", "catagory_id")
    VALUES  ('Fridge', '1'), 
            ('Furnace', '2'),
            ('Under-Sink', '3'),
            ('Gutters-n-Spouts', '4')
-- CATAGORIES
CREATE TABLE "catagories" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR
);
-- Pratice Catagories
INSERT INTO "catagories" ("name")
    VALUES  ('Appliance'),
            ('HVAC'),
            ('Plumbing'),
            ('Structural')
-- DEVICE_PROPERTIES
CREATE TABLE "device_properties" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR,
    "device_type_id" FOREIGN KEY,
);
-- Pratice Device Properties
INSERT INTO "device_properties" ("name", "device_type_id")
    VALUES  ('Water Filter Model Number', '1'), 
            ('Air Filter Model Number', '1'),
            ('Merv Rating Desired', '1'), 
            ('Filter Type', '2'), 
            ('Filter Size', '2'),
            ('Filter Brand', '2'),
            ('Filter Model Number', '2')
            ('Merv Rating ', '2'),
            ('Filter Size', '3'),
            ('Filter Model Number ', '3')
-- ADDITIONAL DEVICE INFO
CREATE TABLE "additional_device_info" (
    "id" SERIAL PRIMARY KEY,
    "device_id" VARCHAR,
    "property_id" VARCHAR,
    "value" VARCHAR
);
-- Pratice Additional Device Info
INSERT INTO "additional_device_info" ("device_id", "property_id", "value")
    VALUES  ('Appliance'),
            ('HVAC'),
            ('Plumbing'),
            ('Structural')