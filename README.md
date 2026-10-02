# find-first
AI assisted class project

## Section 1 - Command Description
My command is called find-first. It combines the basic functionality of the head and grep commands. It searches for a pattern only within the first specified number of lines of a file.

To run the command, use: node ff.js PATTERN FILENAME NUMBER_OF_LINES

For example: node ff.js ERROR sample.log 10
This searches for ERROR within the first 10 lines of sample.log and displays the matching lines.

## Section 2 - AI-Assisted Programming
I asked AI to help me understand Linux commands such as cat, head, and grep. I also asked AI to suggest test cases and edge cases for my find-first command. AI helped me understand how the commands worked and gave me ideas for different ways to test my program. I still had to run the tests and verify the results myself. One edge case I thought of on my own was testing a negative number for the number of lines. When I ran this test, I discovered that my program did not handle negative numbers correctly. I added a check for negative numbers and retested the program to make sure my change worked. AI helped me with testing ideas, but it did not identify the negative-number edge case. This showed me that I still needed to think independently, test my program, and fix issues myself.
