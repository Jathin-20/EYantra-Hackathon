# Title of the Project
# Sentry: Smart Entry Solution

## Description

The Idea is to create an application to provide database management to monitor the entry and exit of people in a building. The application allows users to create "Tickets" to enter a building. The application maintains the database to secdule and limit the number of people in a building in real time. The application also requires a Vital Stat field to create a ticket. The vital stats are verifed before the entry and the user is allowed to enter the building.

## Software Requirements

### 1. Flask.
       Used to put together the backend part.    
### 2. HTML & CSS.
       The front End part was designed using HTML and CSS.
### 3. MySQL.
       Flask uses MySQLAlchemy to communicate with a database which is already 
       setup to perform INSERT,SELECT and DELETE commands.
       
## Process Flow
  ### 1. The application requires users to create an account which will be used to generate tickets. 
  ### 2. New users can register or create instant tickets in emergencies.
  ### 3. Once the user logins into the application, he is prompted to fill a form will all the required data.
  ### 4. The data is stored into the uilding Database.
  ### 5. When the user tries to enter the building he has to provide his user name at the entry, the entry desk confirms about the entered vital stats
   #### a. If correct the user is allowed to enter.
   
   #### b. If the building is full the application prompts the user to wait for a certain time. It also prompts defaulters to exit the building.
  ### 6. After the user enters the active count of the building increases.
  ### 7. the "Ticket" is destroyed after the user exits the building.

## Data Flow Diagram
![User Creates Ticket](https://user-images.githubusercontent.com/80615267/119268516-fd4b4800-bc10-11eb-9a5c-3b9a7845e948.png)
