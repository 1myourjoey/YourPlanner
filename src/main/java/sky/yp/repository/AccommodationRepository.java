package sky.yp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import sky.yp.entity.AccommodationEntity;

@Repository
public interface AccommodationRepository extends JpaRepository<AccommodationEntity, Integer> {

}
