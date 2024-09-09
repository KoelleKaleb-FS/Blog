// data/posts/post2.js
const post2 = {
    id: 'second-post',
    title: "Introduction to Tailwind CSS",
    date: "2024-08-20",
    author: "Kaleb Koelle",
    content: `
      ## What is Tailwind CSS?
      Tailwind CSS is a utility-first CSS framework that allows for rapid UI development by providing a set of low-level utility classes.
  
      ## Features
      - **Utility-First**: Apply styles directly to elements with pre-defined classes.
      - **Customizable**: Easily customize and extend Tailwind's default configuration.
      - **Responsive Design**: Built-in responsive design utilities.
  
      ## Advantages
      - **Faster Development**: Write less custom CSS and use predefined classes.
      - **Consistency**: Enforces consistent styling across the application.
  
      ## Getting Started
      Install Tailwind via npm and include it in your project’s CSS.
  
      \`\`\`bash
      npm install tailwindcss
      \`\`\`
  
      Add Tailwind to your CSS file:
  
      \`\`\`css
      @tailwind base;
      @tailwind components;
      @tailwind utilities;
      \`\`\`
  
      ## Conclusion
      Tailwind CSS can significantly speed up the development process and ensure consistent design across your application.
    `,
    tags: ["CSS", "Web Design"]
  };
  
  export default post2;
  