# signaAPI

## Question 1: Functional Programming using Clojure
```
We use Clojure as our primary programming language.  It currently runs the API for the frontend, as well as all of the
technology that consists of our ETL pipeline.  API engineers spend most of their time either writing or reading Clojure throughout their
day.  If you're not famliar with Clojure, that's totally fine, you can learn it here!  This question is an opportunity to demonstrate your
interest or capability in Clojure.  Please make sure to write an answer that's in valid Clojure.  If you don't know where to start, don't worry,
this question should be pretty easy to answer after some quick googling or a Clojure tutorial.
```

Question - Using a functional approach, write a function to calculate the total number of hours where capex=true:

```
d = {
 "project A": {"hours": 7, "capex": true},
 "project B": {"hours": 3, "capex": false},
 "project C": {"hours": 6, "capex": true}
}
```
Answer => 13 (7 + 6)

## Question 2: Documentation and Testing
```
Good documentation and test coverage should be the hallmark of any professional software team. We are always striving to get better at making our
code as understandable as possible.  This means that we make a point to write tests for any testable contribution to a project, as well as add a
doc string and any code that seems like it needs extra explanation.
```

Question - How would you document and test this code snippet?  Feel free to answer with both pseduocode, some text describing your approach, or both!

```
(map
    #(cond (divides? 15 %) "FizzBuzz"
           (divides? 3 %)  "Fizz"
           (divides? 5 %)  "Buzz"
           :else %) (range 1 101))
```

How about this code snippet?

```
(defresource create-label
             [database project-id inv-id user-id message-ids name doi]
             resource/base-resource
             :allowed-methods [:post]
             :handle-ok (fn [_]
                          (let [message-ids (json/parse-string message-ids)]

                            {:label_id (db-label/create-label
                                         (:connection database)
                                         project-id
                                         inv-id
                                         user-id
                                         message-ids
                                         name
                                         doi)})))

```


## Question 3: SQL

```
The API engineers touch both the Elasticsearch database filled with the results of the work of the backend team as well as
the MySQL data that sits underneath the application layer providing all kinds of metadata and information about and for the users.
Having SQL skills is a critical part of being able to understand how our application works as well as being able to provide
the frontend team with information about how an endpoint works, what information it's fetching and where.  It's part of what
makes the API engineering role such a dynamic and engaging part of the SF engineering team.
```


Show us you know how to join, aggregate, sort, and filter in SQL.

Visit https://data.stackexchange.com/stackoverflow/query/new

There you'll find stack overflow's data and a T-SQL sandbox. 

Poke around and understand what you're looking at. Then write a SQL function that can be run on any date and return the following:



Find pairs of new users who are the 'accepted answer' of each other's questions more than once.

By new users we mean accounts that have been open under a month.

Don't include posters answering their own questions or posts without owners. 

It should run relatively quickly and produce only a few rows of applicable data.

You can save your query as a permalink and send the link back or send your query as text. Comments are very much appreciated.