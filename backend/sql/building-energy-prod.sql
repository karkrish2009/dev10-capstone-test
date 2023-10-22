drop database if exists building_energy;
create database building_energy;
use building_energy;

-- create tables and relationships
create table homeowner (
	owner_id int primary key auto_increment,
    owner_first_name varchar(50),
    owner_last_name varchar(50),
    owner_email varchar(150)
);

create table house (
    house_id int primary key auto_increment,
    street_address varchar(250) not null,
    city varchar(250),
    zip_code varchar(5),
    owner_id int,
	constraint fk_owner_house_id
        foreign key (owner_id)
        references homeowner(owner_id)
);

create table room (
    room_id int primary key auto_increment,
    room_name varchar(50) not null,
    room_description varchar(250) not null,
    image_url varchar(500),
    length float,
    breadth float,
    height float,
	x_coord float,
	y_coord float,
    house_id int not null,
    constraint fk_room_house_id
        foreign key (house_id)
        references house(house_id)
);



create table actuator (
    actuator_id int primary key auto_increment,
    set_temperature varchar(50) not null,
    room_id int not null,
    constraint fk_actuator_room_id
        foreign key (room_id)
        references room(room_id)
);

create table sensor (
    sensor_id int primary key auto_increment,
    temperature float not null,
    room_id int not null,
    constraint `temperature_min` check ((`temperature` > 50.0)),
    constraint  `temperature_max` check ((`temperature` < 100.0)),
    constraint fk_sensor_room_id
        foreign key (room_id)
        references room(room_id)
);

insert into homeowner(owner_id, owner_first_name, owner_last_name, owner_email) values
	(1, 'B', 'K', 'bk@gmail.com'),
    (2, 'C', 'M', 'cm@gmail.com');

insert into house(house_id, street_address, city, zip_code, owner_id ) values
        (1, '6 LakeShore', 'Chicago', '45678', 1),
        (6, '12 Abbey Road', 'SF', '12345', 2),
        (3, '24 Pennsylvania', 'Philadelphia', '99909', 1);
        
insert into room(room_id, room_name, room_description, image_url, length, breadth, height, x_coord, y_coord, house_id ) values
        (1, 'Living Room', 'meeting guests, vistors',
        "https://photos.zillowstatic.com/i_g/IS9t4g9yhe8v901000000000.jpg", 20, 10, 10, 50, 50, 1),
		(2, 'Family Room', 'TV post-dinner gathering place',
        "https://photos.zillowstatic.com/fp/0d24279d2c4273aca2c1c7d86d98d219-uncropped_scaled_within_1344_1008.jpg",
        32, 22, 12, 150, 150, 1),
        (3, 'Kitchen', 'Cooking and informal eating',
        "https://www.stevewilliamskitchens.co.uk/wp-content/uploads/2015/11/kitchen-interior-design-ideas-gallery2.jpg",
		15, 15, 10, 300, 300, 1),
		(4, 'Bedroom','We sleep here',"https://cdn.trendir.com/wp-content/uploads/2018/04/rustic-green-bedroom.jpg",
		25, 25, 15, 600, 600, 1);