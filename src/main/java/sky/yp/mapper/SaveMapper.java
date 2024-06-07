package sky.yp.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import sky.yp.dto.Save;
import sky.yp.entity.AccommodationEntity;
import sky.yp.entity.RestaurantEntity;
import sky.yp.entity.TourEntity;
import sky.yp.entity.TransportationEntity;

import java.util.List;

@Mapper
public interface SaveMapper {

    List<Save> selectlist(@Param("userNo") int userNo);

    void updateTodo(Save save);


    List<AccommodationEntity> selectAccommodationBySaveNo(int saveNo);

    List<TourEntity> selectTourBySaveNo(int saveNO);

    List<RestaurantEntity> selectRestaurantBySaveNo(int saveNo);

    List<TransportationEntity> selectTransportationBySaveNo (int saveNO);

    void deletePlan(int saveNo);
}