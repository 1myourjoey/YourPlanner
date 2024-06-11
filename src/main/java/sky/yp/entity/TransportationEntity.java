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
    @Column(name = "TRANSNO")
    private int transNo;

    @Column(name = "SAVENO")
    private int saveNo;

    @Column(name = "USERNO")
    private int userNo;

    @Column(name = "TRANSNAME")
    private String transName;

    @Column(name = "FIRSTPLACE")
    private String firstPlace;

    @Column(name = "ENDPLACE")
    private String endPlace;

    @Column(name = "FIRSTTIME")
    private long firstTime;

    @Column(name = "ENDTIME")
    private long endTime;

    // 생성자, getter 및 setter는 생략되어 있습니다.
    // 필요하다면 추가하십시오.
}
