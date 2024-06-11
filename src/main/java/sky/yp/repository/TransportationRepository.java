package sky.yp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import sky.yp.entity.TransportationEntity;

@Repository
public interface TransportationRepository extends JpaRepository<TransportationEntity, Integer> {

}
