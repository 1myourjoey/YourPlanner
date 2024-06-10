package sky.yp.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@Table(name = "Save")
public class SaveEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int saveNo;


    private int userNo;


    private String saveTitle;


    private String firstDate;


    private String endDate;


    private String firstPlace;


    private String endPlace;


    private String todo;
}