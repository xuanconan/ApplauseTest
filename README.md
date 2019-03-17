# Applause
---
## Ke(Conan) Xuan

---
## Links to YouTube videos
1. [SystemDemo](https://www.youtube.com/edit?o=U&video_id=KsDt0EgWY0k)

---
## Pre-requisites
1. Install Java 8 on your system. (if you already have it, avoid this step)
	- Once the Java 8 is up and running you are all set with Java
	
2. Install either Eclipse or Spring Tool Suite
	- Please install Eclipse from [here](https://wiki.eclipse.org/Eclipse/Installation#Eclipse_4.7_.28Oxygen.29)
	- Please install STS from [here](https://spring.io/tools/sts/all)

3. Install Node
	- Please follow the instructions [here](https://docs.npmjs.com/getting-started/installing-node)

4. Install WebStorm 
	- Please install WebStorm from [here](https://www.jetbrains.com/webstorm/download)

---
## Instructions for installation:
1. Create table in MySql, Load CSV files to MySql：

   create table bugs (bugId INT, deviceId INT, testerId INT);

   create table tester_device (testerId INT, deviceId INT);

   create table devices (deviceId INT, description varchar(50));

   create table testers (testerId INT, firstName varchar(20),lastName varchar(20),country varchar(20),lastLogin datetime);

   Then load CSV files to your MySql database.

2. Create View:

   CREATE OR REPLACE VIEW `Tester_Matching` AS 
select uuid_short() AS uniqueId, bug_device.testerId, firstName, lastName, country,  deviceId, count(deviceId) as device_bug, description
from (select bugs.bugId, bugs.deviceId, bugs.testerId, devices.description  from bugs join devices on bugs.deviceId = devices.deviceId) as bug_device 
join testers on bug_device.testerId = testers.testerId group by bug_device.deviceId, bug_device.testerId order by testerId, deviceId


3. Back end installation:
	 - Open ApplauseWebservice in IDE
	 - npm install
	 - ng serve


4. Frontend installation commands:
	 - Open ApplauseWebservice in IDE
	 - npm install
	 - ng serve