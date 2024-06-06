package sky.yp.controller;


import org.springframework.web.bind.annotation.*;
import sky.yp.dto.Save;
import sky.yp.dto.User;
import sky.yp.service.SaveService;

import javax.servlet.http.HttpSession;
import java.util.List;

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
        System.out.println(userNo);
        return saveService.getAllSaves(userNo);
    }

    @PutMapping("/{saveNo}/todo")
    public void updateTodo(@PathVariable("saveNo") int saveNo, @RequestBody Save save) {
        save.setSaveNo(saveNo); // 업데이트할 대상의 ID 설정
        saveService.updateTodo(save); // 서비스 호출하여 업데이트 수행
    }


}
