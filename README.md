# React Router and GitHub API App 🚀

A React project built as part of learning and experimenting with **React DOM** and **React Router**, styled using **Tailwind CSS**. This app fetches data from the GitHub API and demonstrates advanced features like loaders and dynamic routing.

## Features 🌟

- **Dynamic Routing**: Implemented with `React Router`.
- **Loader Integration**: Fetches data using `React Router loaders`.
- **GitHub API Integration**: Displays user information fetched from the GitHub API.
- **Reusable Components**: Includes modular components like `Header`, `Footer`, and `Github`.
- **Responsive Design**: Styled using **Tailwind CSS** for a modern look and feel.

## Installation Steps 🛠️

1. Clone the repository:
   

2. Install dependencies:
   ```bash
   npm install
   ```

3. **Set up Tailwind CSS**:  
   Follow these steps to integrate Tailwind CSS into your project:  
   - Install Tailwind CSS:
     ```bash
     npm install -D tailwindcss postcss autoprefixer
     npx tailwindcss init
     ```
   - Add the following configuration in your `tailwind.config.js`:
     ```javascript
     module.exports = {
       content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
       theme: {
         extend: {},
       },
       plugins: [],
     };
     ```
   - Add the Tailwind directives to your `index.css`:
     ```css
     @tailwind base;
     @tailwind components;
     @tailwind utilities;
     ```
   - For more details, visit the [Tailwind CSS Documentation](https://tailwindcss.com/docs/installation).

4. **Set up React Router with Loaders**:  
   Follow these steps to integrate React Router loaders:
   - Install React Router:
     ```bash
     npm install react-router-dom
     ```
  

5. Start the development server:
   ```bash
   npm run dev
   ```

6. Open the app in your browser:
   ```
   http://localhost:5173

1. **Home Page**: Displays the landing page with navigation links.
2. **About Page**: Static page to describe the app.
3. **Contact Page**: Static page for contact information.
4. **GitHub Page**: Fetches and displays data from your GitHub profile.

### GitHub Page Example:
- Fetches `bio`, `avatar_url`, and other details from your GitHub profile using `https://api.github.com/users/KARANDER`.

## Technology Stack 🛠️

- **React**: For building the user interface.
- **React Router**: For routing and navigation.
- **Tailwind CSS**: For styling the app.
- **GitHub API**: For fetching user data.
- **Vite**: For development and build tooling.


## Code Highlights ✨

### GitHub API Loader Function:
```javascript
export const githubinfoLoader = async () => {
  const Response = await fetch("https://api.github.com/users/KARANDER");
  return Response.json();
};
```

### GitHub Component:
```javascript
export default function Github() {
  const data = useLoaderData();
  return (
    <div className="text-center p-3 text-2xl font-mono font-semibold text-rose-800 bg-slate-500">
      {data.bio}
      <img src={data.avatar_url} alt="Profile" className="h-64 w-64 m-5" />
    </div>
  );
}
```

### Dynamic Routes Setup:
```javascript
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route loader={githubinfoLoader} path="github" element={<Github />} />
    </Route>
  )
);
```


## Learning Goals 📚

- Understand and practice dynamic routing with React Router.
- Work with loaders for pre-fetching data in React Router.
- Experiment with component-based design in React.
- Explore responsive design with Tailwind CSS.

## Future Enhancements 🚀

- Add a search feature to fetch details for any GitHub user.
- Implement a light/dark mode toggle.
- Include tests for routes, loaders, and API interactions.

## Acknowledgments 🙏

- GitHub API documentation: [https://docs.github.com/en/rest](https://docs.github.com/en/rest)
- React Router documentation: [https://reactrouter.com/en/main](https://reactrouter.com/en/main)
- Tailwind CSS: [https://tailwindcss.com/](https://tailwindcss.com/)

## License 🔒

This project is licensed under the MIT License.

---

I’m a beginner coder on a mission to create and learn. Your feedback means a lot!  
Contact me at: [derkaran@gmail.com](mailto:derkaran@gmail.com)  
Connect with me on LinkedIn: [![LinkedIn](https://img.shields.io/badge/LinkedIn-Karan%20Der-blue?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/karan-der/)


