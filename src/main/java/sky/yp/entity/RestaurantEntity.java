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
    @Column(name = "RESNO")
    private int resNo;
    @Column(name = "SAVENO")
    private int saveNo;
    @Column(name = "USERNO")
    private int userNo;
    @Column(name = "RESNAME")
    private String resName;
    @Column(name = "RESADDRESS")
    private String resAddress;
    @Column(name = "RESIMG")
    private String resImg;
    @Column(name = "RESTEL")
    private String resTel;

    // 생성자, getter 및 setter는 생략되어 있습니다.
    // 필요하다면 추가하십시오.
}
