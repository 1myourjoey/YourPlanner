package sky.yp.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "Transportation")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class TransportationEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "TRANS_NO")
    private int trans_no;

    @Column(name = "SAVE_NO")
    private int saveNo;

    @Column(name = "USER_NO")
    private int userNo;

    @Column(name = "TRANS_NAME")
    private String transName;

    @Column(name = "FIRST_PLACE")
    private String firstPlace;

    @Column(name = "END_PLACE")
    private String endPlace;

    @Column(name = "FIRST_TIME")
    private long firstTime;

    @Column(name = "END_TIME")
    private long endTime;

    // 생성자, getter 및 setter는 생략되어 있습니다.
    // 필요하다면 추가하십시오.
}
