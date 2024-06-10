package sky.yp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import sky.yp.entity.SaveEntity;

@Repository
public interface SaveRepository extends JpaRepository<SaveEntity, Integer> {

}
