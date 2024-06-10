package sky.yp.mapper;

import org.apache.ibatis.annotations.*;
import sky.yp.dto.Save;
import sky.yp.dto.User;

import java.util.List;

@Mapper
public interface UserMapper {


    void save(User user);

    User findByLoginIdAndPassword(@Param("loginId") String loginId, @Param("pw") String pw);

    void deleteUserByUserNo(int userNo);


    void updateUser(User user);

}

