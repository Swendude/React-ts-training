import "./App.css";
import { useState } from "react";
import Counter from "./Components/Counter";
import ArticleList from "./Components/ArticleList";
import PostList from "./Components/PostList";
function App() {
  return (
    <div className="App">
      <PostList />
      {/* <ArticleList /> */}
    </div>
  );
}

export default App;
