package sky.yp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import sky.yp.mapper.PlanSaveMapper;

@Service
public class PlanSaveService {

    private final PlanSaveMapper planSaveMapper;

    @Autowired
    public PlanSaveService(PlanSaveMapper planSaveMapper){
        this.planSaveMapper = planSaveMapper;
    }

    public void saveTour(String tourName, String tourAddr, String tourImg){
        planSaveMapper.saveTour(tourName, tourAddr, tourImg);
    }
}
