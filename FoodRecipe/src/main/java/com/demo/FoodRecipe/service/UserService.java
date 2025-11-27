package com.demo.FoodRecipe.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import com.demo.FoodRecipe.model.User;
import com.demo.FoodRecipe.repository.UserRepository;



@Service
public class UserService {

    @Autowired
    UserRepository ur;
    
    @Autowired
    JWTService JM;
    
    public String addUser(@RequestBody User user) {
        ur.save(user);
        return "User added"; // Return a success message or any othe
    }

    public String ValidateUser(@RequestParam("email") String email, @RequestParam("password") String password) {
        if(ur.validateCredentials(email, password) > 0) {
            User user = ur.findByEmailAndPassword(email, password);
            if(user != null) {
                String token = JM.generateToken(user);
                return token;
            }
        }
        return "Invalid Credentials";
    }
    

    public User getUserById(int id) {
        return ur.findById(id).orElse(null);
    }

}
