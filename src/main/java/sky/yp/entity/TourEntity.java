package sky.yp.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "Tour")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class TourEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "TOURNO")
    private int tourNo;

    @Column(name = "SAVENO")
    private int saveNo;

    @Column(name = "USERNO")
    private int userNo;

    @Column(name = "TOURNAME")
    private String tourName;

    @Column(name = "TOURADDRESS")
    private String tourAddress;

    @Column(name = "TOURIMG")
    private String tourImg;

}
