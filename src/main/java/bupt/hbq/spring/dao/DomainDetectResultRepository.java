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
@CrossOrigin(origins = {"http://localhost:4200","http://localhost:63342"})
public interface DomainDetectResultRepository extends JpaRepository<DomainDetectResult, Long>,JpaSpecificationExecutor<DomainDetectResult> {
	List<DomainDetectResult> findDomainDetectResultsByDomain(String domain);
	List<DomainDetectResult> findDomainDetectResultsByHistoryId(long historyId);
    Page<DomainDetectResult> findByHistoryId(long historyId,Pageable pageable);
    @Query(value = "select ddr.domain,sum(ddr.countnumber) as c from DomainDetectResult ddr group by ddr.domain order by c desc")
    Page<Object[]> queryTopByCountnumber(Pageable pageable);
}
