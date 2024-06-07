package sky.yp.service;

import org.springframework.stereotype.Service;
import sky.yp.dto.Save;
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
}
