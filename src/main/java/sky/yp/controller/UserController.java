package sky.yp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import sky.yp.dto.User;
import sky.yp.service.UserService;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/login")
    public User login(@RequestBody User user, HttpServletRequest request) {
        if (user != null && user.getPw() != null && user.getPw().equals(user.getPw())) {
            // 사용자 객체를 세션에 저장합니다.
            HttpSession session = request.getSession();
            session.setAttribute("loggedInUser", user);
        }

        return userService.login(user.getLoginId(), user.getPw());
    }

    @PostMapping("/signUp")
    public User register(@RequestBody User user) {
        // 회원가입 처리를 수행하고 유저 정보를 반환
        return userService.signUp(user);
    }
}
