# ReChat
## Introduction
A Chat app that allows you to easily connect and chat with others in a chat room, communicating seamlessly in real time.
## Using ReChat
1. Sign Up: If you're a first time user, sign up with your email and password.
2. Sign In: If you're already registered, congrats! Click 'Sign In.' Change your password if needed.
3. Creating a Profile: Create your own profile and make edits/delete if desired.
4. Chat: Enter a chat room and send messages to other signed in users!
5. Chat Log: View your messages in a chat and keep track of your conversation.
6. Have fun! Use ReChat as a fun way to communicate with friends across the interwebs!



## User Stories    
- User will be able to sign up.
- User will be able to sign in, sign out and change password.
- User will create a profile and be able to edit/delete profile.
- User will be able to enter a chat room and send messages to another signed in user.
- User will be able to view messages in a chat.

## Entity Relationship Diagram
<a href="https://imgur.com/a/KT4BnJ5" target="_blank">ReChat Entity Relationship Diagram</a>

## API Routes

### _User Authorization Routes_

| HTTP Method   | URL Path        | Result               | Action           |
|:--------------|:----------------|:---------------------|:-----------------|
| POST          | /sign-up        | create profile       | create           |
| POST          | /sign-in        | get single profile   | show or retrieve |
| DELETE        | /sign-out       | delete profile       | destroy          |
| PATCH         | /change-password| update password      | update           |


### _Profile Routes_

| HTTP Method   | URL Path        | Result               | Action           |
|:--------------|:----------------|:---------------------|:-----------------|
| GET           | /profiles       | read list of profiles| index or list    |
| GET           | /profiles/`:id` | read single profile  | show or retrieve |
| POST          | /profile        | create profile       | create           |
| PATCH         | /profiles/`:id` | update profile       | update           |
| DELETE        | /profiles/`:id` | delete profile       | destroy          |

### _Chat Routes_

| HTTP Method   | URL Path        | Result               | Action           |
|:--------------|:----------------|:---------------------|:-----------------|
| GET           | /chat           | read list of chats   | index or list    |
| POST          | /chat           | create a chat        | create           |

## Planning and Implementation Process

  - **Project Planning**: Managed with the use of Kanban boards via [Git Hub Projects](https://docs.github.com/en/issues/organizing-your-work-with-project-boards).
  - **Workflow & Decision Making**: Progress was monitored with daily stand-ups, sprint planning, sprint goal setting, and pull request reviews.
  - **Problem Solving**: Reviewed [Socket.io](https://socket.io/) documentation, past class lessons, performed Google searches and resolved issues by reviewing code as a team.
  - **Team Communication**: [Slack](https://slack.com/), [Discord](https://discord.com/), and [Zoom](https://zoom.us/)


## Technologies Used

|    Libraries      | Languages        | Frameworks              | Database          | Version Control
|:-----------------------------------------|:----------------|:---------------------|:-----------------|:-----------------|
| [React.js](https://reactjs.org/)       |    [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)        |  [Express](https://expressjs.com/) | [MongoDB](https://www.mongodb.com/)   | [GitHub](https://github.com/) |
|   [Socket.io](https://socket.io/)        | [Javascript](https://www.javascript.com/)          | [BootStrap](https://getbootstrap.com/)       |           |
|  [Axios](https://www.npmjs.com/package/axios)         | [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)          |        |          |
|    [Mongoose](https://mongoosejs.com/)        |           |        |         |
|          |          |       |         |


  
### Opportunities for Future Iterations
- Sending private messages
- Sending images via messages


### [Link to Front End Repo](https://github.com/MoSaCo-Group/chat-app-react-front)
### Links to Deployed Sites:

## The Team: MoSaCo Group
-  <a href="https://github.com/ms00l" target="_blank">Moe Suleiman</a>
- <a href="https://github.com/SakoPak" target="_blank">Sako Pak</a>
- <a href="https://github.com/Jackson916" target="_blank">Colin Jackson</a>

_Thank you for checking out our work!_