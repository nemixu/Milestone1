# Fibromyalgia Ireland

Project - User-Centric Frontend Development - Code Institute.

The project will cover a growing medical condition.
Its aim is to highlight the condition, raise awareness and offer solutions to people suffering.

The idea behind the project is to help their current social media platform - introduce a user friendly site with some basic information.
Fibromyalgia is a popular medical condition, in recent years the diagnosis is rapidly growing but with few resources to show what support is available we are attempting to highlight the illness and give resources and try and build a community where users can turn to for support or tips and tricks.

## Showcase
A deployed link to the website can be found [here](https://nemixu.github.io/Milestone1/).

![Preivew](https://github.com/nemixu/Milestone1/blob/master/assets/images/wireframes/laptop%20landing%20page.png)
## UX

### User Stories

The end user of this project is people suffering with Fibromyalgia, it is aimed at females as it is reported to have higher cases than men. The users would range from the age of 20 - 55 and in the current age of Technology will be accessed mainly on mobile devices.

The end user want to see Informtation on the illness, they want to see what the charity have to offer and how to get in touch with the current charity.

The benefit of the project is to highlight the illness in a friendly and inviting way with bright colours and a user friendly style.

Other features that are to note is the user can get intouch if they wish to help, subscribe to the newsletter and easily navigate to the social links.

* As a user I want to find out more about the illness.
* As a user I want to find this information easily without many clicks.
* As a user I want to know a little bit about the current symptoms.
* As a user I want to know how you can help.
* As a user I want to get in touch with you easily.
* As a user I want to be able to find your contact details and social links easily.
* As a user I want to view this information on my mobile device or tablet.


### Strategy


#### User Needs.

The needs of the user is to fulfil the capabilites of using this application on their mobile and tablet devices. They need the information to be easily accessible and easy to digest.

#### Technical Capabilites

It is capable to do this project with the bootstrap framework in a timely manner and implement things that the user needs. Keeping the information pages seperated but easy to read and designed to pop out for the user so they dont have to look too hard for the information.
It was not possible to implement mailing servers on this project due to time restrictions and was not part of the current scope of the project, but is due to be completed on a future release.

#### Business Vision

The purpose of this project is to highlight the outlined topic and to raise awareness on the topic.
It is also to introduce new people to charity and what they have to offer in helping people with the condition. It is important for the site to have an impact on the social media clicks and signups for news letters and if anyone would like to volunteer to help.

### Scope

For my audience I want to highlight what the illness is and what the charity are doing to support those with the condition. If they like what they see it promotes further followers on the social media platform and or to get intouch for further information.

### Structure

My structure is layed out as a single page application that has an inviting landing page with hands to demonstrate an inviting feeling and a together feeling.
On the natural flow of the site it brings you to the What is Fibromyalgia? section that gives a quick snippet of the illness, followed by a quick snippet of about fibro, the symptoms, triggerpoints and further information. It then brings you to a services section that is there to promote what the charity are trying to do to help those in need, it has an information button that will give you a breakdown. Following this you are invited to view who the team is and what their background is, this helps with understanding whos behind the team and what they can do to help. One thing that is important to the charity is volunteers so this section was added to show they are open to people helping them if they wish, this is followed by a contact form and a bold footer that has links to their social media / and links to downloadable pdf documents and a section to sign up for their current newsletter.

### Skeleton

New wireframes:

[Landing page Mobile first](https://github.com/nemixu/Milestone1/blob/master/assets/images/wireframes/mobile%20design%20-%20re-structure.jpg)

[Landing page Desktop](https://github.com/nemixu/Milestone1/blob/master/assets/images/wireframes/desktop%20design%20-%20re-structure.jpg)

Original Wireframes:

[Landing page mobile](https://github.com/nemixu/Milestone1/blob/master/assets/images/wireframes/Landing%20Page%20Mobile.PNG)

[Landing page desktop](https://github.com/nemixu/Milestone1/blob/master/assets/images/wireframes/Landing%20page%20home..PNG)


## Features

In this section, you should go over the different parts of your project, and describe each in a sentence or so.
Home page:

The homepage will be a landing page for the user and give them the warm welcome feeling.

About:

This section covers a brief overview of what the illness is, the symptoms and triggerpoints.

Services:

Highlighting the services the charity currently offers.

Our Team:

A quick overview of who the team is and what their background is.

Volunteer / Contact Page:

A volunteer and contact page for users to be able to get intouch with the team if needs be.

### Existing Features

- The navbar collapses if you click on a target link.
- Smooth scrolling for better UX.
- Sign up for newsletter (not currently linked to a mailing server will be implemented on next release).

### Features Left to Implement

- Full break down of services they provide (as it is currently condensed into a pdf on the footer)
- Members forum / login secion
- mail link up for contact form and subscription to news letter
- Would Ideally love to have the site as a multi page application, but with time constraints and issues with content as the company is new with very few resources it was difficult to make the multipage app without meaningful content.

## Technologies Used

In this section, you should mention all of the languages, frameworks, libraries, and any other tools that you have used to construct this project. For each, provide its name, a link to its official site and a short sentence of why it was used.

- HTML5
- CSS3
- Bootstrap v4.3.1
- Google Chrome Dev tools for debugging
- Google Light house for audits
- vsCode - to beautify code (gitpod not formatting)
- [JQuery](https://jquery.com) The project uses **JQuery** to simplify DOM manipulation.

## Testing

### Testing planning.

At the beginning of this project I knew who the target market was and what the needs are for the user.
I also took into consideration the potential devices the end user would be using.

I planned on testing with the current devices.

Chrome tools
Iphone 4 (320 x 480)
Iphone 5se (320 x 568)
Iphone 6 up to iphone X (375 x 667, 414 x 736, 375 x 812)

Hand held device testing
One plus 5
One plus 6t
Iphone X max

Screen testing
24" computer screen (1920 x 1080)
Laptop 15.6" (1920 x 1080)

### Implementation

As this was my first project I had no prior experience debugging or running specific tests to figure out bugs etc.

My testing was done with dev tools on google chrome - and fault finding on each specific screen size starting from the smallest screen first and working my way up to my largest screen.
Testing was also done regularly on hand held devices to double check accuracy.

During my testing I regularly used the element.style box in the style section of chrome tools to test my styling before I implemented it into my actual code, I also done the same with the document its self (editing as html) inputting classes or making changes and if the change was correct I coppied the correct code and added to my code.

I had also planned to use lighthouse as it was made aware to me by a senior developer to use as to follow best practices and ensure your site has high acccessability including good contrast etc.

This was used on a number of occasions to find bugs with my code and missing items. On my forms I had no labels and it highlighted this for me if I was not using a label and to do so with aria-label.

Testing on Devices were done in this order.
1.Open site and scroll from top to bottom without clicking any features.
(this is where the overflow was found for iphone SE)
2.Open site and scroll to first button - Click button - does it do what is intended?
if yes continue to next section and click next button - if no - fix bug.
3.On getting to the Modal form after click on the Volunteer with us button - inside the form it was hard to recognise if the button was infact a button or just text - result - change the colour of the button to match colour scheme.
4.Testing of form elements were carried out to ensure all text boxes were set to required and filled before the submit button would continue.
5.Ensured all links would click and bring you to the correct section / destination (some links open pdf files in a new tab) some links brought you to an entirely new desitination such as youtube, facebook, instagram.
6.Testing of the navbar on click items was next on the list, and when I clicked an anchor tag it would not close the navbar dropdown and resulted in bad UX. This was fixed with the help of stackoverflow - where I was missing a class on each UL item.

### Results and outcomes

Problems with the site having good results on Iphone SE, it was causing slight overflow this was adjusted with changing the font size of my Hero text on the landing page and also the Fibromyalgia Ireland text in the navbar was oversized and was causing the drop down menu to be no longer inline.

The testing that was done through chrome tools helped in the debugging phase of my deployment - it helped me iron out any problems before actually implementing them into my code.

My current score on my site from google light house :
94 % Performance
100% Accessibility
93 % Best Practices
89 % Search Engine Optimization
PWA - not tested.

[Results can be found here](https://github.com/nemixu/Milestone1/blob/master/assets/images/wireframes/lighthouse%20audit.PNG)

During my testing - typed in my address bar about to see if it would bring me to the about section without clicking the navbar, it brought me to a blank 404 page not found. This gave me the idea to ensure that if a user done this they have a 404page associated with my site showing up and they have a button to bring them back without frustrating the user ( I followed a youtube tutorial on how to setup the apache file to find the destination of the file) I just used the normal page layout but added a button and text saying oops you have landed on the wrong page go back.
https://nemixu.github.io/Milestone1/232
A link above brings you to the 404page.
On mobile devices I found that the main landing image was taking longer to load on mobile devices than on desktop or tablets. This was due to the file size - and has since been compressed for faster loading on all devices.

### Deployment

The current deployment of this project was done using gitpod.

I used the gitpod interface to write the code and as it is linked with github as it was easy to use the terminal to commit my files and push to my repository.

The deployed website is hosted on github pages for easy viewing without having to clone or fork the repository to view the running website.
Deployment was done by clicking on the settings tab on my repository then navigating to "Github pages"
Changing the source from none to master, this then deployed a link that can be found here : https://nemixu.github.io/Milestone1/

If you wish to run this project locally.

1. Click clone / download
2. Choose your preffered method (Zip or github desktop)
3. Open in your preffered IDE
4. Run on local server

## bugs

During the early development of this project I ran into difficulty blurring the background image on the landing page.
After figuring the problem was due to my html structure being incorrect, it helped me understand that having the correct html structure is key! and if my styling is not working smoothly it must be an issue with my core html structure. So my solution to this problem was adding a seperate div to the figure and giving it a seperate id and then adding an id to my paragraph. Later on in the development I decided against the overall style but in gerneral it thought me a good lesson of html structres.

The original plan of this site was to have a multi page site, homepage, about, services, contact.
During the development and testing of the site it was found to be distracting for the user to be navigating to a page with small sections. The overall plan of a multi plan website was adjusted to make a single page application that would hold all of the necessary content and easy to access information on the one page. The charity is currently growing and has some resources but not a lot, it was difficult to stretch the current content they had onto multiple pages. Although the site was originally planned to be multi page, the overall project kept the same concepts and layout just placed on one page.

During my development of this project I couldnt not figure out when the navbar was showing on mobile devices when you clicked a link the navbar would continue to stay open, upon some research on bootstrap documentation and also some demonstrations on stackoverflow it had shown me that I was missing a collapse class on my List items, since implementing this the user experience has increased.

Had an issue with william and johns pictures not scaling correctly, I resized the images in an image editor to give the images a square scale for easier access rounding the image for its purpose.

Duriong the testing stages using dev tools on google chrome, using Iphone SE it has a screen size of 320px, this caused overflow on the right due to the size of my landing text, this was adjusted and removed the overflow. Also a bug on the same screen was the size of the "Fibromyalgia Ireland" text, once I changed the size of the text to 15px it then kept the burger menu inline as intended.

I had original issues with contrast using #fafafa colour on the areas I was using white text.
The off white colour was not strong enough to give a hard contrast and was changed to the standard #ffffff color.

## Credits

All my images that were used during the development of this site were taken from,
https://www.pexels.com/
https://unsplash.com/
Although only one image was used in the end.

fontawesome was used for the favicions throughout the page.
https://fontawesome.com/

Gave a great break down and helped me understand modal forms, I also used their example of the modal form - but was heavily modified to work for my project.
https://mdbootstrap.com/docs/jquery/modals/forms/

helped with collapse button class for mobile view (when you click an anchor tag it closes the burger menu)
https://stackoverflow.com/questions/42401606/how-to-hide-collapsible-bootstrap-4-navbar-on-click

Original wireframes were created with wireframe.cc

readme template taken from
https://github.com/Code-Institute-Solutions/readme-template

help with the bootstrap grid and layout
https://ajgreaves.github.io/bootstrap-grid-demo/index.html

bootstrap cheat sheet to help remember class names and show what classes done etc.
https://hackerthemes.com/bootstrap-cheatsheet/

### Content

All content on this site is original documentation and profile pictures have been received from Fibromyalgia Ireland PLC.

### Acknowledgements

- I would like to Acknowledge Anthony O'Brien - for his continued tips and tricks throught this project and helped with some debugging that was ongoing early on.
- Simen Daehlin for his review on the project and giving constructive feedback and changes to be made.
  -Aleksander Andersen for his suggestions on readme file.
