# GREnius - GRE Practice App



## Overview

**GREnius** is a comprehensive web application designed to help users prepare for the Graduate Record Examinations (GRE). This app focuses on the main sections of the GRE, including Quantitative Reasoning, Verbal Reasoning, and a Resource section with essential GRE prep materials. Students are also able to store information about Schools they wish to apply to.

## Use Cases

1. **GRE Practice**: Students can practice answering GRE-style questions with sections for Quantitative and Verbal Reasoning. 

    *must be registered and logged in*

2. **Grad School Tracker**: Users can maintain a list of schools they are applying to, view details, and manage their application process.

     *must be registered and logged in*

3. **Resource Access**: Users gain access to organized resources tailored to each section of the GRE, supporting better preparation. 

    *OPEN to everyone*

## Technical Functionality


GREnius is built with a full-stack MERN (MongoDB, Express, React, Node.js) web application, implementing a RESTful API for interaction between the front and back ends. Key technical features include:

React | Axios | API Implementation -> [US Dept of Ed College Scorecard](https://collegescorecard.ed.gov/data/api-documentation/) | MongoDB | Mongoose | Express | Node.js | JSON Web Tokens 


## Lessons Learned

Through the development of GREnius, I learned several lessons:

1. **Stick to a plan:** Constant changes in ideas and concepts delayed me and caused problems in updating files. For future reference, I will spend a full day, or even 2, planning my next project.
2. **Using hash cyphers**: I was able to use hashing to keep passwords safe in my MongoDB collections. If someone were to view my MongoDB collections, they can't view passwords. I had some familiarity with JWT's but it was great to use those again. 



## Future Enhancements

1. **Enhanced Question Bank**: Adding questions by hand is tedious. I would love to see if there's a way to scrape questions from a Practice exam (including relevent Math graphics). 
2. **Analytical Writing Portion**: The Writing section is also part of the GRE. It's not weighed as much as the others, and having a space to type an essay was too difficult for this project. Perhaps I could connect to OpenAI API to grade essays.
3. **Turn the Schools List into a Tracker**: View schools as categories (applied, accepted, rejected) or sort by application due date.


## Getting Started

To run GREnius on your local machine:

1. Clone the repository: `git clone https://github.com/your-username/GREnius.git`
2. Navigate to the project directory and install dependencies for both frontend and backend:
   ```bash
   cd gre-quiz-app
   npm install
   cd ../backend
   npm install
   ```
3. Set up environment variables:
   - Create `.env` files in the root of both frontend and backend directories.
   - Add your `JWT_SECRET` and MongoDB URI to the backend `.env`, along with the College Scorecard API key.

4. Start the application:
   ```bash
   # In the backend directory
   npm run start
   
   # In the frontend directory
   npm run dev
   ```

