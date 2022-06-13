# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns all the words that contain that particular letter.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

# Pseudo -->
# Create a function called contLett that has two parameters, and array and a letter.
# Iterate through the array using the select method and store all the words that contain the specified letter
# Print contLett with the parameters.

def contLett array, letter
    array.select{ |word| word.include? letter }
end

p contLett(beverages_array, letter_o)

# -------------------2) Create a method that takes in an array of numbers and returns the sum of the numbers. Use the test variables provided.

nums_array1 = [42, 7, 27]
# Expected output: 76

nums_array2 = [25, 17, 47, 11]
# Expected output: 100

#Psuedo -->
# Create a method called sum_of_array that takes in an array full of numbers as an argument an adds all the values together.
# Use the method .sum to add the values together 
# print sum_of_array

def sum_of_array array
    array.sum
end

p sum_of_array nums_array1
p sum_of_array nums_array2


# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

# Make a class called Bike 
    # Create an initialize method with a title as a param, wheels set to 2 and speed starting at zero.
    # Add a attr_accessor for your get and set method. 
# Create a method called bike info that uses string interpolation describing the name of the bike, how many wheels it has and current speed.
# To make the bake go faster create a method called pedal_faster which takes a number as the parameter and adds it to the speed.
# To slow down create a method called brake that takes a number as the parameter and subtracts it form the current speed.
    # Create an if statement that returns 0 if the speed goes negative.
class Bike 
    attr_accessor :wheels, :speed
    def initialize title
        @title = title
        @wheels = 2
        @speed = 0
    end
    def bike_info
        "The #{@title} bike has #{@wheels} wheels and is going #{@speed} mph"
    end
    def pedal_faster speedup
        @speed += speedup
    end
    def brake slowdown
        if @speed - slowdown < 0 
            @speed = 0
        else
            @speed -= slowdown
        end
    end
end

bike = Bike.new 'Ninja'
p bike.bike_info #"The Ninja bike has 2 wheels and is going 0 mph"
bike.pedal_faster 10
p bike.speed # 10
bike.pedal_faster 7
p bike.speed # 17
p bike.bike_info # "The Ninja bike has 2 wheels and is going 17 mph"
bike.brake 12
p bike.speed # 5
p bike.bike_info # "The Ninja bike has 2 wheels and is going 5 mph"
bike.brake 9
p bike.speed # 0 

# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0
