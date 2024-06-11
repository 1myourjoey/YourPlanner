package sky.yp.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import sky.yp.entity.TourEntity;

import java.util.List;

@Mapper
public interface PlanSaveMapper {

    List<TourEntity> saveTour(@Param("tourName") String tourName,
                              @Param("tourAddr") String tourAddr,
                              @Param("tourImg") String tourImg);

}
