package sky.yp.service;

import org.springframework.stereotype.Service;
import sky.yp.dto.Save;
import sky.yp.entity.AccommodationEntity;
import sky.yp.entity.RestaurantEntity;
import sky.yp.entity.TourEntity;
import sky.yp.entity.TransportationEntity;
import sky.yp.mapper.SaveMapper;

import java.util.List;

@Service
public class SaveService {

    private final SaveMapper saveMapper;

    public SaveService(SaveMapper saveMapper) {
        this.saveMapper = saveMapper;
    }


    public List<Save> getAllSaves(int userNo) {
        return saveMapper.selectlist(userNo);
    }

    public void updateTodo(Save save) {
        saveMapper.updateTodo(save);
    }



    public  List<AccommodationEntity> selectAccc(int saveNo) {
        return saveMapper.selectAccommodationBySaveNo(saveNo);
    }

    public  List<TourEntity> selectTour(int saveNO){
        return saveMapper.selectTourBySaveNo(saveNO);
    }
    public  List<RestaurantEntity>selectResta(int saveNO){
        return saveMapper.selectRestaurantBySaveNo(saveNO);
    }
    public  List<TransportationEntity>selectTranspor(int saveNO){
        return saveMapper.selectTransportationBySaveNo(saveNO);
    }

    public void deletePlan(int saveNO) {
        saveMapper.deletePlan(saveNO);
    }


}
