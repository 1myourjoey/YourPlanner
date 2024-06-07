package sky.yp.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import sky.yp.dto.Save;

import java.util.List;

@Mapper
public interface SaveMapper {

    List<Save> selectlist(@Param("userNo") int userNo);

    void updateTodo(Save save);
}
