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

![Priority matrix](https://res.cloudinary.com/ashleyfrancisco/image/upload/v1551199311/Priority_Matrix.jpg)
### MVP/PostMVP

#### MVP 
- Edit a photo with three main features:  Filter, Resize, and Text 
- take photo in App
- Save to phone/ Share to Social Media
- Add photo to Album
- Permissions to access camera, photos library, other apps (Social media) 
- User Authentication (Login, Sign Up)


#### PostMVP 

- Add Additional Features ( Exposure, contrast, lux, saturation, highlights, etc)
- Add (in Contact Us) a link to open email of user to send email.
- Desktop view
- Google API for user auth

## Architectural Design

 ![Architectural Design](https://res.cloudinary.com/ashleyfrancisco/image/upload/v1551199159/Arch_design.jpg)
 

## ERD

![ERD](https://res.cloudinary.com/ashleyfrancisco/image/upload/v1551212776/ERD.jpg)

## UI Components

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| Library | This will render the bottom user photo, bottom nav (camera, edit, and albums) and all the photos a user has edited | 
| Edit | This will render the photo being edited, the feature toolbar on the bottom ( Resize, Filter, and Text)  and a button to finish the editing| 
| Home | Toggle between Login and Sign up |


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe.

| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: |
| Login/Sign Up Front End | L | 4hrs| 0rs |
| Google API | L | 6hrs| 0hrs |
| User Model | H | 6hrs | 0hrs |
| Album Model | H | 6hrs | 0hrs|
| Photo Model | H | 6hrs | 0hrs |
| Authentication| L |  6hrs | 0hrs |
| Edit Photo Screen | H | 6hrs | 0hrs |
| Resize image feature | H | 6hrs | 0hrs |
| Add Filter to image feature | H | 6hrs | 0hrs |
| Add text to image feature | H | 6hrs | 0hrs |
| Create Albums | H |  6hrs | 0hrs |
| Permissions to access camera and library | H | 2hrs | 0hrs |
| Total | / | 62hrs| 0hrs | 

## Helper Functions

| Function | Description | 
| --- | :---: |  
| Sign in | this allows user to sign in | 
| Sign Out | this allows user to sign out |
| ComponentDidMount | render functions on page automatically | 
| Create User | allows a user to be created |
| Edit user | allows user info to be updated |
| Delete User | Allows user to be deleted| 
| New Photo | Allows new photo to be edited |
| Save photo| allows photo to be saved on to local library |
| addToAlbum | allows user to add a photo to existing album |
| createAlbum | allows a new album to be created |
| Delete Album | allows for an album to be deleted| 
| Edit album | allows for an album to be edited |






## Additional Libraries
| Library | What it does |
| --- | :---: |
| Google API | allows user to create account with their google account|
| Camera Roll API | allows access to photo library |
| react-native-image-marker package| add an image/ logo to image|
| react-native-fetch-blob package| allows user to fetch(grab) image(blob)|
| react-native-image-resizer package | resize image in app |
| react-native-image-filter-kit package | add filter to image in app |
| react-native-image-picker package | pick an image in app|
| @merryjs/photo-viewer | view the image ( edit screen) |
| CameraKit API | Access ios camera |
| Unsplash API | mock data , random images |

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
