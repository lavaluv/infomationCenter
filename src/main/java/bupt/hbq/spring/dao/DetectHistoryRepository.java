package bupt.hbq.spring.dao;

import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import bupt.hbq.spring.objects.dns.DetectHistory;

import java.util.List;

@RepositoryRestResource
@CrossOrigin(origins = "http://localhost:4200")
public interface DetectHistoryRepository extends JpaRepository<DetectHistory, Long> {

    List<DetectHistory> findDetectHistoriesByUserId(long userid);
    List<DetectHistory> findFirst1ByHIdGreaterThan(Long hid,Sort sort);
}