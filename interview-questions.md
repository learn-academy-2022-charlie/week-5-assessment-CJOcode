# ASSESSMENT 5: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is a hash in Ruby?

  #### Your answer:
    A hash is something that stores values that are reusable, similar to variables.

  #### Researched answer:
    A hash stores data that is formatted using keys and their value pairs. Hashes are a convenient tool in Ruby because unlike arrays, you can easily look up a specific value within the hash by calling its key pair. For example, if I wanted to describe my car I would declare my_car, equal to the hash containing keys and values describing my car separated by commas. I could look up one of the individual key pairs simply by printing my_car with a key such as color in side of square brackets and it would return colors value which in my case would be "black". Not only can you easily pull out individual data from the hash but you can also edit/change them easily by calling the name of the hash followed by the key in square brackets and equating it to the new value of your choosing.

2. What is a gem?

  #### Your answer:
    Gems are open source libraries that have packaged up code with pre-made formats and functionalities that make a standard platform for all developers to use making it easier for dev's to share code.

  #### Researched answer:
    Gems are open source libraries that provide a standardized package of code which can be downloaded onto anyone's computer. Rspec is an example of a Ruby gem is is packed up and easily reusable between developers. When downloaded, it opens up with pre-set functionalities allowing for all developers using it to be on the same page when trouble shooting and sharing code because the code will look similar across all platforms.  


3. What is Ruby on Rails?

  #### Your answer:
    Ruby on Rails is a framework that is used for the backend side of the house when creating a website. It stores all of the data for your website while connecting it to the UI allowing users to interact with and input information into your database.

  #### Researched answer:
    The framework of Ruby on Rails simplifies the creation of the backend portions of programming by providing a default database and structure the you can use as a foundation. ROR uses a Model-View-Controller architectural pattern which has three main parts. First, the Model is the "memory card" of our application which holds the data and logic. Next, the Controller is the brain, making the decision and handles the requests and responses between the server and user. View is what the user sees and interacts with handing the data to the controller to decide what to do with the users requests.  


4. What is a relational database? Are there other kinds of databases?

  #### Your answer:
    Relational databases is a style of organizing data placing the information into rows and columns. We use this when working with rails.

  #### Researched answer:
    Relational database's layout our data and information that we want to store in rows and columns making it organized and easy to read. It looks similar to an excel worksheet. Instead of making individual variables for each piece of data we can create generic classes that can be used over and over again to describe each piece of data. So with relational databases we create a Model("class") and give it properties("column headers") that we want our data to inherit. Then we can add a new Row of data inheriting the properties that we can customize for that child component of data. There are other types of databases such as Hierarchical, Network, and Object-Oriented databases just to name a few.


5. What are primary keys? Why are they important?

  #### Your answer:
    Primary keys are the unique ID's that every piece of data gets when entering it into your database.

  #### Researched answer:
    The primary key called ID in Rails usually starts at 1 being the first piece of data entered into your database and goes up by increments of one for every other piece of data entered after that. The primary key helps locate data and prevents a confusion between separate pieces of data that might have the same name but different properties. Using the model name and .read followed by the ID number will allow you to see the data associated with that Primary key.


## Looking Ahead: Terms for Next Week
Research and define the following terms to the best of your ability.

1. RESTful routes:
  takes the action of the user and provides a route to the controller where it makes a decision for that info 

2. JSON:
  JavaScript Object Notation - easily used with javascript to store and transports data 

3. ERB:
  A template engine that allows you to combine Ruby and HTML generating them to the UI

4. Params:
   Tracks information when the user clicks on things through the URL

5. API:
  Application Programming Interfaces - allows applications to talk with each other in other words requesy, send, and receive information from each other.
