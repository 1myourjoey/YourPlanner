package sky.yp.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "Restaurant")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class RestaurantEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int resNo;

    private int saveNo;

    private int userNo;

    private String resName;

    private String resAddress;

    private String resImg;

    private String resTel;

    // 생성자, getter 및 setter는 생략되어 있습니다.
    // 필요하다면 추가하십시오.
}
