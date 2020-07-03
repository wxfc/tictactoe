Tic Tac Toe

This was the first program I built. It is designed to play against someone with end goal of scoring three 'X's or 'O's in a row, column or diagonal.

Technologies

- HTML
- CSS
- Javascript

Approach

Firstly, I started writing out a plan/flow of what I wanted to do, using knowledge and skills I had just gained from the course. I marked it up in HTML creating the board. I didn't add any CSS till later, as I wanted to get the game functioning. 

It did not go to plan, as my javascript code was not translating to what I was wanting to achieve. After googling a lot, looking back through notes and previous codes, and reaching out to my instructors, I realised I was not on the right path and had to restart the project. However, I did have a better understanding of what to do. 

I broke it down further into simple instructions of what I am trying to achieve. I needed a way to state who player 1 was (created a variable with the first player to go starting with 'X') and then checking if the square the player wants to pick is available or not.

Next I created a function to see if a player had won after each go and then a separate function to check for a draw. The issue I ran into here, is a draw was called when the counter hit 9, however it did account for someone winning on the 9th go. So the condition i created for the draw had to be much stricter.

I also was challenged with disabling the board after a win or draw, but that was quite an easy fix

Once there was a functional game, I styled it up with CSS, to create a slightly retro and non-formal game.

Then using DOM manipulation, I added in effects to make for a better gameplay.

The hardest part of the project was taking the knowledge and skills I had gained and know where to apply it in the code, which essentially had me going around in circles.

What I would do differently!

I would spend a lot more time at the drawing board and preparing the project on paper before looking at doing the code. I think understanding what to do and what I'm trying to achieve is much more important than to start coding straight away.

I also should spend more time using the console and elements on the browser. 

After completing a basic function to work, I would go back to the drawing board to see what could be done better and more efficient. 

Unsolved problems

- counter for number of wins
- unable to select token ('X', 'O')
- no timer
- no data storage to keep track of scores of the page has been refreshed
- no easter egg
- no sounds