import { Routes, Route } from "react-router-dom"
import AddRecipeComponent from './MainComponents/AddRecipeComponent'
import GetRecipeComponent from './MainComponents/GetRecipeComponent'
import SearchRecipesComponent from './MainComponents/SearchRecipesComponent'
import UpdateRecipeComponent from './MainComponents/UpdateRecipeComponent'
import DeleteRecipeComponent from './MainComponents/DeleteRecipeComponent'
import LandingPage from "./LandingPage"
import LoginForm from "./LoginForm"
import SignupForm from "./SignupForm"

export default function AppRoutes() {
  return (
    <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/search" element={<SearchRecipesComponent />} />
        <Route path="/add" element={<AddRecipeComponent />} />
        <Route path="/get" element={<GetRecipeComponent />} />
        <Route path="/update" element={<UpdateRecipeComponent />} />
        <Route path="/delete" element={<DeleteRecipeComponent />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
    </Routes>
  )
}
