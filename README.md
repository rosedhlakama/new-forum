# news=forum
# Async Redux

User stories for practice with async actions in Redux.


## Install

Enter the commands below in your terminal to get started:

```shell
git clone https://github.com/dev-academy-challenges/boilerplate-redux-async
mv boilerplate-redux-async async-redux-stories
cd async-redux-stories
npm install
npm run dev
```

If you would like to push changes back to your own repository, you'll need to create an empty repository in your GitHub and [change](https://help.github.com/articles/changing-a-remote-s-url/) the `origin` remote to point to that repo:

```shell
git remote set-url origin https://github.com/COHORT-YEAR/async-redux-stories
```


## Start with these

_As a user, I want to click a button and retrieve a list of post titles from the New Zealand subreddit so that I can read about what's going on in New Zealand._
 - This one is done for you! But take a look at it anyway and try to make sure you understand what's going on. In particular, identify:
   - the _action_ and _action creator_. Take a good look at `fetchPosts` in particular. What does it return?
   - the _reducer_
   - the _container_ and _presentation_ components
   - Notice that `LoadSubreddit` is a mixture of both container and presentation: it returns JSX, but it uses `react-redux`'s `connect` function to wire up the `dispatch` allowing it to fire off an _action_.
   - The dev tools setup is a little different when you're using middleware: check out the [docs](https://github.com/zalmoxisus/redux-devtools-extension) for more details.

_As a user, I want to be able to enter a new subreddit to view the titles from so that I can see what else is happening on Reddit._
 - Initially, the subreddit is hardcoded into `LoadSubreddit`. If you use the component's state to keep track of the subreddit (using onChange), you'll be able to add it to the action you dispatch.

_As a user, I want to view not just the title, but also a date and time and a short summary of each post so that I can preview the content._


## Try this next

_As a user, I want to incorporate another API and I don't care which one! So that I can, y'know, have another API to look at._
 - Take the opportunity to practice the process by retrieving data from another API using async actions. Use the same overall structure, returning a thunk from your action creator.


## Stretch

_As a user, I want to be able to sort the list of posts by title and post date so that I can organise my results._

_As a user, I want to be able to sort in both ascending and descending order so that I can see the start and end of the list._

_As a user, I want to filter the list of posts based on a search that I type so that I can find the post I'm looking for._
