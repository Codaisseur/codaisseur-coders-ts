// src/App.tsx
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";
import LoginPage from "./pages/LoginPage";
import { bootstrapLogin } from "./store/auth/actions";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(bootstrapLogin());
  }, [dispatch]);

  return (
    <div>
      <Switch>
        {/* more pages to be added here later */}
        <Route path="/post/:id" component={PostPage} />
        <Route path="/login" component={LoginPage} />
        <Route component={HomePage} />
      </Switch>
    </div>
  );
}
