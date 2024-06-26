-- CREATE DATABASE hcd
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!

DROP TABLE IF EXISTS "additional_device_info";
DROP TABLE IF EXISTS "device_properties";
DROP TABLE IF EXISTS "devices";
DROP TABLE IF EXISTS "device_types";
DROP TABLE IF EXISTS "categories";
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
-- Practice User Data
INSERT INTO "user" ("username", "password", "email", "first_name", "last_name", "location")
    VALUES  ('Suz','Mewrowrouh?', 'kingofthecastle@tails.com', 'Bacon', 'Douang', 'Minneapolis'),
            ('Lexi', 'Woof!', 'babydog20@paws.com', 'Mozzarella', 'Clendenen', 'NE MPLS'),
            ('Steve', 'Pizza', 'teenagemutantninja@turtles.com', 'Donatello', 'Leonardo', 'New York City'),
            ('Mahad','YinDynasty', 'ZhouDynasty@roots.com', 'Bonsai', 'Taproot', 'Tokyo, Japan'),
            ('Ayla','LetsGrowww', 'GrowThroughWhatYouGoThrough@gmail.com', 'Leia', 'Monne', 'South Minneapolis');

-- CATAGORIES
CREATE TABLE "categories" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR
);
-- Pratice Catagories
INSERT INTO "categories" ("name")
    VALUES  ('Appliance'),
            ('HVAC'),
            ('Plumbing'),
            ('Structural');

-- DEVICE TYPES
CREATE TABLE "device_types" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR,
    "category_id" INT REFERENCES "categories" NOT NULL
);
-- Practice Device Types
INSERT INTO "device_types" ("name", "category_id")
    VALUES  ('Fridge', '1'), 
            ('Furnace', '2'),
            ('Under-Sink', '3'),
            ('Gutters-n-Spouts', '4');

-- DEVICE / INTAKE TABLE 
CREATE TABLE "devices" (
    "id" SERIAL PRIMARY KEY,
    "device_types_id" INT REFERENCES "device_types" NOT NULL,
    "location" VARCHAR,
    "brand" VARCHAR,
    "model_number" VARCHAR,
    "serial_number" VARCHAR,
    "maintenance_date" VARCHAR,
    "maintenance_due" VARCHAR,
    "img_url" VARCHAR,
    "manufacture_date" VARCHAR,
    "install_date" VARCHAR,
    "user_id" INT REFERENCES "user" NOT NULL,
    "completed?" BOOLEAN DEFAULT FALSE
);
-- Practice Device Data
INSERT INTO "devices" ("device_types_id", "brand", "model_number", "serial_number", "maintenance_date", "maintenance_due", "location", "img_url", "manufacture_date", "install_date", "user_id", "completed?") 
    VALUES  
           ('1', 'Kenmore', '71063', '71063-123456', '05-20-2024', '05-20-2025', 'Kitchen', 'https://target.scene7.com/is/image/Target/GUEST_aa57b540-29fe-48f0-aca1-7166c13c573b?wid=488&hei=488&fmt=pjpeg', '04-10-2010', '04-20-2018', '6', FALSE),
           
           ('2', 'Trane', 'S9V2B040D3PSCA', 'JHY1234-4321', '06-10-2024', '06-01-2025', 'Laundry Room', 'https://hvacdirect.com/media/catalog/product/t/h/thumbnail_trane-runtru-ac_5.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700', '01-01-2008', '01-10-2018', '6', FALSE),
           
           ('3', 'Delta', 'Lorelai', '95B932-32S', '07-17-2024', '07-17-2025', 'Kitchen', 'https://images.thdstatic.com/productImages/32e1194a-e11a-4f55-bbd6-ffa9da5d99c9/svn/stainless-steel-delta-drop-in-kitchen-sinks-95a932-25s-ss-64_600.jpg', '08-08-2017', '09-09-2019', '6', FALSE );


-- DEVICE_PROPERTIES
CREATE TABLE "device_properties" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR,
    "device_type_id" INT REFERENCES "device_types" NOT NULL
);

-- Practice Device Properties
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
    "prop_value" VARCHAR
);
-- Practice Additional Device Info
INSERT INTO "additional_device_info" ("prop_value", "devices_id", "properties_id")
    VALUES  ('wf5000z', '1', '1'),
            ('af5zffz', '1', '2'),
            ('18', '1' ,'3'),
            ('HEPA', '3', '4'),
            ('w30xl24xd1', '3', '5'),
            ('20', '3' ,'8'),
            ('w28xl26xd1', '4', '9'),
            ('20608', '4', '10');
           