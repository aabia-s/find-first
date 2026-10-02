# find-first
AI assisted class project

## Command Description
My command is called find-first. It combines the basic functionality of the head and grep commands. It searches for a pattern only within the first specified number of lines of a file.
To run the command, use: node ff.js PATTERN FILENAME NUMBER_OF_LINES
For example: node ff.js ERROR sample.log 10
This searches for ERROR within the first 10 lines of sample.log and displays the matching lines.

## AI-Assisted Programming
I asked AI to help me understand Linux commands such as cat, head, and grep. I also asked AI to suggest test cases and edge cases for my find-first command. AI helped me understand how the commands worked and helped me think of different ways to test my program. One edge case AI suggested was testing a negative number for the number of lines. When I tested this, I discovered that my program did not give an error message. I had to decide how my command would work, run the tests, and make changes to my code. After finding the negative number issue, I added a check for negative numbers and retested the program. AI did not originally know how my program would behave with every test. For example, the negative number issue was only discovered after I actually ran the test. This showed me that I still needed to test and verify the suggestions from AI instead of assuming they were correct.
