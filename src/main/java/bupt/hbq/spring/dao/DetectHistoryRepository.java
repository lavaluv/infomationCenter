package bupt.hbq.spring.dao;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import bupt.hbq.spring.objects.dns.DetectHistory;

import java.util.List;

@RepositoryRestResource
@CrossOrigin(origins = {"http://localhost:4200","http://localhost:63342"})
public interface DetectHistoryRepository extends JpaRepository<DetectHistory, Long> {

    List<DetectHistory> findDetectHistoriesByUserId(long userid);
    List<DetectHistory> findFirst1ByHIdGreaterThan(Long hid,Sort sort);
    Page<DetectHistory> findByUserId(long userId,Pageable pageable);
    List<DetectHistory> findFirst1ByDetectTimeGreaterThan(String detectTime,Sort sort);
    List<DetectHistory> findDetectHistoriesByDetectTimeBetween(String startTime,String endTime);
}
