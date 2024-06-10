package sky.yp.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class User {
    int userNo;

    String loginId;

    String pw;

    String email;

    String tel;


    public User(String loginId, String pw) {
        this.loginId = loginId;
        this.pw = pw;
    }
}
