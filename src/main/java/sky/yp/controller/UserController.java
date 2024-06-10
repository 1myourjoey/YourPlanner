package sky.yp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import sky.yp.dto.User;
import sky.yp.service.UserService;

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
    public User login(User user, HttpSession session) {
        String loginId = user.getLoginId();
        String password = user.getPw();
        User loggedInUser = userService.login(loginId, password);

        // 로그인 성공 시 세션에 사용자 정보 저장
        if (loggedInUser != null) {
            session.setAttribute("loggedInUser", loggedInUser);
            System.out.println("세션에 사용자 정보가 저장되었습니다: " + session.getAttribute("loggedInUser"));
        }

        return loggedInUser;
    }
    @PostMapping("/signUp")
    public User register(@RequestBody User user) {
        return userService.signUp(user);
    }

    @PostMapping("/logout")
    public void logout(HttpSession session) {
        session.invalidate();
    }



    @PostMapping("/update")
    public String updateMyPage(@RequestBody User user) {
        userService.updateMyPage(user);
        return "MyPage updated successfully.";
    }

    @DeleteMapping("/delete/{userNo}")
    public String deleteMyPage(@PathVariable("userNo") int userNo) {
        System.out.println("Received delete request for userNo: " + userNo);
        userService.deleteUserByUserNo(userNo);
        return "MyPage deleted successfully.";
    }



}