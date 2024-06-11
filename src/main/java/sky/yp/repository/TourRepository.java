package sky.yp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import sky.yp.entity.TourEntity;

@Repository
public interface TourRepository extends JpaRepository<TourEntity, Integer> {

}
