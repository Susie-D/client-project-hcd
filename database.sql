-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
DROP TABLE IF EXISTS "additional_device_info";
DROP TABLE IF EXISTS "device_properties";
DROP TABLE IF EXISTS "devices";
DROP TABLE IF EXISTS "device_types";
DROP TABLE IF EXISTS "catagories";
DROP TABLE IF EXISTS "user";


CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (100) NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "email" VARCHAR (80),
    "first_name" VARCHAR (80),
    "last_name" VARCHAR (80),
    "location" VARCHAR (80)
);
-- Pratice User Data
INSERT INTO "user" ("username", "password", "email", "first_name", "last_name", "location")
    VALUES  ('Suz','Mewrowrouh?', 'kingofthecastle@tails.com', 'Bacon', 'Douang', 'Minneapolis'),
            ('Lexi', 'Woof!', 'babydog20@paws.com', 'Mozzarella', 'Clendenen', 'NE MPLS'),
            ('Steve', 'Pizza', 'teenagemutantninja@turtles.com', 'Donatello', 'Leonardo', 'New York City'),
            ('Mahad','YinDynasty', 'ZhouDynasty@roots.com', 'Bonsai', 'Taproot', 'Tokyo, Japan'),
            ('Ayla','LetsGrowww', 'GrowThroughWhatYouGoThrough@gmail.com', 'Leia', 'Monne', 'South Minneapolis');

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
            ('Structural');

-- DEVICE TYPES
CREATE TABLE "device_types" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR,
    "catagory_id" INT REFERENCES "catagories" NOT NULL
);
-- Pratice Device Types
INSERT INTO "device_types" ("name", "catagory_id")
    VALUES  ('Fridge', '1'), 
            ('Furnace', '2'),
            ('Under-Sink', '3'),
            ('Gutters-n-Spouts', '4');

-- DEVICE / INTAKE TABLE 
CREATE TABLE "devices" (
    "id" SERIAL PRIMARY KEY,
    "device_types_id" INT REFERENCES "device_types" NOT NULL,
    "brand" VARCHAR,
    "model" VARCHAR,
    "serial_number" VARCHAR,
    "maintenance_date" VARCHAR,
    "maintenance_due" VARCHAR,
    "location" VARCHAR,
    "img_url" VARCHAR,
    "manufacture_date" VARCHAR,
    "install_date" VARCHAR,
    "user_id" INT REFERENCES "user" NOT NULL,
    "completed?" BOOLEAN DEFAULT FALSE
);
-- Pratice Device Data
INSERT INTO "devices" ("device_types_id", "brand", "model", "serial_number", "maintenance_date", "maintenance_due", "location", "img_url", "manufacture_date", "install_date", "user_id", "completed?") 
    VALUES ('1', 'LG', 'LFX25950', 'LFX25950-123456', '2024-06-14', '2025-06-14', 'Kitchen', 'https://static-data2.manualslib.com/product-images/07a/2038183/lg-lupxc2386n-refrigerator.jpg', '2018-01-15', '2018-01-20', '3', FALSE),
    
           ('1', 'Kenmore', '71063', '71063-123456', '2024-05-20', '2025-05-20', 'Kitchen', 'https://imgur.com/a/I1bjKMf', '2010-04-10', '2010-04-20"', '4', FALSE),
           
           ('2', 'Trane', 'S9V2B040D3PSCA', 'JHY1234-4321', '2024-06-10', '2025-06-01', 'laundry Room', 'https://imgur.com/a/I1bjKMf', '2008-01-01', '2009-01-10', '3', FALSE),
           
           ('3', 'Delta', 'Lorelai', '95B932-32S', '2024-07-17', '2025-07-17', 'Kitchen', 'https://imgur.com/a/I1bjKMf', '08/08/2017', '09/09/2019', '4', FALSE );  
-- DEVICE_PROPERTIES
CREATE TABLE "device_properties" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR,
    "device_type_id" INT REFERENCES "device_types" NOT NULL
);

-- Pratice Device Properties
INSERT INTO "device_properties" ("name", "device_type_id")
    VALUES  ('Water Filter Model Number', '1'), 
            ('Air Filter Model Number', '1'),
            ('Merv Rating Desired', '1'), 
            ('Filter Type', '2'), 
            ('Filter Size', '2'),
            ('Filter Brand', '2'),
            ('Filter Model Number', '2'),
            ('Merv  Rating ', '2'),
            ('Filter Size', '3'),
            ('Filter Model Number ', '3');

-- ADDITIONAL DEVICE INFO
CREATE TABLE "additional_device_info" (
    "id" SERIAL PRIMARY KEY,
    "devices_id" INT REFERENCES "devices" NOT NULL,
    "properties_id" INT REFERENCES "device_properties" NOT NULL,
    "value" VARCHAR
);
-- Pratice Additional Device Info
INSERT INTO "additional_device_info" ("value", "devices_id", "properties_id")
    VALUES  ('wf5000z', '1', '1'),
            ('af5zffz', '1', '2'),
            ('18', '1' ,'3'),
            ('HEPA', '3', '4'),
            ('w30xl24xd1', '3', '5'),
            ('Sunbeam', '3' ,'6'),
            ('jk35lol124', '3', '7'),
            ('20', '3' ,'8'),
            ('w28xl26xd1', '4', '9'),
            ('20608', '4', '10');
            
            
      SELECT "brand", "model", "serial_number", "maintenance_date", 
    "maintenance_due", "location", "img_url", "manufacture_date", 
    "install_date", "completed?"
FROM "devices"
ORDER BY "maintenance_date" ;
