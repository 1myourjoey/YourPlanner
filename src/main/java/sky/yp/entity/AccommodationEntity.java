package sky.yp.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "Accommodation")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AccommodationEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int accNo;

    private int saveNo;

    private int userNo;

    private String accName;

    private String accAddress;

    private String accImg;

    private String accTel;

    // 생성자, getter 및 setter는 생략되어 있습니다.
    // 필요하다면 추가하십시오.
}
