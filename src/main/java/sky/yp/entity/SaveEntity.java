package sky.yp.entity;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "Save")
public class SaveEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private int saveNo;


    private int userNo;


    private String saveTitle;


    private LocalDateTime firstDate;


    private LocalDateTime endDate;


    private String firstPlace;


    private String endPlace;


    private String todo;
}