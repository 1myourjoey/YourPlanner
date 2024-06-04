package sky.yp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
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
        // 아이디와 비밀번호를 기반으로 사용자를 찾습니다.
        return userMapper.findByLoginIdAndPassword(loginId, pw);
    }

    public User signUp(User user) {
        userMapper.save(user);
        return user;
    }
}
