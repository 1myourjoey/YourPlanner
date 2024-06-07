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
    private int transNo;

    private int saveNo;

    private int userNo;

    private String transName;

    private String firstPlace;

    private String endPlace;

    private LocalDateTime time;

    // 생성자, getter 및 setter는 생략되어 있습니다.
    // 필요하다면 추가하십시오.
}
