package sky.yp.entity;
import javax.persistence.*;


@Entity
@Table(name = "Users")
public class UserEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int userNo;

    String loginId;

    String pw;

    String email;

    String tel;


}
