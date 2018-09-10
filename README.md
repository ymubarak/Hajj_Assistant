# Hajj_Assistant

Link to DevPost: https://devpost.com/software/k-64-hajjassistant


## Inspiration

Every year, pilgrims face many problems in the communication and guidance, more detailed:
- People experiencing pilgrimage for the first time, exhibiting lack of knowledge about different aspects of Hajj.
- The wide variety of Hajj rituals details that are usually hard to remember. 
- The urging need of personal guides throughout the Hajj to acquire different information about different places.
- Many of the pilgrims cannot read the guidelines due to language differences or their inability to read.

## What it does

According to "The Economist", few numbers of pilgrims have smartphones, so, a mobile application solution may not be suitable for many people that can't deal with technology. So, we need a simpler way that's easy to use and doesn't require any expertise.
For our solution:
- It's a wearable smart headphone device with a GPS module that takes speech inquiries through an embedded microphone. It recognizes the content of the query and responding with the relevant reply; this includes information about the current location, useful information about the holy texts and transcripts related to the sacred places the pilgrim visits. 
- It tracks the user's Hajj journey step by step to provide information about what's next. 


## Install

To run the program you must have npm installed. You also need to install the following:

*socket.io*
> npm install socket.io --save

*Expression js*
> npm install expression --save

## Run the demo

Go to the view folder and type in the terminal:
> node index.js

A port number will show up, open the browser and go to:
> localhost:portNumber  
  
### Snapshot
![demo_screenshot](https://github.com/youssef-ahmed/Hajj_Assistant/blob/master/snapshots/demo_snap.PNG)

## What's next for K-64-HajjAssistant

There are some advanced Challenges and Future Work to be considered:

1- **Multilingualism**:
As a proof of concept, we only supported the English language. So, we're planning to support multiple languages to meet the needs of pilgrims from different countries.

2- **Cocktail party problem/Blind Source Separation**: 
as many people are crowded, noise can affect the device ability to properly detect what the user is saying. 
We can solve this problem by using Blind Speech Separation (BSS) technique based on "Independent Component Analysis" (ICA) that acts like a selective attention while filtering out a range of other sounds to separate blindly mixed recorded signals even from only one stream of noisy speech is available.

3- **Network Connection**: 
In the large crowd of pilgrims, many devices are competing for the attention of a cellular network's antennas. Networks are further strained because these are times when people are apt to use data-heavy applications, which are all reasons to weaken or even stop the device's connection. 
This can be solved by regularly storing relevant data based on location and buffer them temporarily in order
to provide an offline service.

# References and Acknowledgments:
The Voice User Interface (VUI) for demonstrating the prototype is a modified version of the github repository:
https://github.com/girliemac/web-speech-ai
