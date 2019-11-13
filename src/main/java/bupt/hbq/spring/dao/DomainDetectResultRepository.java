package bupt.hbq.spring.dao;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import bupt.hbq.spring.objects.dns.DomainDetectResult;

import java.util.List;

@RepositoryRestResource
@CrossOrigin(origins = "http://localhost:4200")
public interface DomainDetectResultRepository extends JpaRepository<DomainDetectResult, Long>,JpaSpecificationExecutor<DomainDetectResult> {
    List<DomainDetectResult> findDomainDetectResultsByHistoryId(long historyId);
    Page<DomainDetectResult> findByHistoryId(long historyId,Pageable pageable);
    @Query(value = "select domain,count(*)as number from domain_detect_result group by domain order by number DESC limit ?1",nativeQuery = true)
    List<Object[]> getcountDistinctDomain(int n);
    @Query(value = "select  ddr from DomainDetectResult ddr order by ddr.countnumber desc")
    Page<DomainDetectResult> queryTopByCountnumber(Pageable pageable);
    
}
