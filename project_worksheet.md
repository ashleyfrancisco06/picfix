# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the day

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | Complete
|Day 2| Wireframes / Priority Matrix / Functional Components | Complete
|Day 3| Core Application Structure (HTML, CSS, etc.) | Incomplete
|Day 4| Pseudocode / actual code | Incomplete
|Day 5| Initial Clickable Model  | Incomplete
|Day 6| MVP | Incomplete
|Day 7| Present | Incomplete


## Project Description

PicFix:
A  mobile photo editing app that allows you to resize, filter, and add text to your photos! You can upload photos from your library or take a photo directly in the app. You can then save them on to your library(on phone), add to album(on app) and/or share directly on to your social media! 


## Wireframes


Login:
https://res.cloudinary.com/ashleyfrancisco/image/upload/v1551196229/Login.jpg
- has two input fields, username and password. Link to Sign up for a new account, link to reset password if forgotten.

Sign Up:
https://res.cloudinary.com/ashleyfrancisco/image/upload/v1551196229/Sign_Up.jpg
- has three input fields (email,username,password) and link to go back to Login page.

Library(Main Screen):
https://res.cloudinary.com/ashleyfrancisco/image/upload/v1551196229/Library.jpg
- has all pictures for user, menu on bottom ( edit new photo, albums, and take a photo) 
- hamburger menu contains Contact Us and Delete Account 

Edit:
https://res.cloudinary.com/ashleyfrancisco/image/upload/v1551196229/Edit.jpg
- has menu on bottom, top part is all the variations of the specific feature, bottom part is the features

Done Editing:
https://res.cloudinary.com/ashleyfrancisco/image/upload/v1551196229/Finish.jpg
- takes you back to main screen (faded in background) with a nav on bottom ( close screen, Save to camera roll, and Share)



## Priority Matrix

https://res.cloudinary.com/ashleyfrancisco/image/upload/v1551198304/Priority_Matrix.jpg

### MVP/PostMVP

#### MVP 
- User Authentication (Login, Sign Up)
- Edit a photo with three main features:  Filter, Resize, and Text 
- take photo in App
- Save to phone/ Share to Social Media
- Add photo to Album
- Permissions to access camera, photos library, other apps (Social media) 
- Google API for user sign in/ create account 

#### PostMVP 

- Add Additional Features ( Exposure, contrast, lux, saturation, highlights, etc)
- Add (in Contact Us) a link to open email of user to send email.
- Desktop view

## Architectural Design

 ![Architectural Design](https://res.cloudinary.com/ashleyfrancisco/image/upload/v1551199159/Arch_design.jpg)
 

## ERD

![ERD](https://res.cloudinary.com/ashleyfrancisco/image/upload/v1551196229/ERD.jpg)

## UI Components

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

#### SAMPLE.....
| Component | Description | 
| --- | :---: |  
| Header | This will render the header include the nav | 
| Footer | This will render the header include the nav | 


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe.

#### SAMPLE.....
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: |
| Adding Form | H | 3hrs| 3.5hrs |
| Working with API | H | 3hrs| 2.5hrs |
| Total | H | 6hrs| 5hrs | 

## Helper Functions
Helper functions should be generic enought that they can be reused in other applications. Use this section to document all helper functions that fall into this category.

#### SAMPLE.....
| Function | Description | 
| --- | :---: |  
| Capitalize | This will capitalize the first letter in a string of text | 

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project. 
 
 #### SAMPLE.....
| Library | What it Does | 
| --- | :---: |  
| Bootstrap | Used to help style my application | 
| Giphy API | Used to get gifs to use | 


## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

#### SAMPLE.....
```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  

#### SAMPLE.....
| Original Plan | Outcome | 
| --- | :---: |  
| Have one Book component | Split that component into BookInfo and BookInteraction as the component grew too complicated | 

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
