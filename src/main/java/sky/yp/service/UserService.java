package sky.yp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import sky.yp.dto.Save;
import sky.yp.dto.User;
import sky.yp.mapper.UserMapper;


@Service
public class UserService {

    private final UserMapper userMapper;

    @Autowired
    public UserService(UserMapper userMapper) {
        this.userMapper = userMapper;
    }


    public User login(String loginId, String pw) {
        return userMapper.findByLoginIdAndPassword(loginId, pw);
    }

    public User signUp(User user) {
        userMapper.save(user);
        return user;
    }
//    삭제

    public void deleteUserByUserNo(int userNo) {
        userMapper.deleteUserByUserNo(userNo);
    }


    public void updateMyPage(User user) {
        userMapper.updateUser(user);
    }
}