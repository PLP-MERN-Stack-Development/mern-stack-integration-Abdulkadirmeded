    // client/src/App.js
    import React from 'react';
    import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
    import PostList from './components/PostList';
    // Import other components like PostDetail, CreatePost

    function App() {
      return (
        <Router>
          <div className="App">
            <Routes>
              <Route path="/" element={<PostList />} />
              {/* Add routes for PostDetail, CreatePost */}
            </Routes>
          </div>
        </Router>
      );
    }

    export default App;