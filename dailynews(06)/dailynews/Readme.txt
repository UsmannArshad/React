This App will cover all the concepts till react-redux.
First we will create app download pacakages(redux,react-redux,react-router-dom@6,bootstrap
react-router-bootstrap,-g json-server,redux,promise) etc
Then we will create Store including Actions reducers and other styling.
Then we will install -g json server make a db.json file then open another terminal
Then run json-server --watch db.json --port 3004 if it will give unauthorized type error run
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser on same terminal.
Now it will give us routes to the temporary db on local host 3004
Now connect server response to store.
We can see we r having 20 articles as a response it can be 1000 or more but we dont want to show 
all of them on a single page rather we need 1st 6 on 1st page then user will enter load more butotn 
to get more.
To use that we will change the URL for the json server like:
now we have 20 articles using this URL:   http://localhost:3004/posts(20 articles on a single page)
=>Page
10 items are returned by default i.e if we write  http://localhost:3004/posts?_page=2
then 11-20 will be shown if i write page=1 then first 10 articles will be shown 
=>Limit
Tells us to how many responses/articles should we get
like   http://localhost:3004/posts?_limit=5=>will only result in first 5 articles 
=>Order
Ascending default
  http://localhost:3004/posts?_order=asc/desc it will not work alone as we dont know on which base we have
  to sort
=>Sort
  http://localhost:3004/posts?_order=desc&_sort=id 
  Now we will have all 20 articles but 20th articles will be at temporary
Q)What we need?
  http://localhost:3004/posts/?_page=1&_limit=6&_order=desc&_sort=id
  Now we will add this in code.
  After that we will make a button that will get next 6 articles into state.
  We have to send previous posts as it will e attached to next state and page also required 
  previous state as 2 come after 1.
  But now we have to apply validation that if there are no more posts then button become invisible