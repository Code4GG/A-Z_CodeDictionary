DROP DATABASE IF EXISTS Dictionary;

CREATE DATABASE Dictionary;

USE Dictionary;

CREATE TABLE users (
	user_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL
);

CREATE TABLE words (
	word_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    word VARCHAR(100),
    definition VARCHAR(1000),
    user_id int,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE events (
	event_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    event TEXT,
);
