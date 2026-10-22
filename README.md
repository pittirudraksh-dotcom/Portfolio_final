# Personal Portfolio

A responsive portfolio website for Rudraksh Pitti, a B.Tech Computer Science and Engineering student interested in full-stack and web development.

## Live Websites
- Book Reading List: https://reading-list-lake.vercel.app/
## Portfolio Webiste:
 --Portfolio: https://portfolio-final-iota-lake.vercel.app/

## Tech Stack

- HTML
- CSS
- JavaScript
- Python (featured in projects)
- Git and GitHub
- Vercel
- Groq API through a serverless endpoint

## Features

- Personal introduction and education
- Skills and GitHub profile
- Five project cards with repository links
- Project search by project name, description, or technology
- Light/dark mode toggle
- City-based weather lookup
- AI chatbot grounded in the portfolio's details
- Server-side API endpoint to keep the Groq key out of public frontend files
- Responsive desktop and mobile layout

## Projects

1. **Python Programs Collection** — Python practice including factorial and structure-related exercises.
   - https://github.com/pittirudraksh-dotcom/python_basics_25BCON2488
   - https://github.com/pittirudraksh-dotcom/python-basics2_25bcon2488
2. **Messy Python Code Improvement** — A course exercise in AI-assisted Python code improvement.
   - https://github.com/pittirudraksh-dotcom/python-basics2_25bcon2488
3. **Bug Fixing Using Cursor AI** — Python student utilities and debugging/testing practice.
   - https://github.com/pittirudraksh-dotcom/Buggy_python_script-25BCON2488
4. **Interactive Quiz Application** — Quiz application coursework.
   - https://github.com/pittirudraksh-dotcom/QUIZ---25bcon2488
   - Live app: https://ai-quiz-application-2488.netlify.app
5. **Book Reading List Application** — An app for adding books.
   - Repository: https://github.com/rudrakshpittie-ai/reading_list--25BCON2488
   - Live app: https://reading-list-lake.vercel.app/

## Run Locally

The portfolio's static sections work by opening `index.html` in a browser. To test the chatbot locally, run the project using Vercel's development environment so the `/api/chat` function is available.

1. Install Node.js and the Vercel CLI.
2. In the project directory, run `vercel dev`.
3. Add `GROQ_API_KEY` to your local Vercel environment (do not place it in `config.js`).
4. Open the local URL provided by Vercel.

## Deploy to Vercel

1. Push the updated project files to the portfolio repository.
2. Import or redeploy the repository in Vercel.
3. In Vercel Project Settings → Environment Variables, add `GROQ_API_KEY` with a newly generated Groq API key.
4. Optionally set `GROQ_MODEL` if the Groq model name needs to be changed.
5. Redeploy and test project search, theme toggle, weather, mobile layout, all project links, and chatbot responses.

## Security

Never commit an API key to `config.js`, `script.js`, or any other public frontend file. The chatbot function reads the key from the server-side `GROQ_API_KEY` environment variable. If a key has already been published or pasted into shared content, revoke it and create a new one.
