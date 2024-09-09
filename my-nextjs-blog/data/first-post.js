const post1 = {
    id: 'first-post',
    title: "Understanding React Server Components",
    date: "2024-09-01",
    author: "Kaleb Koelle",
    content: `
      ## Introduction
      React Server Components are a new experimental feature designed to improve the performance and user experience of React applications. They enable rendering components on the server without sending their JavaScript code to the client.
  
      ## Key Features
      - **Server-Only Components**: Components that render on the server and do not include client-side JavaScript.
      - **Suspense for Data Fetching**: Simplifies data fetching and loading states with React's Suspense.
  
      ## Benefits
      - **Reduced Bundle Size**: Server-rendered components help in reducing the amount of JavaScript sent to the client.
      - **Improved Performance**: Faster initial load times and improved SEO.
  
      ## Conclusion
      React Server Components offer a powerful way to enhance the performance of React applications by shifting more rendering responsibilities to the server.
    `,
    tags: ["React", "Web Development"]
  };
  
  export default post1;
  