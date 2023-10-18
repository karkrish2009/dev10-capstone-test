drop database if exists building_energy_test;
create database building_energy_test;
use building_energy_test;

-- create tables and relationships
create table house (
    house_id int primary key auto_increment,
    street_address varchar(250) not null,
    city varchar(250),
    zip_code varchar(5)
);

create table room (
    room_id int primary key auto_increment,
    room_name mediumtext not null,
    room_description longtext not null,
    image_url longtext,
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

create table home_owner (
	owner_id int primary key auto_increment,
    owner_first_name varchar(50),
    owner_last_name varchar(50),
    owner_email varchar(50),
    owner_password varchar(50),
    house_id int
);

insert into house(house_id, street_address, city, zip_code ) values
        (2, '24 Pennsylvania', 'Philadelphia', '99909');
insert into room(room_id, room_name, room_description, image_url, length, breadth, height, x_coord, y_coord, house_id ) values
        (1, 'Living Room', 'meeting guests, vistors',
        "https://photos.zillowstatic.com/i_g/IS9t4g9yhe8v901000000000.jpg", 20, 10, 10, 50, 50, 2);
delimiter //
create procedure set_known_good_state()
begin

   delete from room;
    alter table room auto_increment = 1;
  delete from house;
    alter table house auto_increment = 1;  

insert into house(house_id, street_address, city, zip_code ) values
        (1, '6 LakeShore', 'Chicago', '45678'),
        (2, '24 Pennsylvania', 'Philadelphia', '99909');
        
insert into room(room_id, room_name, room_description, image_url, length, breadth, height, x_coord, y_coord, house_id ) values
        (1, 'Living Room', 'meeting guests, vistors',
        "https://photos.zillowstatic.com/i_g/IS9t4g9yhe8v901000000000.jpg", 20, 10, 10, 50, 50, 2),
		(2, 'Family Room', 'TV post-dinner gathering place',
        "https://photos.zillowstatic.com/fp/0d24279d2c4273aca2c1c7d86d98d219-uncropped_scaled_within_1344_1008.jpg",
        32, 22, 12, 150, 150, 1);

end //
-- 4. Change the statement terminator back to the original.
delimiter ;