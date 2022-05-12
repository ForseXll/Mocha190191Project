# EmberFrost Project with Team Mocha.

![alt text](https://res.cloudinary.com/dmgrjhxb7/image/upload/v1652325287/EmberFrost/xpywa0ngwmje0wxdci0c.png "EmberFrost")

# Table of contents

- [About](#about)
  - [Why](#reason-for-this-project)
  - [Desires](#client-wants)
- [Team Introduction](#Introduction-of-Development-Team)
- [Sprints](#our-sprint-process)
- [Work on Project](#how-to-start-and-work-on-this-project)
  - [Set Up](#set-up)
  - [Front End](#front-end-repo)
  - [Back End](#back-end-repo)
- [Misc](#misc-information)

# About

This software is an e-commerce web site that allows users to purchase products without having a user account. It also allows the user to communicate directly with the owner.

## Reason for this project?

- Generic web applications are to restrictive.
- Features such guest checkout, ability to track users orders with out having to sign in.
- News Letter Subscribers for latest updates.
- Clients requires a product where he has full control.
  - Future features such as beta testers and **admin portal** that allows owner to have full control of application contents.

## Client wants

- Sell Multiple Products
- No User accounts
- Doesn’t want to tie customers down
- Maintain cart even if user closes browser
- Ability to subscribe, and receive custom newsletters
- Ability to communicate with owner directly.
- Good for SEO
- Basic questions answers so customers don’t have issues
- Ability to place an order without an account

The software built by this team has all of clients desired features.

# Introduction of Development Team

- **Ilya Indik** - Avid ex-professional gamer who discovered professional coding. With a little over a year of professional full stack experience, loves to play games with one eye while diligently executing enterprise applications with the other.
- **Andrey Kurudimov** - I like video games, music, and exploring new tech tools. I have worked with Node JS for 3+ years in a small start-up in Sacramento. I hate PC culture.
- **Justin Singh** - I have 3+ years working with React and building reusable components. In my free time I am hard stuck plat in Overwatch but I will climb when I get good.
- **Jared Petersen** - I'm a programmer and trained graphic designer. I make electronic music and game mods in my spare time. I also own a business designing and selling 3D printed mechanical puzzles.
- **Christian Suarez** - I enjoy making a meal or two. I've set a clear goal of creating programs to make people’s lives easier to gain a life of leisure.
- **Monica Abigail Suase** - CheerLeader of Team Mocha.

# Our Sprint Process

- Sprint 00: Form a team, look for client.

- Sprint 01: Meet with client and get all of the general information about the product.

- Sprint 02: Work closely with the client to create diagrams and tables to understand business requirements.

- Sprint 03: Create basic prototypes and finalize the essential features of the applications. Some of the features will not be implemented or designed but will be added later.

- Sprint 04: Set up a primary environment and create an online version of the basic app. Connect to the database, and allow the client to see the live version on a development server.

- Sprint 05: Split the application into two portals. For the customer applications, allow users to browse applications and experience basic functionality. ~~Complete subscription page and primary features of the web application~~. Transfer the whole applications to Next.js for better SEO, Translate the whole application to Typescript and introduce Prisma to eliminate extensive workload for query building.

- Sprint 06: Finalize some of the basic front-end UI features and begin their implementation. Fully integrate with both environments, and a development database. Setting up of external API such as Stripe and SendGrid. Start implementations of basic pages, such as Subscribe, About, FAQ, and Shopping Cart.

- Sprint 07: Research concerns about stripe implementation for client. Focus on components for the front end and finalize UI implementations.

- Sprint 08: Add Order page and connect Front end to back end API. Add testing to solidify back end functionality.

- Sprint 09: Implement order checkout flow and add media query to front end for mobile friendly. Add more testing to the applications and kick of Client meetings for validations of product.

- Sprint 10: Deploy applications, and spend time with client verifying that all specifications exist.

# How to start and work on this project.

This applications is mainly a node.js applications and requires a user to have at least **node** version to be **v14.17.0** to work on the project.

This project is written mainly in Typescript with get transpiled into JavaScript when push to the cloud.

- **_Repos are invite only. Clients prerogative._**

## Set Up

1. Install [Node.js](https://nodejs.org/en/). Ensure to download the version that is recommended for most
   users as it does not contain breaking changes. Backend requires >= v14
2. Install [Visual Studio Code](https://code.visualstudio.com/) a powerfull editor. (Not required)
3. If you are on windows, install [Bash](https://git-scm.com/downloads). Bash will allow you to run git commands so
   that you can clone down the repository. It is also shipped with Linux-based
   commands.

## Front-end Repo.

- https://github.com/supportem/emberfrost-estore-cust/tree/dev

1. Clone down the above repository.
2. Open in Visual Studio Code or editor of choice.
3. Open terminal and go to project directory.
4. Run the command: `npm install` to install our dependencies of the project.
5. Run the command: `npm run dev` to start a local instance of the project that you
   can view in the browser.

## Back-end Repo

- https://github.com/supportem/emberfrost-estore-api/tree/dev

1. Clone down repository.
2. Open in Visual Studio Code or editor of choice.
3. Open terminal and go to project directory.
4. Run the command: `npm install` to install our dependencies of the project.
5. Run the command: `npm start` to start a local instance of the server that will
   allow requests to be made.

# Misc. information

Since this is a private project any developer is required to be invited by the client. All of the documentation with extensive details about the product and environment variables is protected in Confluence. Details about those will be located: https://teammocha.atlassian.net/wiki/spaces/MOCHA/pages
