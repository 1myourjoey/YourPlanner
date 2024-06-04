package sky.yp.mapper;

import org.apache.ibatis.annotations.*;
import sky.yp.dto.User;

@Mapper
public interface UserMapper {



    @Insert("INSERT INTO USER (login_id, pw, email, tel) VALUES (#{loginId}, #{pw}, #{email}, #{tel})")
    void save(User user);

    @Select("SELECT user_no, login_id, pw , email , tel  FROM USER WHERE login_id = #{loginId} AND pw = #{pw}")
    User findByLoginIdAndPassword(@Param("loginId") String loginId, @Param("pw") String pw);

}

