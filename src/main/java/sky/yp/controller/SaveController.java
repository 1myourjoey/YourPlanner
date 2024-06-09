package sky.yp.controller;

import org.springframework.web.bind.annotation.*;
import sky.yp.dto.Save;
import sky.yp.dto.User;
import sky.yp.entity.*;
import sky.yp.service.SaveService;

import javax.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/users")
public class SaveController {

    private final SaveService saveService;

    public SaveController(SaveService saveService) {
        this.saveService = saveService;
    }

    @GetMapping("/saves")
    public List<Save> getAllSaves(HttpSession session) {
        User loggedInUser = (User) session.getAttribute("loggedInUser");
        int userNo = loggedInUser.getUserNo();
        return saveService.getAllSaves(userNo);
    }

    @GetMapping("/{saveNo}")
    public Map<String, Object> getPlanDetails(@PathVariable int saveNo) {
        Map<String, Object> result = new HashMap<>();

        List<AccommodationEntity> accommodations = saveService.selectAccc(saveNo);
        List<TourEntity> tours = saveService.selectTour(saveNo);
        List<RestaurantEntity> restaurants = saveService.selectResta(saveNo);
        List<TransportationEntity> transportations = saveService.selectTranspor(saveNo);

        result.put("accommodations", accommodations);
        result.put("tours", tours);
        result.put("restaurants", restaurants);
        result.put("transportations", transportations);

        return result;
    }
    @PutMapping("/{saveNo}/todo")
    public void updateTodo(@PathVariable("saveNo") int saveNo, @RequestBody Save save) {
        save.setSaveNo(saveNo); // 업데이트할 대상의 ID 설정
        saveService.updateTodo(save); // 서비스 호출하여 업데이트 수행
    }
    @DeleteMapping("/{saveNo}/delete")
    public void deletePlan(@PathVariable int saveNo) {
        saveService.deletePlan(saveNo);
    }

}
